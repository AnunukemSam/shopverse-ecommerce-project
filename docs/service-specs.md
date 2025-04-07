| Service       | Language     | Port | Description                           | Main Endpoint        |
|---------------|--------------|------|---------------------------------------|----------------------|
| `auth`        | Python       | 3000 | Handles user registration/login       | `/register`, `/login`|
| `product`     | Node.js      | 3001 | Product catalog management            | `/api/products`      |
| `cart`        | Go           | 3002 | Manage user cart operations           | `/cart`              |
| `order`       | Java         | 3003 | Processes customer orders             | `/orders`            |
| `payment`     | C# (.NET)    | 3004 | Handles mock payments                 | `/api/payment`       |
| `inventory`   | Rust         | 3005 | Manages stock/availability            | `/inventory`         |
| `notification`| Ruby         | 3006 | Sends user notifications              | `/notify`            |
| `frontend`    | React        | 5173 | UI for browsing, cart, checkout       | `/`                  |
| `proxy`       | Nginx        | 80   | Proxies frontend + /api to backends   | `/`, `/api/*`        |
