# 📦 Order Service - ShopVerse

The `order` microservice handles the checkout and order processing logic for ShopVerse. It is built using **Java** with **Spring Boot** and **MongoDB** for persistence.

---

## 🚀 Features

- ✅ Create new orders
- ✅ Retrieve all or single orders
- ✅ Delete orders
- ✅ Auto timestamps on creation
- ✅ Health check route for service readiness

---

## 🧱 Tech Stack

| Component     | Technology       |
|---------------|------------------|
| Language      | Java 17          |
| Framework     | Spring Boot      |
| Database      | MongoDB          |
| Build Tool    | Maven            |

---

## 📁 File Structure

```
order/
├── src/main/java/com/shopverse/order/
│   ├── OrderServiceApplication.java
│   ├── controller/OrderController.java
│   ├── model/Order.java
│   └── repository/OrderRepository.java
├── src/main/resources/application.properties
├── pom.xml
├── Dockerfile
└── README.md
```

---

## 📖 API Reference

All routes are prefixed with `/api/orders`

### `GET /api/orders/ping`
- Health check route

### `GET /api/orders`
- Get all orders

### `GET /api/orders/{id}`
- Get order by ID

### `POST /api/orders`
- Create a new order
```json
{
  "userId": "user001",
  "productIds": ["prod123", "prod456"],
  "totalAmount": 49.99
}
```

### `DELETE /api/orders/{id}`
- Delete an order by ID

---

## 🔧 Configuration

Spring Boot app reads its config from `src/main/resources/application.properties`

```properties
server.port=3003
spring.data.mongodb.uri=mongodb://localhost:27017/shopverse-order
```

> ⚠️ For local development, ensure MongoDB is running and accessible on the defined port.

---

## 🧪 Local Development

```bash
# Build the application
mvn clean install

# Run the JAR
java -jar target/order-service-0.0.1-SNAPSHOT.jar
```

Test it with:
```bash
curl http://localhost:3003/api/orders/ping
```

---

## 🐳 Docker Instructions

### 1. Build Docker image
```bash
docker build -t shopverse-order .
```

### 2. Run with MongoDB (ensure Mongo is already running)
```bash
docker run -d --name order-service \
  --network shopverse-net \
  -p 3003:3003 \
  -e SPRING_DATA_MONGODB_URI=mongodb://mongodb:27017/shopverse-order \
  shopverse-order
```

> You can also externalize config via mounted `application.properties` or Docker secrets.

---

## 🐳 DevOps TODOs (To be completed by YOU 💪)

| Task                     | Description                            |
|--------------------------|----------------------------------------|
| ✅ Dockerize the service    | Dockerfile & exposed ports confirmed     |
| CI Pipeline              | Setup Maven-based CI workflow          |
| K8s Deployment           | Add YAML for Deployment/Service        |
| Secret Handling          | Use K8s secrets or external manager    |
| Logging & Monitoring     | Add OpenTelemetry (optional)           |

---

## 🔐 Security Notes
- Validate and sanitize request bodies
- Use DTOs for request/response boundaries
- Log errors securely without leaking sensitive data

---

## 📦 Build Artifacts

| Item            | Location                   |
|-----------------|----------------------------|
| Dockerfile      | `services/order/Dockerfile`|
| K8s YAML        | `kubernetes/order/`        |
| CI/CD Workflow  | `.github/workflows/`       |

---

## 📬 Feedback
Pull requests, issues, and suggestions are welcome — this is part of the ShopVerse DevOps microservices suite. Built to simulate a real-world, production-grade e-commerce backend.
 
