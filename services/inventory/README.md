# 📦 Inventory Service - ShopVerse

The `inventory` microservice manages product stock and availability for ShopVerse. Built in **Rust** using the **Actix Web** framework, it provides endpoints to add, update, and delete inventory items.

---

## 🚀 Features

- ✅ Add new inventory entries
- ✅ Get current stock
- ✅ Update stock quantity
- ✅ Delete items from inventory

---

## 🧱 Tech Stack

| Component     | Technology       |
|---------------|------------------|
| Language      | Rust             |
| Framework     | Actix Web        |
| ID Generator  | UUID             |
| JSON Support  | Serde            |

---

## 📁 File Structure

```
inventory/
├── src/
│   └── main.rs               # App entrypoint and logic
├── Cargo.toml               # Rust dependency and build file
└── README.md                # This doc
```

---

## 📖 API Reference

### `GET /inventory`
- Returns all inventory items

### `POST /inventory`
```json
{
  "product_id": "prod123",
  "quantity": 10
}
```
- Creates a new inventory item

### `PUT /inventory/{id}`
```json
{
  "product_id": "prod123",
  "quantity": 25
}
```
- Updates the quantity of an inventory item

### `DELETE /inventory/{id}`
- Deletes an inventory item

---

## 🧪 Local Development

```bash
# Run using cargo
cargo run
```

---

## 🐳 DevOps TODOs (To be completed by YOU 💪)

| Task                     | Description                            |
|--------------------------|----------------------------------------|
| Dockerfile               | Write Dockerfile for Rust project      |
| CI Workflow              | Add Rust build/test GitHub Actions     |
| K8s YAML                 | Add Deployment & Service manifests     |

---

## 🔐 Security Notes
- Add input validation for production usage
- Consider persistent database instead of in-memory store

---

## 📦 Build Artifacts

| Item            | Location                   |
|-----------------|----------------------------|
| Dockerfile      | `TODO`                     |
| K8s YAML        | `kubernetes/inventory/`    |
| CI/CD Workflow  | `.github/workflows/`       |

---

## 📬 Feedback
This service is part of the ShopVerse DevOps microservices suite. PRs and issues are welcome!
