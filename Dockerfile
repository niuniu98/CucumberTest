FROM node:10-alpine
MAINTAINER Optimus TEAM #bt-optimus

COPY . /src
WORKDIR /src
RUN npm install
RUN npm run build

RUN /src/node_modules/protractor/node_modules/webdriver-manager/bin/webdriver-manager update

CMD ["/src/docker/entrypoint.sh"]