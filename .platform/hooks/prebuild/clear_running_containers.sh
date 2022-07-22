#!/bin/bash

# https://intoli.com/blog/exit-on-errors-in-bash-scripts/
# exit on any failure
set -e
# keep track of the last executed command
trap 'last_command=$current_command; current_command=$BASH_COMMAND' DEBUG
# echo an error message before exiting (seems to happen on error or success?)
trap 'echo "\"${last_command}\" command completed with exit code $?."' EXIT

# docker kill $(docker ps -q)
# docker rm -f $(docker ps -a -q)
# docker rmi $(docker images -q)
# docker stop gateway acl-service test-service healthcheck-service
# docker rm $(docker ps --filter status=exited -q)
# docker image prune -a -f

docker ps -a
docker image ls