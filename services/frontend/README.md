# 🖥️ Frontend - ShopVerse

This is the official **React + TailwindCSS frontend** for the ShopVerse platform. Designed to look beautiful, navigate smoothly, and act as the entrypoint for the entire DevOps-backed microservices ecosystem.

---

## 🚀 Features

- ✅ Clean and responsive layout using TailwindCSS
- ✅ Pages: Home, Product List, Cart, Checkout
- ✅ Beautiful navbar and routed views
- ✅ Axios requests routed via Nginx proxy (`/api/...`)
- ✅ Fully customizable and styled just like real SaaS apps

---

## 🧱 Tech Stack

| Layer        | Technology         |
|--------------|--------------------|
| Framework    | React (with Vite)  |
| Styling      | TailwindCSS        |
| Routing      | React Router       |
| HTTP Client  | Axios              |
| Proxy Path   | `/api/*` via Nginx |

---

## 📁 Folder Structure

```
frontend/
├── src/
│   ├── App.jsx
│   ├── index.css
│   ├── components/
│   │   └── Navbar.jsx
│   └── pages/
│       ├── Home.jsx
│       ├── ProductList.jsx
│       ├── Cart.jsx
│       └── Checkout.jsx
├── tailwind.config.js
├── postcss.config.js
├── .env.example
└── README.md
```

---

## 📸 Screenshots

Add real screenshots once deployed.

```
![Home Page](./screenshots/home.png)
![Product Page](./screenshots/products.png)
![Cart Page](./screenshots/cart.png)
![Checkout Page](./screenshots/checkout.png)
```

---

## 🔌 API Proxy Setup (for Nginx)

All Axios calls use `/api/` which is routed by the frontend proxy.

```js
axios.get('/api/products') // ➝ Proxied to product service
```

Sample Nginx block:
```nginx
location /api/products/ {
  proxy_pass http://product_service/;
}
```

---

## 🧪 Local Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

TailwindCSS is already configured using PostCSS and JIT mode via Vite.

---

## 🐳 DevOps TODOs (To be completed by YOU 💪)

| Task                    | Description                            |
|-------------------------|----------------------------------------|
| Dockerfile              | Containerize with `npm run build`      |
| Nginx Proxy             | Proxy `/api` to backend services       |
| CI/CD                   | GitHub Actions: build/test/deploy      |
| K8s Service             | Deployment + Service manifest          |
| CDN Hosting (optional)  | Serve React build via S3/CloudFront    |

---

## 📦 Build Artifacts

| Artifact         | Location                 |
|------------------|--------------------------|
| Static Build     | `dist/` (after `npm run build`) |
| Dockerfile       | `TODO`                   |
| K8s YAML         | `kubernetes/frontend/`   |

---

## 📬 Feedback

This is a fully functional and customizable frontend for ShopVerse. PRs to improve design and functionality are always welcome!
