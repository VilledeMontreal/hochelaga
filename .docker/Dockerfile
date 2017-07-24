FROM node:7.5
MAINTAINER VdMtl
#ARG ENV=unknown
ARG GIT_COMMIT=unknown

# GIT label of the packaged code
LABEL GIT_COMMIT=${GIT_COMMIT}

#Create app directory
RUN mkdir -p /usr/src/app
RUN ln -fs /usr/share/zoneinfo/America/New_York /etc/localtime && dpkg-reconfigure --frontend noninteractive tzdata

	
WORKDIR /usr/src/app

#Install all dependencies
#find . -type d -exec chmod 0775 {} \; && find . -type f -exec chmod 0664 {} \; (todo: adjust permissions)
COPY package.json /usr/src/app
RUN npm cache clear && \
    npm install

#Bundle app source
COPY . /usr/src/app

#RUN npm run build-${ENV}

#Lanch server
EXPOSE 4200 4443
#CMD ["node", "server.js"]
CMD ["npm", "start"]