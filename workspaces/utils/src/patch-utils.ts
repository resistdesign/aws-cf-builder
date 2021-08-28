export type MergeStrategy = 'transpose' | 'accumulate' | 'replace';

export type ValuePathString = string;

export type ValuePathArray = (string | number)[];

export type MergeStrategyMap = Record<ValuePathString, MergeStrategy>;

export const DEFAULT_MERGE_STRATEGY: MergeStrategy = 'transpose';

export const getValuePathString = (valuePathArray: ValuePathArray = []): string => valuePathArray.map((p) => encodeURIComponent(p)).join('/');

export const getValuePathArray = (valuePathString: ValuePathString = ''): string[] => valuePathString.split('/').map((p) => decodeURIComponent(p));

export const isConstructedFrom = (value: any, constructorReference: Function): boolean =>
  value !== null && typeof value === 'object' && 'constructor' in value && value.constructor === constructorReference;

export const mergeValues = (valuePathArray: ValuePathArray = [], existingValue: any, newValue: any, mergeStrategyMap: MergeStrategyMap = {}): any => {
  const valuePathString = getValuePathString(valuePathArray);
  const { [valuePathString]: mergeStrategy = DEFAULT_MERGE_STRATEGY } = mergeStrategyMap;

  // TODO: valuePathString is last valuePathArray part is a number???

  if (mergeStrategy !== 'replace') {
    if (isConstructedFrom(existingValue, Array) && isConstructedFrom(newValue, Array)) {
      if (mergeStrategy === 'accumulate') {
        return [...existingValue, ...newValue];
      } else if (mergeStrategy === 'transpose') {
        return [...new Array(Math.max(existingValue.length, newValue.length))].map((_empty, index) =>
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
