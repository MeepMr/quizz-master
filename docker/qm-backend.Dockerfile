FROM adoptopenjdk:11-jre-hotspot

EXPOSE 8080

RUN mkdir /app

COPY /qm-backend-app/build/libs/qm-backend-app.jar /app/qm-backend.jar


ENTRYPOINT ["java", "-Djava.security.egd=file:/dev/./urandom", "-jar", "/app/qm-backend.jar"]
