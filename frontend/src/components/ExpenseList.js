import React from 'react';
import './ExpenseList.css';

function ExpenseList({ expenses, onDeleteExpense, onExpenseUpdated }) {
  const totalAmount = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  const categoryEmoji = {
    'Ăn uống': '🍽️',
    'Giao thông': '🚌',
    'Giáo dục': '📚',
    'Giải trí': '🎮',
    'Sức khỏe': '🏥',
    'Khác': '📌'
  };

  return (
    <div className="expense-list">
      <h2>Danh Sách Chi Tiêu</h2>
      
      <div className="total-summary">
        <h3>Tổng Chi Tiêu: <span className="amount">{totalAmount.toLocaleString('vi-VN')} VND</span></h3>
      </div>

      {expenses.length === 0 ? (
        <p className="empty-message">Chưa có chi tiêu nào. Hãy thêm chi tiêu mới!</p>
      ) : (
        <div className="expenses">
          {expenses.map(expense => (
            <div key={expense._id} className="expense-item">
              <div className="expense-header">
                <span className="emoji">{categoryEmoji[expense.category] || '💱'}</span>
                <div className="expense-info">
                  <div className="category">{expense.category}</div>
                  <div className="date">{new Date(expense.date).toLocaleDateString('vi-VN')}</div>
                </div>
                <div className="expense-amount">
                  {expense.amount.toLocaleString('vi-VN')} VND
                </div>
              </div>
              {expense.description && (
                <div className="expense-description">
                  {expense.description}
                </div>
              )}
              <button 
                className="btn-delete"
                onClick={() => onDeleteExpense(expense._id)}
              >
                Xóa
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ExpenseList;
