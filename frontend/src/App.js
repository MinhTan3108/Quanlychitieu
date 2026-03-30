import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import About from './pages/About';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [currentPage, setCurrentPage] = useState('home');
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/expenses`);
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  const handleAddExpense = async (newExpense) => {
    try {
      const response = await axios.post(`${API_URL}/api/expenses`, newExpense);
      setExpenses([response.data, ...expenses]);
    } catch (error) {
      console.error('Error adding expense:', error);
    }
  };

  const handleDeleteExpense = async (id) => {
    try {
      await axios.delete(`${API_URL}/api/expenses/${id}`);
      setExpenses(expenses.filter(expense => expense._id !== id));
    } catch (error) {
      console.error('Error deleting expense:', error);
    }
  };

  return (
    <div className="App">
      <nav className="navbar">
        <div className="navbar-brand">💰 Quản Lý Chi Tiêu</div>
        <ul className="nav-menu">
          <li>
            <button 
              className={currentPage === 'home' ? 'active' : ''} 
              onClick={() => setCurrentPage('home')}
            >
              Trang Chủ
            </button>
          </li>
          <li>
            <button 
              className={currentPage === 'about' ? 'active' : ''} 
              onClick={() => setCurrentPage('about')}
            >
              Về Ứng Dụng
            </button>
          </li>
        </ul>
      </nav>

      <div className="container">
        {currentPage === 'home' ? (
          <>
            <h1>Quản Lý Chi Tiêu Hàng Ngày</h1>
            <div className="content">
              <ExpenseForm onAddExpense={handleAddExpense} />
              <ExpenseList 
                expenses={expenses} 
                onDeleteExpense={handleDeleteExpense}
                onExpenseUpdated={fetchExpenses}
              />
            </div>
          </>
        ) : (
          <About />
        )}
      </div>
    </div>
  );
}

export default App;
