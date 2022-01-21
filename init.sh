#!/usr/bin/env bash

# Run the container instance #

NAME="sortingolympics"

[[ "$(whoami)" != "root" ]] && exit

docker build -t "$NAME" .
docker run -it --rm -d -p 5002:80 --name "$NAME_web" "$NAME"
