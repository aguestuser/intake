FROM node:7

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && apt-get install -y pandoc davfs2 rsync

RUN mkdir /cb
COPY client /cb/intake-form
COPY server /cb/intake-receiver
RUN npm install -g babel-cli
RUN cd /cb/intake-form && npm install
RUN cd /cb/intake-receiver && npm install

EXPOSE 3000 3001

RUN echo 'use_locks 0' >> /etc/davfs2/davfs2.conf
RUN echo "http://owncloud/remote.php/webdav/ admin admin" >> /etc/davfs2/secrets
RUN mkdir -p /cb/intake-receiver/data

CMD babel-node /cb/intake-receiver/app.js & cd /cb/intake-form && node scripts/start.js
