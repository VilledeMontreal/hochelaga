# Usage
# docker build  --no-cache -t php-node:latest .
# docker run -it php-node:latest bash
# docker run -d -p 3000:3000 php-node:latest
# docker container ls

FROM php:7.2-cli
ENV NODE_VERSION 8.9.1
ENV ARCH x64
ENV NODE_PACKAGE node-v$NODE_VERSION-linux-$ARCH.tar.xz
ENV NODE_URL "https://nodejs.org/dist/v$NODE_VERSION/$NODE_PACKAGE"
EXPOSE 3000

MAINTAINER VdMtl

RUN apt-get update \
    && apt-get install -y zip \
        git \
        wget \
        curl \
        xz-utils


#ARG ENV=unknown
ARG GIT_COMMIT=unknown

# GIT label of the packaged code
LABEL GIT_COMMIT=${GIT_COMMIT}

#Create app directory
RUN mkdir -p /usr/src/app
RUN ln -fs /usr/share/zoneinfo/America/New_York /etc/localtime && dpkg-reconfigure --frontend noninteractive tzdata

# COPY php.ini /usr/local/etc/php/

# Install Composer dependency https://getcomposer.org/download/
# Install composer globally
RUN curl -sS https://getcomposer.org/installer | php
RUN mv composer.phar /usr/local/bin/composer


# Create a node user ADD RUN groupadd --gid 1000 node \

RUN groupadd --gid 1000 node \
  && useradd --uid 1000 --gid node --shell /bin/bash --create-home node

## Install Node
#RUN ARCH= && dpkgArch="$(dpkg --print-architecture)" \
#  && case "${dpkgArch##*-}" in \
#    amd64) ARCH='x64';; \
##    ppc64el) ARCH='ppc64le';; \
#    *) echo "unsupported architecture"; exit 1 ;; \
#  esac \
#  && curl -SLO "https://nodejs.org/dist/v$NODE_VERSION/node-v$NODE_VERSION-linux-$ARCH.tar.xz" \
#  && grep " node-v$NODE_VERSION-linux-$ARCH.tar.xz\$" \
#  && tar -xJf "node-v$NODE_VERSION-linux-$ARCH.tar.xz" -C /usr/local --strip-components=1 --no-same-owner \
#  && rm "node-v$NODE_VERSION-linux-$ARCH.tar.xz" \
#  && ln -s /usr/local/bin/node /usr/local/bin/nodejs

RUN dpkg --print-architecture
RUN curl -SLO $NODE_URL
RUN echo " Node package installed :"  $NODE_PACKAGE
RUN ls -al
RUN echo " Node URL : "  $NODE_URL
RUN tar -xJf "$NODE_PACKAGE" -C /usr/local --strip-components=1 --no-same-owner
RUN rm $NODE_PACKAGE
RUN ls -al
RUN ln -s /usr/local/bin/node /usr/local/bin/nodejs

RUN node -v
RUN npm install gulpjs/gulp-cli -g
RUN gulp -v

RUN chmod o+w /usr/src/app
COPY . /usr/src/app
WORKDIR /usr/src/app
VOLUME /usr/src/app/source

RUN ls -al
RUN npm install
RUN composer install

EXPOSE 3000
CMD ["gulp", "serve"]