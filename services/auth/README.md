# 🔐 Auth Service - ShopVerse

The `auth` microservice is responsible for handling user registration, authentication, and role-based access for the ShopVerse platform. Built with **Python + FastAPI**, this service provides secure JWT-based login, user session management, and access control for other services.

---

## 🚀 Features

- ✅ User Signup (email + password)
- ✅ Secure Password Hashing with `bcrypt`
- ✅ JWT Token Authentication
- ✅ Role-based Access Support (admin, user)
- ✅ RESTful API

---

## 🧱 Technology Stack

| Component     | Technology        |
|---------------|-------------------|
| Framework     | FastAPI           |
| ORM           | SQLAlchemy        |
| DB            | SQLite (dev) / PostgreSQL (prod) |
| Auth Protocol | JWT (via python-jose) |
| Env Mgmt      | python-dotenv     |

---

## 📁 Project Structure

```
auth/
├── app/
│   ├── main.py          # FastAPI entrypoint
│   ├── models.py        # SQLAlchemy User model
│   ├── schemas.py       # Pydantic request/response models
│   ├── auth.py          # Token creation & user logic
│   ├── database.py      # DB connection setup
│   └── config.py        # Settings & .env integration
├── tests/
│   └── test_auth.py     # Unit tests (TODO)
├── requirements.txt     # Dependencies
├── README.md            # This file
└── .env.example         # Sample environment config
```

---

## 📌 Environment Variables

Create a `.env` file based on the provided `.env.example`:

```
DATABASE_URL=sqlite:///./auth.db
SECRET_KEY=your_secret_key_here
```

You can replace `sqlite:///./auth.db` with a PostgreSQL URL like:
```
postgresql://user:password@postgres-service:5432/auth_db
```

---

## 📖 API Reference

### `POST /register`
- Registers a new user
- Body: `{ "email": "test@example.com", "password": "secure123" }`
- Response: User object (excluding password)

### `POST /login`
- Logs in the user and returns JWT token
- Body: `application/x-www-form-urlencoded` (username & password fields)
- Response: `{ "access_token": "...", "token_type": "bearer" }`

### `GET /me`
- Returns info about the currently authenticated user
- Requires `Authorization: Bearer <token>` header

---

## 🧪 Local Development

```bash
# Set up virtualenv
python -m venv venv
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Run server
uvicorn app.main:app --host 0.0.0.0 --port 3000
```

---

## 🐳 DevOps TODOs (To be completed by YOU 💪)

| Task                         | Description                           |
|------------------------------|---------------------------------------|
| Dockerize the Service        | Create `Dockerfile` + `.dockerignore` |
| Add CI/CD                    | GitHub Actions workflow                |
| Kubernetes Manifest          | Deployment + Service YAML              |
| Env Secrets Handling         | Use K8s Secrets or AWS Secrets Manager |
| Unit Testing + Coverage      | Write tests for each route             |

---

## 🧠 Design Notes

- This service uses JWT as a **stateless auth mechanism**. Tokens are issued on login and passed with each request.
- Token validation is centralized in `auth.py::get_current_user`, used as a FastAPI dependency.
- Passwords are never stored in plain text. `passlib` is used to hash and verify passwords securely.

---

## 🔐 Security Considerations

- Store `SECRET_KEY` securely (not in code!)
- Use HTTPS in production
- Rotate JWT keys regularly in production

---

## 📦 Build Artifacts

| Item            | Location            |
|-----------------|---------------------|
| Dockerfile      | `TODO`              |
| CI/CD Workflow  | `.github/workflows` |
| K8s YAML        | `kubernetes/auth/`  |
| Terraform       | `terraform/modules` |

---

## 📬 Contact / Feedback
Have feedback or suggestions? Open an issue or PR! This service is part of the broader ShopVerse DevOps platform.
