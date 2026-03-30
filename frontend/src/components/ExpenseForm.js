import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onAddExpense }) {
  const [formData, setFormData] = useState({
    category: 'Ăn uống',
    amount: '',
    description: '',
    date: new Date().toISOString().split('T')[0]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'amount' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.amount <= 0) {
      alert('Vui lòng nhập số tiền hợp lệ');
      return;
    }
    await onAddExpense(formData);
    setFormData({
      category: 'Ăn uống',
      amount: '',
      description: '',
      date: new Date().toISOString().split('T')[0]
    });
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h2>Thêm Chi Tiêu</h2>
      
      <div className="form-group">
        <label>Danh Mục:</label>
        <select 
          name="category" 
          value={formData.category} 
          onChange={handleChange}
        >
          <option value="Ăn uống">Ăn uống</option>
          <option value="Giao thông">Giao thông</option>
          <option value="Giáo dục">Giáo dục</option>
          <option value="Giải trí">Giải trí</option>
          <option value="Sức khỏe">Sức khỏe</option>
          <option value="Khác">Khác</option>
        </select>
      </div>

      <div className="form-group">
        <label>Số Tiền:</label>
        <input 
          type="number" 
          name="amount" 
          value={formData.amount}
          onChange={handleChange}
          placeholder="0"
          required
          step="0.01"
        />
      </div>

      <div className="form-group">
        <label>Ngày:</label>
        <input 
          type="date" 
          name="date" 
          value={formData.date}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label>Ghi Chú:</label>
        <textarea 
          name="description" 
          value={formData.description}
          onChange={handleChange}
          placeholder="Ghi chú thêm..."
          rows="3"
        />
      </div>

      <button type="submit" className="btn-submit">Thêm Chi Tiêu</button>
    </form>
  );
}

export default ExpenseForm;
