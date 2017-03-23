#!/bin/bash

docker-compose exec --privileged server /bin/bash -c 'echo "http://owncloud/remote.php/webdav/ admin admin" >> /etc/davfs2/secrets'

docker-compose exec --privileged server /bin/bash -c 'mount.davfs http://owncloud/remote.php/webdav /crisisbox/server/data'
