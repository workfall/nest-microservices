#!/bin/bash

# https://intoli.com/blog/exit-on-errors-in-bash-scripts/
# exit on any failure
set -e
# keep track of the last executed command
trap 'last_command=$current_command; current_command=$BASH_COMMAND' DEBUG
# echo an error message before exiting (seems to happen on error or success?)
trap 'echo "\"${last_command}\" command completed with exit code $?."' EXIT

docker kill $(docker ps -q)
docker rm $(docker ps -a -q)
docker rmi $(docker images -q)