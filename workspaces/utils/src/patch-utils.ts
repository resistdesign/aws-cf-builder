export type MergeStrategy = 'transpose' | 'accumulate' | 'accumulate-unique' | 'accumulate-unique-by' | 'replace';

export type MergeStrategyDescriptor = {
  strategy: MergeStrategy;
  data?: any;
};

export type ValuePathString = string;

export type ValuePathArray = (string | number)[];

export type MergeStrategyMap = Record<ValuePathString, MergeStrategyDescriptor>;

export const DEFAULT_MERGE_STRATEGY: MergeStrategy = 'transpose';

export const getValuePathString = (valuePathArray: ValuePathArray = []): string => valuePathArray.map((p) => encodeURIComponent(p)).join('/');

export const getValuePathArray = (valuePathString: ValuePathString = ''): string[] => valuePathString.split('/').map((p) => decodeURIComponent(p));

export const isConstructedFrom = (value: any, constructorReference: Function): boolean =>
  value !== null && typeof value === 'object' && 'constructor' in value && value.constructor === constructorReference;

export const mergeValues = (valuePathArray: ValuePathArray = [], existingValue: any, newValue: any, mergeStrategyMap: MergeStrategyMap = {}): any => {
  const valuePathString = getValuePathString(valuePathArray);
  const arrayIndexWildcardValuePathString = getValuePathString(valuePathArray.map((p, i) => (i === valuePathArray.length - 1 ? '#' : p)));
  const lastValuePathPart = valuePathArray[valuePathArray.length - 1];
  const {
    [valuePathString]: {
      strategy: specificKeyMergeStrategy = DEFAULT_MERGE_STRATEGY,
      data: specificKeyMergeStrategyData = undefined,
    } = {} as Partial<MergeStrategyDescriptor>,
    [arrayIndexWildcardValuePathString]: {
      strategy: arrayIndexWildcardMergeStrategy = DEFAULT_MERGE_STRATEGY,
      data: arrayIndexWildcardMergeStrategyData = undefined,
    } = {} as Partial<MergeStrategyDescriptor>,
  } = mergeStrategyMap;
  const mergeStrategy =
    valuePathString in mergeStrategyMap
      ? specificKeyMergeStrategy
      : typeof lastValuePathPart === 'number'
      ? arrayIndexWildcardMergeStrategy
      : specificKeyMergeStrategy;
  const mergeStrategyData =
    valuePathString in mergeStrategyMap
      ? specificKeyMergeStrategyData
      : typeof lastValuePathPart === 'number'
      ? arrayIndexWildcardMergeStrategyData
      : specificKeyMergeStrategyData;

  if (mergeStrategy !== 'replace') {
    if (isConstructedFrom(existingValue, Array) && isConstructedFrom(newValue, Array)) {
      if (mergeStrategy === 'accumulate') {
        return [...existingValue, ...newValue];
      } else if (mergeStrategy === 'accumulate-unique') {
        return [...existingValue, ...newValue.filter((item: any) => existingValue.indexOf(item) === -1)];
      } else if (mergeStrategy === 'accumulate-unique-by') {
        const keyName = mergeStrategyData as string;
        const existingItemMap: Record<string, any> = {};
        const newItemMap: Record<string, any> = {};

        for (let i = 0; i < existingValue.length; i++) {
          const existingItem = existingValue[i];

          if (existingItem && typeof existingItem === 'object') {
            const { [keyName]: identifier = undefined } = existingItem;

            existingItemMap[identifier as string] = existingItem;
          }
        }

        for (let j = 0; j < newValue.length; j++) {
          const newItem = existingValue[j];

          if (newItem && typeof newItem === 'object') {
            const { [keyName]: identifier = undefined } = newItem;

            newItemMap[identifier as string] = newItem;
          }
        }

        return Object.keys({
          ...existingItemMap,
          ...newItemMap,
        }).forEach((id, index) => mergeValues([...valuePathArray, index], existingItemMap[id], newItemMap[id], mergeStrategyMap));
      } else if (mergeStrategy === 'transpose') {
        const fullLength = Math.max(existingValue.length, newValue.length);

        return [...new Array(fullLength)].map((_empty, index) =>
          mergeValues([...valuePathArray, index], existingValue[index], newValue[index], mergeStrategyMap)
        );
      }
    } else if (isConstructedFrom(existingValue, Object) && isConstructedFrom(newValue, Object)) {
      return Object.keys({ ...existingValue, ...newValue }).reduce(
        (acc, k) => ({
          ...acc,
          [k]: mergeValues([...valuePathArray, k], existingValue[k], newValue[k], mergeStrategyMap),
        }),
        {}
      );
    }
  }

  return typeof newValue !== 'undefined' ? newValue : existingValue;
};
