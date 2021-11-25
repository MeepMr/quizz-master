docker buildx build --platform linux/arm,linux/arm64,linux/amd64 ./../../quizz-master-frontend/ --file ./Dockerfile -t mrmeep/quizz-master-frontend --push
