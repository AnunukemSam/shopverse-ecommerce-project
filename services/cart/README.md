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
| Config Mgmt   | godotenv           |

---

## 📁 File Structure

```
cart/
├── main.go                  # Application entry
├── .env.example            # Sample environment variables
├── go.mod                  # Go module definitions
├── go.sum                  # Go dependency checksums
├── Dockerfile              # Service container definition
├── README.md               # This documentation file
```

---

## 📖 API Reference

Base URL: `/cart`

### `GET /cart?userId=xyz`
- Returns all cart items for a specific user.

### `POST /cart`
- Adds a new item to a user's cart
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

Copy `.env.example` to `.env` and set the following:

```env
MONGO_URI=mongodb://mongodb:27017/shopverse-cart
PORT=3002
```

> ⚠️ For local testing outside Docker, use `localhost` instead of `mongodb`.

---

## 🧪 Local Development

```bash
# Install Go modules
go mod tidy

# Run the service
go run main.go
```

### 🔍 Sample CURL for Testing

```bash
# Add item to cart
curl -X POST http://localhost:3002/cart \
  -H "Content-Type: application/json" \
  -d '{"userId": "test", "productId": "prod123", "quantity": 2}'

# Get items for user
curl http://localhost:3002/cart?userId=test
```

---

## 🐳 Docker Instructions

### 1. Build Docker image
```bash
docker build -t shopverse-cart .
```

### 2. Create Docker network (only once)
```bash
docker network create shopverse-net
```

### 3. Run MongoDB container (if not already running)
```bash
docker run -d --name mongodb \
  --network shopverse-net \
  -p 27017:27017 \
  -e MONGO_INITDB_DATABASE=shopverse-cart \
  mongo:6
```

### 4. Run cart service container
```bash
docker run -d --name cart-service \
  --network shopverse-net \
  --env-file .env \
  -p 3002:3002 \
  shopverse-cart
```

---

## 🐳 DevOps TODOs (To be completed by YOU 💪)

| Task                    | Description                            |
|-------------------------|----------------------------------------|
| ✅ Dockerize the service   | Dockerfile & container confirmed       |
| CI Workflow             | Add GitHub Actions build/test jobs     |
| K8s Deployment          | YAML manifests for Deployment + Service|
| External config         | Use K8s secrets or configmaps          |
| Health Check Route      | Add `/` or `/health` endpoint          |

---

## 🔐 Security Notes
- Sanitize incoming data before DB ops
- Handle errors gracefully
- Restrict trusted proxies in Gin config for production

---

## 📦 Build Artifacts

| Item           | Location                  |
|----------------|---------------------------|
| Dockerfile     | `services/cart/Dockerfile`|
| K8s YAML       | `kubernetes/cart/`        |
| CI/CD Workflow | `.github/workflows/`      |

---

## 📬 Feedback
PRs and issues welcome — this is part of the ShopVerse DevOps training suite.
 
