const express = require('express');
const router = express.Router();

// GET about page info
router.get('/', (req, res) => {
  res.json({
    student: {
      name: 'Tấn Nguyễn',
      studentId: '21CLC001',
      class: '21CLC1'
    },
    app: {
      name: process.env.APP_NAME || 'Quan Ly Chi Tieu',
      description: 'Ứng dụng quản lý chi tiêu hàng ngày',
      version: '1.0.0'
    }
  });
});

module.exports = router;
