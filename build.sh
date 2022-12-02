#!/bin/bash

set -e

echo "Building python environment"
if [[ ! -d "output/py" ]]; then
  python3.9 -m venv output/py
  . output/py/bin/activate
  pip install --upgrade pip setuptools >> output/pip.out 2>&1
  pip install -r requirements.txt >> output/pip.out 2>&1
else
  . output/py/bin/activate
fi

echo "Building node environment"
if [[ ! -d "output/node" ]]; then
  nodeenv --node=16.16.0 --with-npm --npm=9.1.3 output/node
  npm install
  . output/node/bin/activate
else
  . output/node/bin/activate
fi

cd website

echo "Building static website"
yarn install
yarn run build

echo "Serving website"
yarn run serve
