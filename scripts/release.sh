#!/bin/bash

read -p 'Type (major|minor|patch): ' TYPE

yarn workspaces foreach version $TYPE
yarn
yarn build
yarn
yarn workspaces foreach npm publish
