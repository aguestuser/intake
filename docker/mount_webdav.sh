#!/bin/bash

docker-compose exec --privileged intake /bin/bash -c 'mount.davfs http://owncloud/remote.php/webdav /cb/intake-receiver/data'

