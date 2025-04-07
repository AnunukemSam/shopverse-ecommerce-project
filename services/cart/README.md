# 🛒 Cart Service - ShopVerse

The `cart` microservice handles user cart functionality for the ShopVerse platform. Built in **Go** with the **Gin web framework** and **MongoDB**, it allows adding, retrieving, and removing items from a user's shopping cart.

---

## 🚀 Features

- ✅ Add items to cart
- ✅ Retrieve cart by user ID
- ✅ Remove items from cart
- ✅ MongoDB-based persistence

---

## 🧱 Tech Stack

| Component     | Technology         |
|---------------|--------------------|
| Language      | Go (1.20+)         |
| Framework     | Gin                |
| Database      | MongoDB            |
| Config Mgmt   | dotenv             |

---

## 📁 File Structure

```
cart/
├── main.go                  # Application entry
├── .env.example            # Sample env variables
├── go.mod                  # Dependencies and module name
└── README.md               # Service documentation
```

---

## 📖 API Reference

### `GET /cart?userId=xyz`
- Returns all cart items for a given user

### `POST /cart`
- Adds a new item to cart
```json
{
  "userId": "user123",
  "productId": "prod789",
  "quantity": 2
}
```

### `DELETE /cart/:id`
- Removes a cart item by its MongoDB ObjectID

---

## 🔧 Environment Variables

```
MONGO_URI=mongodb://localhost:27017
PORT=3002
```

---

## 🧪 Local Development

```bash
# Run app
go run main.go
```

> Ensure MongoDB is running and accessible via the provided URI.

---

## 🐳 DevOps TODOs (To be completed by YOU 💪)

| Task                    | Description                            |
|-------------------------|----------------------------------------|
| Dockerize the service   | Build Dockerfile, expose ports         |
| CI Workflow             | Add GitHub Actions build/test jobs     |
| K8s Deployment          | YAML manifests for Deployment + Service|
| External config         | Inject MONGO_URI and secrets properly  |

---

## 🔐 Security Notes
- Sanitize incoming data before DB ops
- Handle errors gracefully

---

## 📦 Build Artifacts

| Item           | Location                  |
|----------------|---------------------------|
| Dockerfile     | `TODO`                    |
| K8s YAML       | `kubernetes/cart/`        |
| CI/CD Workflow | `.github/workflows/`      |

---

## 📬 Feedback
PRs and issues welcome — this is part of the ShopVerse microservices suite.
