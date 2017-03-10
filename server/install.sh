#!/bin/bash

# set bash strict-mode, cf http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -veuo pipefail
IFS=$'\n\t'

. ~/.nvm/nvm.sh

nvm install
nvm use < .nvmrc
npm install
