# 💳 Payment Service - ShopVerse

The `payment` microservice simulates transaction handling in ShopVerse. Built with **C#** and **.NET 7**, it exposes an API endpoint to process order payments.

---

## 🚀 Features

- ✅ Accept payment request for orders
- ✅ Simulate successful payment status
- ✅ Validate payment amount
- ✅ RESTful design using ASP.NET Core

---

## 🧱 Tech Stack

| Component     | Technology        |
|---------------|-------------------|
| Language      | C#                |
| Framework     | ASP.NET Core 7.0  |
| API Docs      | Swagger/OpenAPI   |

---

## 📁 File Structure

```
payment/
├── Controllers/
│   └── PaymentController.cs
├── Models/
│   └── Payment.cs
├── Program.cs
├── appsettings.json
├── payment-service.csproj
└── README.md
```

---

## 📖 API Reference

### `POST /api/payment`
- Processes a mock payment
```json
{
  "orderId": "abc123",
  "amount": 120.50,
  "method": "credit_card"
}
```
- Response:
```json
{
  "orderId": "abc123",
  "amount": 120.5,
  "method": "credit_card",
  "status": "Success"
}
```

---

## 🧪 Local Development

```bash
# Run app
$ dotnet run
```
Then go to `https://localhost:5001/swagger` to explore the API.

---

## 🐳 DevOps TODOs (To be completed by YOU 💪)

| Task                    | Description                             |
|-------------------------|-----------------------------------------|
| Dockerize the service   | Create Dockerfile + ports               |
| CI/CD Workflow          | Use GitHub Actions or Azure Pipelines   |
| K8s Deployment          | Deployment & Service YAML               |
| Secrets Management      | Externalize payment configs if needed   |

---

## 🔐 Security Notes
- Validate payment input
- Use HTTPS in production

---

## 📦 Build Artifacts

| Item            | Location                   |
|-----------------|----------------------------|
| Dockerfile      | `TODO`                     |
| K8s YAML        | `kubernetes/payment/`      |
| CI/CD Workflow  | `.github/workflows/`       |

---

## 📬 Feedback
PRs welcome — this is part of the ShopVerse DevOps architecture.
