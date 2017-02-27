# Crisis Box Intake Receiver

* handles responses from intake form and writes them to file system
* built for "thin slice" proof-of-concept for crisisbox
* see [kanban board](https://apps.unite.tech/grain/XLesz7hbLomKAtL2AfzT53) for details
* to be moved to self-hosted gitlab repo once configured

# Getting started
* Run the following in your favorite shell:

```
$ git clone git@github.com:aguestuser/crisisbox-intake-receiver.git
$ cd intake-receiver
$ ./install.sh
```

# Running locally
```
$ nvm use < .nvmrc
$ npm start
```

* spin up [crisisbox/intake-form](https://github.com/aguestuser/crisisbox-intake-form) and make a submission!

# Dependencies

* nvm
* a client making form submissions (see above!)
