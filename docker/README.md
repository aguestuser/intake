# Crisisbox Docker

Crisisbox docker setup with owncloud:

1) Create the intake container:

build `crisisbox/intake`: ```make```

2) Add these lines to /etc/hosts:

``` 
127.0.0.1       crisisbox.dev
127.0.0.1       owncloud.crisisbox.dev
```

3) Launch the services:

start docker: ``` docker-compose up ```
	
or in the background:  ``` docker-compose up -d ```
		
4) Configure Owncloud

go to ``` owncloud.crisisbox.dev ``` 

Under 'create an admin account' enter admin for both the username and password:

```
username -> admin
password -> admin
```

(yes, this cannot be changed to anything else yet)

Then click 'storage & database', choose the option 'MySQL/MariaDB' and enter in the following information:

```
Database User -> root
Database Password -> root
Database Name -> crisisbox
Database Host -> mysql
```

It will have already filled in the host with 'localhost'. Make sure you delete localhost and replace it with 'mysql'.

5) Mount webdav

After the owncloud setup is finished, mount the webdav folder in the intake container by running the script _mount_webdav.sh_:

``` ./mount_webdav.sh  ```

Wait a minute or so for it to sync.

6) Test it out! 

Go to ``` crisisbox.dev ```, fill out the form and then go to owncloud to see the submitted file.



	
	
