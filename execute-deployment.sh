#!/bin/bash
command_exists () {
  if command -v "$1" >/dev/null 2>&1 ; then
    return 0;
  else
    echo "$1 couldn't be found. Aborting.";
    return 1;
  fi
}

file_exists () {
  if [ -f $1 ] ; then
    return 0;
  else
    echo "$1 doesn't exist!!!";
    return 1;
  fi
}

cd $WORKSPACE_DIR;

export VERSION=$1;

if file_exists ./docker-compose.yml && command_exists docker && command_exists docker-compose ; then
  docker-compose stop && docker-compose rm -f
  docker-compose pull
  docker-compose up -d
else
   exit 1;
fi
