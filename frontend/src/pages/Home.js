import React, { useState, useEffect } from 'react';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import { getExpenses, createExpense, updateExpense, deleteExpense } from '../services/api';
import './Home.css';

function Home() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editingExpense, setEditingExpense] = useState(null);

  useEffect(() => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getExpenses();
      setExpenses(data);
    } catch (err) {
      setError('Không thể tải dữ liệu chi tiêu. Vui lòng kiểm tra kết nối backend.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddExpense = async (formData) => {
    try {
      if (editingExpense) {
        await updateExpense(editingExpense._id, formData);
        setEditingExpense(null);
      } else {
        await createExpense(formData);
      }
      fetchExpenses();
    } catch (err) {
      setError('Lỗi khi lưu chi tiêu. Vui lòng thử lại.');
      console.error(err);
    }
  };

  const handleEditExpense = (expense) => {
    setEditingExpense(expense);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteExpense = async (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa chi tiêu này?')) {
      try {
        await deleteExpense(id);
        fetchExpenses();
      } catch (err) {
        setError('Lỗi khi xóa chi tiêu. Vui lòng thử lại.');
        console.error(err);
      }
    }
  };

  return (
    <div className="home">
      <h2>🏠 Trang Chủ - Quản Lý Chi Tiêu</h2>
      
      {error && <div className="error-message">❌ {error}</div>}
      
      <ExpenseForm
        onSubmit={handleAddExpense}
        initialData={editingExpense}
      />

      {editingExpense && (
        <button
          className="btn-cancel-edit"
          onClick={() => setEditingExpense(null)}
        >
          ✕ Hủy Chỉnh Sửa
        </button>
      )}

      <ExpenseList
        expenses={expenses}
        onEdit={handleEditExpense}
        onDelete={handleDeleteExpense}
        loading={loading}
      />
    </div>
  );
}

export default Home;
