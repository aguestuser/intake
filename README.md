# Crisis Box Intake

* react intake form with lightweight node rest api server for capturing rapid response intake data
* see [kanban board](https://apps.unite.tech/grain/XLesz7hbLomKAtL2AfzT53) for details

# Getting started

* Run the following in your favorite shell:

```
$ git clone git@github.com:crisisbox/intake.git
$ cd intake
$ pushd `pwd`
$ cd client
$ ./install.sh
$ cd ../server
$ ./install.sh
$ popd
```

# Running locally

* start the server:

```
$ cd <path/to>/intake/server
$ nvm use < .nvmrc
$ npm start
```

* start the client:

```
$ cd <path/to>/intake/client
$ nvm use < .nvmrc
$ npm start
```

* point your favorite browser to `localhost:3000`
* make a submission!

# Dependencies

* nvm
* pandoc
