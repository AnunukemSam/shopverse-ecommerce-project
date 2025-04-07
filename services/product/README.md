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
├── .env.example              # Sample environment variables
├── package.json              # Node scripts & dependencies
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
MONGO_URI=mongodb://localhost:27017/shopverse-product
PORT=3001
```

---

## 🧪 Local Development

```bash
# Install dependencies
npm install

# Run in development with auto-restart
npm run dev

# Or run directly
npm start
```

> Ensure MongoDB is running locally on port 27017 or configure MONGO_URI.

---

## 🐳 DevOps TODOs (To be completed by YOU 💪)

| Task                          | Description                              |
|-------------------------------|------------------------------------------|
| Dockerize the service         | Create Dockerfile + .dockerignore        |
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
| Dockerfile      | `TODO`                     |
| K8s YAML        | `kubernetes/product/`      |
| CI/CD Workflow  | `.github/workflows/`       |
| Terraform       | `terraform/modules/`       |

---

## 📬 Feedback
Have improvements or suggestions? Open a PR or submit an issue — this service is part of the ShopVerse DevOps training suite.
