#!/bin/sh
set -e
echo -e "RUN: npm test $@"
npm test $@ || true
npm run report
