# Usage
# docker build  --no-cache -t php-node:latest .
# docker run -d -p 3000:3000 php-node:latest

FROM php:7.2-cli

ENV NODE_VERSION 10.24.1
ENV ARCH x64
ENV NODE_PACKAGE node-v$NODE_VERSION-linux-$ARCH.tar.xz
ENV NODE_URL "https://nodejs.org/dist/v$NODE_VERSION/$NODE_PACKAGE"

ARG ENV=unknown
ARG GIT_COMMIT=unknown

LABEL GIT_COMMIT=${GIT_COMMIT}

LABEL maintainer="Ville de Montréal"

EXPOSE 3200


#	Install linux extras

RUN apt-get update \
    && apt-get install -y zip \
        git \
        wget \
        curl \
        xz-utils


#	Create app directory
# 	Set timezone
#	Install composer

RUN mkdir -p /usr/src/app \
    && ln -fs /usr/share/zoneinfo/America/New_York /etc/localtime && dpkg-reconfigure --frontend noninteractive tzdata \
    && curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer


#	Create a node user

RUN groupadd --gid 1000 node \
  && useradd --uid 1000 --gid node --shell /bin/bash --create-home node

#	Install Node & gulp

RUN curl -SLO "$NODE_URL" \
  && tar -xJf "$NODE_PACKAGE" -C /usr/local --strip-components=1 --no-same-owner \
  && rm "$NODE_PACKAGE"  \
  && ln -s /usr/local/bin/node /usr/local/bin/nodejs \
  && node -v \
  && npm install gulpjs/gulp-cli -g \
  && gulp -v

#	Set working volumes and permissions

RUN chmod o+w /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
VOLUME /usr/src/app/source

#	Check work directory, install npm and composer dependencies

RUN ls -al \
  && npm install \
  && composer install \
  && npm rebuild node-sass

#	Serve the project, npm start would work just as well

CMD ["gulp", "serve"]
