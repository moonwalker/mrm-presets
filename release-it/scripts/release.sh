#!/bin/bash

./node_modules/.bin/release-it --config ./build/release-it/release.js --ci $CIRCLE_TAG
