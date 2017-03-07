# Crisis Box Intake

* An intake form and a signup form implemented in `React`
* A server which receives the submission and converts them to `odt` files for
  further editting, implemented in NodeJS.
* See [kanban board](https://apps.unite.tech/grain/XLesz7hbLomKAtL2AfzT53) for details

# Setup

```
sudo apt-get nvm pandoc
git clone git@github.com:crisisbox/intake.git
cd intake
./install.sh
```

# Running locally

* Start the server:

```
cd server
npm start
```

* then start the client:

```
cd client
npm start
```

* then point your favorite browser to `localhost:3000/intake` or `localhost:3000/signup`
* then make a submission!

# Testing

There are no tests at the moment.
