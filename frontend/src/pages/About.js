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

         
          </div>
        
      )}
    </div>
  );
}

export default About;
