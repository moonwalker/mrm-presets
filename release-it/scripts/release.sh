#!/bin/bash

./node_modules/.bin/release-it --config ./config/release-it/release.js --ci --disable-metrics $CIRCLE_TAG
