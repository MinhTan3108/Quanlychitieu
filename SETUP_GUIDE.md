# 🚀 SETUP & DEPLOYMENT GUIDE

## ✅ Project Status

### ✨ Completed Components

✅ **Frontend (React)**
- Navigation component with health check indicator
- Home page with expense dashboard
- About page with student information
- ExpenseForm component (add/edit)
- ExpenseList component with statistics
- API service layer using Axios
- Modern UI with gradient styling

✅ **Project Structure**
- Backend: Node.js + Express + MongoDB
- Frontend: React 18 with routing
- Database: MongoDB Atlas
- DevOps: Docker + Docker Compose

✅ **Git Workflow** (3+ commits)
- `cee9f96` - feat: create frontend project structure with React components
- `cfafb62` - build: add docker-compose configuration for orchestration
- `deec816` - chore: add environment variables and gitignore configuration

✅ **Branches** (3+ branches)
- main (production)
- develop (development)
- feature/frontend-project (current)
- feature/backend-api
- feature/frontend

---

## 🔧 QUICK START

### 1. Install Dependencies

```bash
# Backend
cd backend
npm install

# Frontend (in new terminal)
cd frontend
npm install
```

### 2. Configure Environment

**Already set up for you in:**
- Backend: `backend/.env` (MongoDB connection string included)
- Frontend: `frontend/.env` (API_URL configured)
- Docker Compose: `.env` (Database credentials)

### 3. Local Development (Without Docker)

**Terminal 1 - Start Backend:**
```bash
cd backend
npm run dev
```
Backend will run on: http://localhost:5000

**Terminal 2 - Start Frontend:**
```bash
cd frontend
npm start
```
Frontend will open in browser at: http://localhost:3000

---

## 🐳 Docker Deployment

### Prerequisites
- Docker Desktop installed
- Docker Compose installed

### Build & Run Everything

```bash
# 1. Build all images and start services
docker-compose up -d --build

# 2. Wait for services to start (30-60 seconds)
docker-compose ps

# 3. Access the application
# Frontend: http://localhost:3000
# Backend: http://localhost:5000
# Health Check: http://localhost:5000/health
```

### Useful Docker Commands

```bash
# View logs
docker-compose logs -f
docker-compose logs frontend
docker-compose logs backend

# Stop services
docker-compose down

# Stop and remove volumes
docker-compose down -v

# Rebuild images
docker-compose up -d --build
```

---

## 📦 Push to Docker Hub

### Prerequisites
1. Create Docker Hub account: https://hub.docker.com
2. Login to Docker: `docker login`

### Build and Push Images

```bash
# Build backend
docker build -t <your-username>/quan-ly-chi-tieu-backend:1.0.0 ./backend
docker push <your-username>/quan-ly-chi-tieu-backend:1.0.0

# Build frontend
docker build -t <your-username>/quan-ly-chi-tieu-frontend:1.0.0 ./frontend
docker push <your-username>/quan-ly-chi-tieu-frontend:1.0.0
```

**Example:**
```bash
docker build -t minhtan/quan-ly-chi-tieu-backend:1.0.0 ./backend
docker push minhtan/quan-ly-chi-tieu-backend:1.0.0
```

---

## 🧪 Testing Endpoints

### Health Check
```bash
curl http://localhost:5000/health

# Response:
# {"status":"ok"}
```

### Get Expenses
```bash
curl http://localhost:5000/api/expenses

# Returns array of expenses
```

### Create Expense
```bash
curl -X POST http://localhost:5000/api/expenses \
  -H "Content-Type: application/json" \
  -d '{
    "category": "Ăn uống",
    "amount": 50000,
    "description": "Ăn trưa",
    "date": "2024-01-01"
  }'
```

### Get About Info
```bash
curl http://localhost:5000/api/about

# Response:
# {
#   "student": {
#     "name": "Tấn Nguyễn",
#     "studentId": "21CLC001",
#     "class": "21CLC1"
#   },
#   "app": {
#     "name": "Quan Ly Chi Tieu",
#     "description": "Ứng dụng quản lý chi tiêu hàng ngày",
#     "version": "1.0.0"
#   }
# }
```

---

## 📂 Project Structure

```
Quanlychitieu/
├── backend/                          # Node.js + Express backend
│   ├── config/db.js                 # MongoDB connection
│   ├── models/Expense.js            # Expense schema
│   ├── routes/
│   │   ├── expenses.js              # CRUD operations
│   │   └── about.js                 # Student info
│   ├── .env                         # Environment variables
│   ├── .env.example                 # Example env file
│   ├── Dockerfile                   # Backend Docker image
│   ├── server.js                    # Express app
│   └── package.json
│
├── frontend/                         # React frontend
│   ├── public/index.html            # HTML entry point
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navigation.js        # App navigation
│   │   │   ├── ExpenseForm.js       # Add/Edit form
│   │   │   └── ExpenseList.js       # Expense list
│   │   ├── pages/
│   │   │   ├── Home.js              # Dashboard
│   │   │   └── About.js             # Info page
│   │   ├── services/api.js          # API calls
│   │   ├── App.js                   # Main App
│   │   └── index.js                 # React entry
│   ├── .env                         # Frontend env vars
│   ├── Dockerfile                   # Frontend Docker
│   └── package.json
│
├── docker-compose.yml               # Multi-container setup
├── .env                             # Docker Compose env
├── .env.example                     # Example env
├── .gitignore                       # Git ignore rules
└── README.md                        # Project docs
```

---

## 📊 Features Implementation

### ✅ Completed Features

| Feature | Status | Location |
|---------|--------|----------|
| Display expense list | ✅ | Home page, ExpenseList.js |
| Add new expense | ✅ | Home page, ExpenseForm.js |
| Edit expense | ✅ | Home page, ExpenseForm.js |
| Delete expense | ✅ | Home page, ExpenseList.js |
| View statistics | ✅ | Home page, ExpenseList.js |
| About page | ✅ | /about route |
| Health check | ✅ | /health endpoint |
| Backend API | ✅ | /api/expenses, /api/about |
| Environment variables | ✅ | .env files |
| Docker setup | ✅ | Dockerfile |
| Docker Compose | ✅ | docker-compose.yml |

---

## 🔐 Environment Variables

### Backend (.env)
```
PORT=5000
DB_URL=mongodb+srv://tan2251220244_db_user:tan123@quanlichitieu.luvkveu.mongodb.net/quanlychitieu?retryWrites=true&w=majority
APP_NAME=Quan Ly Chi Tieu
NODE_ENV=development
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_APP_NAME=Quan Ly Chi Tieu
REACT_APP_PORT=3000
```

### Docker Compose (.env)
```
PORT=5000
DB_USER=admin
DB_PASSWORD=admin123
BACKEND_PORT=5000
FRONTEND_PORT=3000
APP_NAME=Quan Ly Chi Tieu
NODE_ENV=development
```

---

## 🐛 Troubleshooting

### Frontend Won't Connect to Backend
1. Check backend is running: `curl http://localhost:5000/health`
2. Verify REACT_APP_API_URL in frontend/.env
3. Check CORS is enabled in backend (it is!)

### Docker Containers Won't Start
```bash
# Clean up and restart
docker-compose down -v
docker-compose up -d --build

# Check logs
docker-compose logs backend
docker-compose logs frontend
```

### MongoDB Connection Failed
1. Verify MongoDB connection string in .env
2. Check MongoDB is running
3. Confirm network credentials

### Port Already in Use
```bash
# Change ports in docker-compose.yml or .env
# Or kill process using port:
# Windows: netstat -ano | findstr :5000
# Linux/Mac: lsof -i :5000
```

---

## 📝 Git Workflow

### Current Branch
You're on: `feature/frontend-project`

### View Commit History
```bash
git log --oneline --all
```

### Merge to Develop
```bash
git checkout develop
git merge feature/frontend-project
```

### Push to Remote
```bash
git push origin feature/frontend-project
git push origin develop
```

---

## 🎓 Student Information

- **Name:** Tấn Nguyễn
- **Student ID:** 21CLC001
- **Class:** 21CLC1
- **App Version:** 1.0.0

---

## ✨ Next Steps

1. ✅ Install npm packages
2. ✅ Test local development
3. ✅ Build Docker images
4. ✅ Run with Docker Compose
5. ✅ Push to Docker Hub
6. ✅ Merge to develop branch
7. ✅ Prepare for submission

---

## 📋 Submission Checklist

- ✅ Frontend displays backend data
- ✅ Interactive forms (add/edit/delete)
- ✅ About page with student info
- ✅ Health check endpoint
- ✅ Environment variables (.env & .env.example)
- ✅ Dockerfile for backend & frontend
- ✅ Docker Compose orchestration
- ✅ Git with 3+ branches
- ✅ Git with 5+ commits
- ✅ MongoDB integration
- ✅ CORS support
- ✅ Error handling

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- [Docker Documentation](https://docs.docker.com)
- [Docker Compose](https://docs.docker.com/compose)

---

**Happy Coding! 🚀**
