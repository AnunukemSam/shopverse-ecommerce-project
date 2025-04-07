# 🔔 Notification Service - ShopVerse

The `notification` microservice is a lightweight service built in **Ruby** using **Sinatra**. It simulates sending user notifications such as email or SMS confirmations.

---

## 🚀 Features

- ✅ Create notifications for users
- ✅ Retrieve notifications by user ID
- ✅ Lightweight and fast using Sinatra

---

## 🧱 Tech Stack

| Component     | Technology     |
|---------------|----------------|
| Language      | Ruby           |
| Framework     | Sinatra        |
| Storage       | In-memory array|

---

## 📁 File Structure

```
notification/
├── app.rb                 # Sinatra app
├── Gemfile                # Dependencies
├── .env.example           # Example environment vars
└── README.md              # Documentation
```

---

## 📖 API Reference

### `POST /notify`
```json
{
  "userId": "user123",
  "type": "email",
  "message": "Your order has been placed!"
}
```
- Response: Notification object with UUID

### `GET /notifications/:userId`
- Returns notifications for a user

---

## 🧪 Local Development

```bash
# Install Sinatra
bundle install

# Start the server
ruby app.rb
```

---

## 🐳 DevOps TODOs (To be completed by YOU 💪)

| Task                      | Description                            |
|---------------------------|----------------------------------------|
| Dockerize the service     | Build Dockerfile for Ruby/Sinatra      |
| CI/CD Workflow            | Add Ruby CI workflow                   |
| K8s YAML                  | Create Deployment & Service manifests  |

---

## 🔐 Security Considerations
- Add rate limiting in production
- Use background workers for real email/SMS

---

## 📦 Build Artifacts

| Item            | Location                     |
|-----------------|------------------------------|
| Dockerfile      | `TODO`                       |
| K8s YAML        | `kubernetes/notification/`   |
| CI/CD Workflow  | `.github/workflows/`         |

---

## 📬 Feedback
PRs and feature suggestions welcome! This is part of the ShopVerse project suite.
