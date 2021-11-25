#!/bin/bash

docker container stop c_quizz-master-frontend
docker container rm c_quizz-master-frontend

./build-docker-images.sh

docker run -p 4200:80 --name c_quizz-master-frontend -d quizz-master-frontend
