FROM eclipse-temurin:17-jdk-alpine as builder

WORKDIR /app

COPY . .

RUN ./mvnw clean package -DskipTests || mvn clean package -DskipTests

################################################################################
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

COPY --from=builder /app/target/*.jar app.jar

RUN adduser -S -u 10001 appuser

USER appuser

EXPOSE 3003

ENTRYPOINT [ "java", "-jar", "app.jar" ]
