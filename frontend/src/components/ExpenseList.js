import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses, onEdit, onDelete, loading }) {
  if (loading) {
    return <div className="loading">⏳ Đang tải dữ liệu...</div>;
  }

  if (expenses.length === 0) {
    return (
      <div className="empty-state">
        <p>📭 Chưa có chi tiêu nào. Hãy thêm chi tiêu mới!</p>
      </div>
    );
  }

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(amount);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
  };

  const getCategoryEmoji = (category) => {
    const emojiMap = {
      'Ăn uống': '🍔',
      'Di chuyển': '🚗',
      'Mua sắm': '🛍️',
      'Giải trí': '🎬',
      'Sức khỏe': '💊',
      'Khác': '📌'
    };
    return emojiMap[category] || '💰';
  };

  const totalAmount = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <div className="expense-list-container">
      <div className="expense-summary">
        <h3>📊 Thống Kê</h3>
        <div className="summary-card">
          <span>Tổng Chi Tiêu:</span>
          <strong>{formatCurrency(totalAmount)}</strong>
        </div>
      </div>

      <div className="expense-list">
        <h3>💸 Danh Sách Chi Tiêu</h3>
        <div className="list-items">
          {expenses.map((expense) => (
            <div key={expense._id} className="expense-item">
              <div className="expense-content">
                <div className="expense-header">
                  <span className="category-emoji">
                    {getCategoryEmoji(expense.category)}
                  </span>
                  <div className="expense-info">
                    <h4>{expense.category}</h4>
                    <p className="description">{expense.description || 'Không có ghi chú'}</p>
                  </div>
                </div>
                <div className="expense-meta">
                  <span className="date">📅 {formatDate(expense.date)}</span>
                </div>
              </div>
              <div className="expense-amount">
                <div className="amount">{formatCurrency(expense.amount)}</div>
                <div className="actions">
                  <button
                    className="btn-edit"
                    onClick={() => onEdit(expense)}
                    title="Chỉnh sửa"
                  >
                    ✏️
                  </button>
                  <button
                    className="btn-delete"
                    onClick={() => onDelete(expense._id)}
                    title="Xóa"
                  >
                    🗑️
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExpenseList;
