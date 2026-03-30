import React, { useState, useEffect } from 'react';
import { getAboutInfo } from '../services/api';
import './About.css';

function About() {
  const [aboutInfo, setAboutInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAboutInfo();
  }, []);

  const fetchAboutInfo = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getAboutInfo();
      setAboutInfo(data);
    } catch (err) {
      setError('Không thể tải thông tin. Vui lòng kiểm tra kết nối backend.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="about">
        <h2>ℹ️ Thông Tin</h2>
        <div className="loading">⏳ Đang tải...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="about">
        <h2>ℹ️ Thông Tin</h2>
        <div className="error-message">❌ {error}</div>
      </div>
    );
  }

  return (
    <div className="about">
      <h2>ℹ️ Thông Tin</h2>

      {aboutInfo && (
        <div className="about-content">
          {/* Student Info */}
          <div className="info-card student-card">
            <h3>👨‍🎓 Thông Tin Sinh Viên</h3>
            <div className="info-item">
              <span className="label">Họ Tên:</span>
              <span className="value">{aboutInfo.student.name}</span>
            </div>
            <div className="info-item">
              <span className="label">Mã Số Sinh Viên:</span>
              <span className="value student-id">{aboutInfo.student.studentId}</span>
            </div>
            <div className="info-item">
              <span className="label">Lớp:</span>
              <span className="value">{aboutInfo.student.class}</span>
            </div>
          </div>

          {/* App Info */}
          <div className="info-card app-card">
            <h3>💻 Thông Tin Ứng Dụng</h3>
            <div className="info-item">
              <span className="label">Tên Ứng Dụng:</span>
              <span className="value">{aboutInfo.app.name}</span>
            </div>
            <div className="info-item">
              <span className="label">Mô Tả:</span>
              <span className="value description">{aboutInfo.app.description}</span>
            </div>
            <div className="info-item">
              <span className="label">Phiên Bản:</span>
              <span className="value version">{aboutInfo.app.version}</span>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="info-card tech-card">
            <h3>🛠️ Công Nghệ Sử Dụng</h3>
            <div className="tech-stack">
              <div className="tech-item">
                <span className="tech-name">Frontend:</span>
                <span className="tech-description">React.js, React Router, Axios, CSS3</span>
              </div>
              <div className="tech-item">
                <span className="tech-name">Backend:</span>
                <span className="tech-description">Node.js, Express.js, Mongoose</span>
              </div>
              <div className="tech-item">
                <span className="tech-name">Database:</span>
                <span className="tech-description">MongoDB</span>
              </div>
              <div className="tech-item">
                <span className="tech-name">DevOps:</span>
                <span className="tech-description">Docker, Docker Compose, Git</span>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="info-card features-card">
            <h3>✨ Tính Năng Chính</h3>
            <ul className="features-list">
              <li>📊 Xem danh sách chi tiêu</li>
              <li>➕ Thêm chi tiêu mới</li>
              <li>✏️ Chỉnh sửa chi tiêu</li>
              <li>🗑️ Xóa chi tiêu</li>
              <li>📈 Thống kê tổng chi tiêu</li>
              <li>🏷️ Phân loại theo danh mục</li>
              <li>📅 Ghi chú ngày tháng</li>
              <li>💾 Lưu trữ trên MongoDB</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default About;
