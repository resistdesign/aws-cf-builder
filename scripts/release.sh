#!/bin/bash

read -p 'Type (major|minor|patch): ' TYPE

yarn workspaces foreach version $TYPE
