# 📦 Order Service - ShopVerse

The `order` microservice handles the checkout and order processing logic for ShopVerse. It is built using **Java** with **Spring Boot** and **MongoDB** for persistence.

---

## 🚀 Features

- ✅ Create new orders
- ✅ Retrieve all or single orders
- ✅ Delete orders
- ✅ Auto timestamps on creation

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
└── README.md
```

---

## 📖 API Reference

### `GET /orders`
- Get all orders

### `GET /orders/{id}`
- Get order by ID

### `POST /orders`
- Create a new order
```json
{
  "userId": "user001",
  "productIds": ["prod123", "prod456"],
  "totalAmount": 49.99
}
```

### `DELETE /orders/{id}`
- Delete an order by ID

---

## 🔧 Configuration

- MongoDB URI and port are set in `application.properties`
```properties
spring.data.mongodb.uri=mongodb://localhost:27017/shopverse-order
server.port=3003
```

---

## 🧪 Local Development

```bash
# Run using Maven
mvn spring-boot:run
```

---

## 🐳 DevOps TODOs (To be completed by YOU 💪)

| Task                     | Description                            |
|--------------------------|----------------------------------------|
| Dockerize the service    | Write Dockerfile, expose port 3003     |
| CI Pipeline              | Setup Maven-based CI workflow          |
| K8s Deployment           | Add YAML for Deployment/Service        |
| Secret Handling          | Use K8s secrets or external manager    |

---

## 🔐 Security Notes
- Validate and sanitize request bodies
- Apply error handling and logging middleware

---

## 📦 Build Artifacts

| Item            | Location                   |
|-----------------|----------------------------|
| Dockerfile      | `TODO`                     |
| K8s YAML        | `kubernetes/order/`        |
| CI/CD Workflow  | `.github/workflows/`       |

---

## 📬 Feedback
All feedback is welcome. This is part of the ShopVerse DevOps microservices project.
