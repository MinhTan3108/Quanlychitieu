const express = require('express');
const router = express.Router();

// GET about page info
router.get('/', (req, res) => {
  res.json({
    student: {
      name: 'Nguyễn Thị Minh Tân',
      studentId: '2251220244',
      class: '22CT2'
    },
    app: {
      name: process.env.APP_NAME || 'Quan Ly Chi Tieu',
      description: 'Ứng dụng quản lý chi tiêu hàng ngày',
      version: '1.0.0'
    }
  });
});

module.exports = router;
