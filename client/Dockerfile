FROM node:7

RUN mkdir /crisisbox
COPY . /crisisbox/client
RUN cd /crisisbox/client && npm install

EXPOSE 3000

CMD cd /crisisbox/client && npm start
