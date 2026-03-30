# Quản Lý Chi Tiêu - Frontend

React-based frontend for expense management application.

## Features

- 📊 View expense list
- ➕ Add new expense
- ✏️ Edit expense
- 🗑️ Delete expense
- 📈 View statistics
- 🏷️ Categorize expenses
- 📅 Date tracking
- 💾 Persistent storage on MongoDB

## Tech Stack

- React 18
- React Router DOM
- Axios for API calls
- CSS3 with modern styling

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create .env file:
```bash
cp .env.example .env
```

3. Update .env with your backend URL:
```
REACT_APP_API_URL=http://localhost:5000/api
REACT_APP_APP_NAME=Quan Ly Chi Tieu
REACT_APP_PORT=3000
```

## Development

Start development server:
```bash
npm start
```

App will open at `http://localhost:3000`

## Build

Create production build:
```bash
npm run build
```

## Docker

Build Docker image:
```bash
docker build -t quan-ly-chi-tieu-frontend:1.0.0 .
```

Run Docker container:
```bash
docker run -p 3000:3000 quan-ly-chi-tieu-frontend:1.0.0
```

## Project Structure

```
frontend/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Navigation.js
│   │   ├── ExpenseForm.js
│   │   └── ExpenseList.js
│   ├── pages/
│   │   ├── Home.js
│   │   └── About.js
│   ├── services/
│   │   └── api.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── .env
├── .env.example
├── Dockerfile
└── package.json
```

## API Endpoints

- `GET /api/expenses` - Get all expenses
- `POST /api/expenses` - Create new expense
- `PUT /api/expenses/:id` - Update expense
- `DELETE /api/expenses/:id` - Delete expense
- `GET /api/about` - Get about information
- `GET /health` - Health check

## Student Info

- Name: Tấn Nguyễn
- Student ID: 21CLC001
- Class: 21CLC1

## Version

1.0.0
