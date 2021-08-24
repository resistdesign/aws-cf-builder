#!/bin/bash

# Get release type.
read -p 'Type (major|minor|patch): ' TYPE

# Update workspace package versions, build, install and publish.
yarn workspaces foreach version $TYPE
yarn
yarn build
yarn
yarn workspaces foreach npm publish

# Commit and push version updates.
git add .
git commit -m "chore: (repo) Release a ${TYPE} version."
git push
clear
git status
