# Crisis Box Intake Form

* simple react intake form for rapid response work
* built for "thin slice" proof-of-concept for crisisbox
* see [kanban board](https://apps.unite.tech/grain/XLesz7hbLomKAtL2AfzT53) for details
* to be moved to self-hosted gitlab repo once configured

# Getting started
* Run the following in your favorite shell:

```
$ git clone git@github.com:aguestuser/crisisbox-intake-form.git
$ cd intake-form
$ ./install.sh
```

# Running locally
```
$ nvm use < .nvmrc
$ npm start
```
* spin up [crisisbox/intake-receiver](https://github.com/aguestuser/crisisbox-intake-receiver) to handle form responses
* point your favorite browser to `localhost:3000`
* make a submission!

# Dependencies

* nvm
* expects a server that will handle a JSON `POST` request to `http://localhost:8080/intake` (ie: `intake-receiver`)
