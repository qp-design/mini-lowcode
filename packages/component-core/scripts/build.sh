#!/usr/bin/env sh
rm -rf dist/
prettier --write src/
rollup -c
