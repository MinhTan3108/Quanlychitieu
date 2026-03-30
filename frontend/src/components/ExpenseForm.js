import React, { useState } from 'react';
import './ExpenseForm.css';

function ExpenseForm({ onSubmit, initialData = null }) {
  const [formData, setFormData] = useState(
    initialData || {
      category: '',
      amount: '',
      description: '',
      date: new Date().toISOString().split('T')[0]
    }
  );

  const categories = ['Ăn uống', 'Di chuyển', 'Mua sắm', 'Giải trí', 'Sức khỏe', 'Khác'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.category && formData.amount) {
      onSubmit(formData);
      if (!initialData) {
        setFormData({
          category: '',
          amount: '',
          description: '',
          date: new Date().toISOString().split('T')[0]
        });
      }
    }
  };

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <h3>📝 {initialData ? 'Cập Nhật Chi Tiêu' : 'Thêm Chi Tiêu Mới'}</h3>
      
      <div className="form-group">
        <label htmlFor="category">Danh Mục:</label>
        <select
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        >
          <option value="">-- Chọn danh mục --</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="amount">Số Tiền (đ):</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          placeholder="0"
          min="0"
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Ghi Chú:</label>
        <input
          type="text"
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Mô tả chi tiêu..."
        />
      </div>

      <div className="form-group">
        <label htmlFor="date">Ngày:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <button type="submit" className="btn-submit">
        {initialData ? '💾 Cập Nhật' : '➕ Thêm'}
      </button>
    </form>
  );
}

export default ExpenseForm;
