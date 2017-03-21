#!/bin/bash

username=${CRISISBOX_OWNCLOUD_USERNAME:-admin}
password=${CRISISBOX_OWNCLOUD_PASSWORD:-admin}


until [[ -n $(curl -Is http://owncloud.crisisbox.dev | head -n 1 | grep "200 OK") ]]
do
    echo "waiting for owncloud container..."
    sleep 0.5
done

echo "Setting up owncloud..."

curl_data="install=true&adminlogin=${username}&adminpass=${password}&adminpass-clone=admin&directory=%2Fvar%2Fwww%2Fhtml%2Fdata&dbtype=mysql&dbuser=root&dbpass=root&dbpass-clone=root&dbname=crisisbox&dbhost=mysql"

curl -s http://owncloud.crisisbox.dev/index.php -H 'Host: owncloud.crisisbox.dev' --data $curl_data
