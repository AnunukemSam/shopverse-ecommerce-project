# 🛍️ Product Service - ShopVerse

The `product` microservice handles product catalog management within the ShopVerse platform. It is built using **Node.js**, **Express**, and **MongoDB**, providing complete CRUD functionality for product listings.

---

## 🚀 Features

- ✅ Add new products
- ✅ Update existing products
- ✅ Fetch all or single product details
- ✅ Delete products
- ✅ Designed for scalability and integration with API Gateway

---

## 🧱 Tech Stack

| Component     | Technology        |
|---------------|-------------------|
| Language      | Node.js           |
| Framework     | Express.js        |
| Database      | MongoDB + Mongoose |
| Config Mgmt   | dotenv            |

---

## 📁 Project Structure

```
product/
├── app.js                    # Express entry point
├── routes/
│   └── productRoutes.js      # API routes
├── models/
│   └── Product.js            # Mongoose schema
├── seed.js                   # Seeder script for dev environments
├── .env.example              # Sample environment variables
├── package.json              # Node scripts & dependencies
├── Dockerfile                # Container build file
└── README.md                 # This file
```

---

## 📖 API Reference

Base route: `/api/products`

### `GET /`
- Returns list of all products

### `GET /:id`
- Returns details for a specific product

### `POST /`
- Adds a new product
- Body:
```json
{
  "name": "Nike Air Max",
  "description": "Comfortable sneakers",
  "price": 89.99,
  "category": "Footwear"
}
```

### `PUT /:id`
- Updates an existing product
- Body: Same format as POST

### `DELETE /:id`
- Deletes a product by ID

---

## 🔧 Environment Variables

Rename `.env.example` to `.env` and configure:
```bash
MONGO_URI=mongodb://mongodb:27017/shopverse-products
PORT=3001
```

> NOTE: When running locally without Docker, replace `mongodb` with `localhost`.

---

## 🧪 Local Development

```bash
# Install dependencies
npm install

# Run locally
node app.js
```

> Ensure MongoDB is running either:
> - Locally via `mongod`
> - Or in Docker: `docker run -d --name mongodb -p 27017:27017 mongo`

---

## 🐳 Docker Instructions

### Build the image
```bash
docker build -t shopverse-product .
```

### Create a Docker network (only once)
```bash
docker network create shopverse-net
```

### Run MongoDB container (for development)
```bash
docker run -d --name mongodb \
  --network shopverse-net \
  -p 27017:27017 \
  -e MONGO_INITDB_DATABASE=shopverse-products \
  mongo:6
```

### Run the product service container
```bash
docker run -d --name product-service \
  --network shopverse-net \
  --env-file .env \
  -p 3001:3001 \
  shopverse-product
```

> The app will be accessible at: `http://<your-ip>:3001/api/products`

---

## 🐣 Seeding Products (Optional)
Run the seed script (inside or outside Docker):
```bash
node seed.js
```

OR from inside a running container:
```bash
docker exec -it product-service node seed.js
```

---

## 🐳 DevOps TODOs (To be completed by YOU 💪)

| Task                          | Description                              |
|-------------------------------|------------------------------------------|
| Dockerize the service         | ✅ Done - using lightweight Node Alpine  |
| CI Workflow                   | GitHub Actions for build/test/deploy     |
| K8s YAML                      | Deployment & Service manifests           |
| Externalize secrets           | Use K8s secrets or AWS Secrets Manager   |
| Centralized logging + tracing | Instrument with OpenTelemetry (optional) |

---

## 🔐 Security Considerations
- Validate request inputs (add JOI or similar middleware)
- Use HTTPS in production
- Prevent MongoDB injection (Mongoose does this by default)

---

## 📦 Build Artifacts

| Item            | Location                   |
|-----------------|----------------------------|
| Dockerfile      | `services/product/Dockerfile` |
| K8s YAML        | `kubernetes/product/`      |
| CI/CD Workflow  | `.github/workflows/`       |
| Terraform       | `terraform/modules/`       |

---

## 📬 Feedback
Have improvements or suggestions? Open a PR or submit an issue — this service is part of the ShopVerse DevOps training suite.
 
