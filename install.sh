#!/bin/bash

# set bash strict-mode, cf http://redsymbol.net/articles/unofficial-bash-strict-mode/
set -veuo pipefail
IFS=$'\n\t'

(cd server; ./install.sh)
(cd client; ./install.sh)
