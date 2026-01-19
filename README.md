

# ✅ TaskManager  
### Full-Stack Task Management Application

A modern **Task Management system** built with a **React frontend** and an **Express.js REST API**, backed by **PostgreSQL**.  
Designed for scalability, clean architecture, and real-world deployment.

🔗 **Live Application:**  
👉 https://task-manager-gdsp.vercel.app/


---

## 📌 Project Overview

**TaskManager** helps users efficiently create, manage, and track tasks with a smooth user experience and a reliable backend.

The application follows a **full-stack architecture**:
- Frontend handles UI and user interaction
- Backend exposes secure REST APIs
- Database stores tasks persistently
- Cloud services handle hosting and database connectivity

---

## ⚙️ Tech Stack

| Layer | Technology |
|-----|-----------|
| Frontend | React |
| Backend | Express.js (Node.js) |
| Database | PostgreSQL |
| Backend Hosting | Render |
| Frontend Hosting | Vercel |
| Database Service | Supabase |

---

## ✨ Key Features

- Create, update, and delete tasks
- RESTful API architecture
- Persistent task storage using PostgreSQL
- Cloud-hosted backend and frontend
- Secure database connection via Supabase
- Clean separation of frontend and backend logic
- Scalable and production-ready setup

---

## 🧩 Architecture Flow

```text
React (Vercel)
      ↓
Express API (Render)
      ↓
PostgreSQL (Supabase)
```

---

## 🛠️ Project Setup (Frontend + Backend)

### Prerequisites
- Node.js (v18+)
- npm
- PostgreSQL credentials (via Supabase)

---

### Clone the Repository

```bash
git clone https://github.com/your-username/taskmanager.git
cd taskmanager
```

---

### Backend Setup (Express + PostgreSQL)

```bash
cd backend
npm install
```

Create a `.env` file and add:

```text
PORT=5000
DATABASE_URL=your_supabase_postgres_connection_url
```

Run the backend server:

```bash
npm start
```

Backend runs on:

```text
http://localhost:5000
```

---

### Frontend Setup (React)

```bash
cd frontend
npm install
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

## 🌐 Deployment Details

- **Backend** deployed on **Render**
- **Frontend** deployed on **Vercel**
- **Local PostgreSQL** connected and migrated to **Supabase**
- Environment variables securely configured in hosting platforms

---

## 📦 API Overview (Example)

```http
GET /tasks
POST /tasks
PUT /tasks/:id
DELETE /tasks/:id
```

---

## 🧠 Database Connection

The PostgreSQL database is hosted on **Supabase**, providing:
- Managed database
- Secure connection strings
- Easy scalability
- Reliable backups

---

<div align="center">

🚀 **TaskManager** — Clean Architecture • Cloud Deployed • Production Ready

</div>
