FROM nginx:1.16.0-alpine

COPY /dist/quizz-master/. /usr/share/nginx/html

# expose port 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
