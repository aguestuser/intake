FROM node:7

ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && apt-get install -y pandoc davfs2 rsync

RUN mkdir /crisisbox
COPY . /crisisbox/server
RUN cd /crisisbox/server && npm install

EXPOSE 3001

RUN echo 'use_locks 0' >> /etc/davfs2/davfs2.conf
RUN mkdir -p /crisisbox/server/data

CMD cd /crisisbox/server && npm start
