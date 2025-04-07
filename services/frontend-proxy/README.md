# 🌐 Frontend Proxy (Nginx) - ShopVerse

This is the Nginx-based **frontend reverse proxy** for ShopVerse. It serves the frontend UI and proxies all API requests to the appropriate backend microservices.

---

## 🚀 Features

- ✅ Serves static frontend assets
- ✅ Proxies `/api/*` routes to microservices
- ✅ Simple to extend or replace with API Gateway

---

## 🧱 Tech Stack

| Component     | Technology    |
|---------------|---------------|
| Proxy Server  | Nginx         |
| Frontend Host | React (Port 5173) |
| API Routes    | Mapped by `/api/...` |

---

## 🧪 Local Development (via Docker Compose)

```bash
# docker-compose.yml should include:
frontend-proxy:
  image: nginx:latest
  volumes:
    - ./services/frontend-proxy/nginx.conf:/etc/nginx/nginx.conf:ro
  ports:
    - "80:80"
  depends_on:
    - frontend
    - auth
    - product
    - cart
    - order
    - payment
    - inventory
    - notification
```

---

## 🐳 DevOps TODOs

| Task                     | Description                          |
|--------------------------|--------------------------------------|
| Dockerfile (optional)    | Only needed if custom Nginx build    |
| CI/CD                    | Deploy Nginx proxy with config       |
| TLS Support              | Add HTTPS support (K8s ingress or Nginx SSL) |

---

## 📦 Build Artifacts

| Item            | Location                    |
|-----------------|-----------------------------|
| nginx.conf      | `frontend-proxy/nginx.conf` |
| K8s Ingress      | `kubernetes/frontend-proxy/`|

---

## 📬 Feedback
Let’s make this proxy layer secure, resilient, and observable!
