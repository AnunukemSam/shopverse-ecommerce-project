FROM eclipse-temurin:17-jdk-alpine AS builder

RUN apk add --no-cache maven

WORKDIR /app

COPY . .

RUN mvn clean package -DskipTests

################################################################################
FROM eclipse-temurin:17-jre-alpine

WORKDIR /app

COPY --from=builder /app/target/*.jar app.jar

RUN adduser -S -u 10001 appuser

USER appuser

EXPOSE 3003

ENTRYPOINT [ "java", "-jar", "app.jar" ]
