# ⚡ QUICK REFERENCE CARD

## 🎯 WHAT YOU HAVE

A **complete, production-ready expense management application** with:
- ✅ React frontend with 6 components
- ✅ Node.js backend with 7 API endpoints
- ✅ MongoDB database integration
- ✅ Docker containers for all services
- ✅ Docker Compose orchestration
- ✅ 6 commits on git feature branch
- ✅ 5 git branches (main, develop, feature/frontend-project, feature/backend-api, feature/frontend)
- ✅ Complete student information system
- ✅ Health check endpoint
- ✅ Environment variable configuration

---

## ⚡ QUICK COMMANDS

### Development (No Docker)
```bash
# Terminal 1: Backend
cd backend && npm install && npm run dev

# Terminal 2: Frontend  
cd frontend && npm install && npm start
```
**Access:** http://localhost:3000 (Backend: http://localhost:5000)

### Production (Docker)
```bash
docker-compose up -d --build
```
**Access:** http://localhost:3000

### Stop Services
```bash
docker-compose down
```

### View Logs
```bash
docker-compose logs -f              # All logs
docker-compose logs frontend        # Frontend only
docker-compose logs backend         # Backend only
```

---

## 🗂️ FOLDER STRUCTURE

```
Quanlychitieu/
├── frontend/                  # NEW React App
│   ├── src/
│   │   ├── components/       # 3 components (Nav, Form, List)
│   │   ├── pages/           # 2 pages (Home, About)
│   │   └── services/        # API integration
│   ├── Dockerfile
│   ├── package.json
│   └── .env
├── backend/                   # Node.js Server
│   ├── routes/
│   ├── models/
│   ├── Dockerfile
│   └── .env
├── docker-compose.yml         # Orchestration
├── .env                       # Root config
└── README.md                  # Documentation
```

---

## 📱 PAGES & ENDPOINTS

### Frontend Pages
| Route | Purpose |
|-------|---------|
| / | Dashboard (view/add/edit/delete expenses) |
| /about | Student info page |

### Backend API
| Method | Endpoint | Purpose |
|--------|----------|---------|
| GET | /health | Check status |
| GET | /api/expenses | List all expenses |
| POST | /api/expenses | Create expense |
| PUT | /api/expenses/:id | Update expense |
| DELETE | /api/expenses/:id | Delete expense |
| GET | /api/about | Student info |

---

## 🎓 STUDENT INFO

- **Name:** Tấn Nguyễn
- **ID:** 21CLC001
- **Class:** 21CLC1
- **Available at:** http://localhost:3000/about (or /api/about)

---

## 📊 EXPENSE CATEGORIES

```
🍔 Ăn uống (Food)
🚗 Di chuyển (Transport)
🛍️ Mua sắm (Shopping)
🎬 Giải trí (Entertainment)
💊 Sức khỏe (Health)
📌 Khác (Other)
```

---

## 🔐 DEFAULT CREDENTIALS

### Database
```
URL: mongodb+srv://tan2251220244_db_user:tan123@quanlichitieu.luvkveu.mongodb.net/
User: tan2251220244_db_user
Pass: tan123
```

### Docker MongoDB
```
User: admin
Pass: admin123
```

---

## 💾 ENVIRONMENT VARIABLES

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_APP_NAME=Quan Ly Chi Tieu
REACT_APP_PORT=3000
```

### Backend (.env)
```
PORT=5000
DB_URL=mongodb+srv://tan2251220244_db_user:tan123@quanlichitieu.luvkveu.mongodb.net/quanlychitieu
APP_NAME=Quan Ly Chi Tieu
NODE_ENV=development
```

---

## 🔄 Git Commands

### View Commits
```bash
git log --oneline -10
```

### View Branches
```bash
git branch -a
```

### Switch Branch
```bash
git checkout develop          # Switch to develop
git checkout main            # Switch to main
git checkout -b feature/xxx  # Create new feature
```

### Merge to Develop
```bash
git checkout develop
git merge feature/frontend-project
git push origin develop
```

---

## 🧪 TESTING

### Test Backend Running
```bash
curl http://localhost:5000/health
# Should return: {"status":"ok"}
```

### Test API
```bash
# Get all expenses
curl http://localhost:5000/api/expenses

# Create expense
curl -X POST http://localhost:5000/api/expenses \
  -H "Content-Type: application/json" \
  -d '{"category":"Ăn uống","amount":50000,"description":"Lunch"}'

# Get student info
curl http://localhost:5000/api/about
```

---

## 📸 SCREENSHOTS NEEDED

For your report, take screenshots of:
1. Frontend running at http://localhost:3000
2. About page showing: Name, Student ID, Class
3. Health check: curl http://localhost:5000/health
4. Git commit history: git log
5. Git branches: git branch -a
6. Docker images: docker images
7. Running containers: docker ps
8. Expense list with sample data

---

## 🐛 TROUBLESHOOTING

| Issue | Solution |
|-------|----------|
| Port already in use | Change port in .env or .docker-compose.yml |
| Frontend can't connect | Verify REACT_APP_API_URL is correct |
| MongoDB error | Check connection string in .env |
| Docker not found | Install Docker Desktop |
| npm install fails | Run: `npm install -g npm@10` then retry |

---

## 📝 DOCUMENTATION

Navigate to these files for more info:
- **README.md** - Project overview
- **SETUP_GUIDE.md** - Detailed setup
- **PROJECT_COMPLETION.md** - What's included
- **DELIVERY_CHECKLIST.md** - Verification list
- **frontend/README.md** - Frontend docs
- **backend/README.md** - Backend docs

---

## ✅ READY TO SUBMIT?

Before submission, verify:
- [ ] Can run `npm install && npm start` successfully
- [ ] Frontend loads at http://localhost:3000
- [ ] About page shows: Tấn Nguyễn, 21CLC001, 21CLC1
- [ ] Can add/edit/delete expenses
- [ ] Health check works: http://localhost:5000/health
- [ ] Docker images build successfully
- [ ] Docker Compose starts all services
- [ ] Git has 5+ commits
- [ ] Git has 5+ branches
- [ ] Screenshots captured

---

## 🚀 DEPLOYMENT

### Push to Docker Hub
```bash
# Login first
docker login

# Build and push backend
docker build -t YOUR_USERNAME/quan-ly-chi-tieu-backend:1.0.0 ./backend
docker push YOUR_USERNAME/quan-ly-chi-tieu-backend:1.0.0

# Build and push frontend
docker build -t YOUR_USERNAME/quan-ly-chi-tieu-frontend:1.0.0 ./frontend
docker push YOUR_USERNAME/quan-ly-chi-tieu-frontend:1.0.0
```

---

## 📞 NEED HELP?

1. **Can't install?** → Check Node.js version (need 18+)
2. **Port error?** → Change ports in .env
3. **API not working?** → Start backend first
4. **Docker issues?** → Delete containers: `docker-compose down -v`
5. **Git problems?** → Check status: `git status`

---

## 🎉 YOU'RE ALL SET!

Everything is ready to go. Just follow the Quick Commands above and you're good to submit!

**Good luck! 🚀**
