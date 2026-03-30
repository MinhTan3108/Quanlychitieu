import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000
});

// Expense APIs
export const getExpenses = async () => {
  try {
    const response = await api.get('/expenses');
    return response.data;
  } catch (error) {
    console.error('Error fetching expenses:', error);
    throw error;
  }
};

export const createExpense = async (expenseData) => {
  try {
    const response = await api.post('/expenses', expenseData);
    return response.data;
  } catch (error) {
    console.error('Error creating expense:', error);
    throw error;
  }
};

export const updateExpense = async (id, expenseData) => {
  try {
    const response = await api.put(`/expenses/${id}`, expenseData);
    return response.data;
  } catch (error) {
    console.error('Error updating expense:', error);
    throw error;
  }
};

export const deleteExpense = async (id) => {
  try {
    await api.delete(`/expenses/${id}`);
  } catch (error) {
    console.error('Error deleting expense:', error);
    throw error;
  }
};

// About API
export const getAboutInfo = async () => {
  try {
    const response = await api.get('/about');
    return response.data;
  } catch (error) {
    console.error('Error fetching about info:', error);
    throw error;
  }
};

export default api;
