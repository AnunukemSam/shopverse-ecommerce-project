# 🛍️ ShopVerse Frontend

Welcome to the **ShopVerse Frontend**, a React + Vite-based single-page application (SPA) styled with TailwindCSS. This frontend powers the user-facing interface of the ShopVerse e-commerce MVP, communicating with multiple backend microservices (auth, product, cart, order, and payment).

---

## 🚀 Tech Stack
- **React 19**
- **Vite** for fast builds and dev server
- **TailwindCSS** for styling
- **Axios** for API calls
- **React Router DOM v6** for page routing
- **Docker + NGINX** for containerized production build

---

## 📁 Folder Structure

```
frontend/
├── Dockerfile
├── nginx.conf
├── .env
├── vite.config.js
├── package.json
├── index.html
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── components/
│   │   └── Navbar.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── ProductList.jsx
│       ├── Cart.jsx
│       └── Checkout.jsx
```

---

## ⚙️ Environment Variables
The frontend uses Vite environment variables for backend communication.

**`.env` file:**
```env
VITE_API_AUTH=http://auth:3000
VITE_API_PRODUCT=http://product:3001
VITE_API_CART=http://cart:3002
VITE_API_ORDER=http://order:3003
VITE_API_PAYMENT=http://payment:3004
```

These are injected automatically into the frontend container via `docker-compose.yml`.

---

## 🧠 How It Works

Each page/component uses `import.meta.env` to access the correct backend endpoint dynamically. Example:

```js
const API_PRODUCT = import.meta.env.VITE_API_PRODUCT;
axios.get(`${API_PRODUCT}/api/products`)
```

No hardcoded URLs. This ensures flexibility between local, staging, and production environments.

---

## 🐳 Docker Build & Serve
The frontend is containerized using a multi-stage Dockerfile:

### **Dockerfile Overview:**
```Dockerfile
# Build stage
FROM node:18-alpine AS build
WORKDIR /app
COPY . .
RUN npm install && npm run build

# Serve stage
FROM nginx:alpine
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

### **Nginx Config (`nginx.conf`)**
Handles HTML5 history mode and fallback for SPA:
```nginx
server {
  listen 80;
  root /usr/share/nginx/html;
  index index.html;
  location / {
    try_files $uri $uri/ /index.html;
  }
}
```

---

## ▶️ Local Dev Commands
For local testing outside Docker:
```bash
npm install
npm run dev
```
Then visit [http://localhost:5173](http://localhost:5173)

---

## 🔁 Docker Compose Integration
The `frontend` is included in the `docker-compose.yml` as a service with environment variables injected at runtime.

```yaml
  frontend:
    build:
      context: ./services/frontend
    container_name: frontend
    ports:
      - "8080:80"
    environment:
      - VITE_API_AUTH=http://auth:3000
      - VITE_API_PRODUCT=http://product:3001
      - VITE_API_CART=http://cart:3002
      - VITE_API_ORDER=http://order:3003
      - VITE_API_PAYMENT=http://payment:3004
    depends_on:
      - auth
      - product
      - cart
      - order
      - payment
    networks:
      - shopverse-net
```

---

## ✅ Features
- Static build served via NGINX
- Proper routing with `try_files`
- Fully decoupled from proxy (no rewrite needed)
- Configurable through `.env`

---

## 📦 Production Build (Standalone)
```bash
npm run build
npm run preview
```

Or run the Docker container:
```bash
docker build -t shopverse-frontend .
docker run -d -p 8080:80 shopverse-frontend
```

---

## 💡 Notes
- Don't commit `.env` with sensitive credentials
- `dist/` is auto-generated, don't commit it either
- Uses container names for internal networking

---

## 👩🏽‍💻 Author
Deployed and maintained by [Your Name Here] as part of the **ShopVerse DevOps MVP project**.

---

Ready to go! 🎯
