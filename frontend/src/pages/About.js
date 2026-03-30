import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './About.css';

function About() {
  const [aboutData, setAboutData] = useState(null);
  const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  useEffect(() => {
    fetchAboutData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/about`);
      setAboutData(response.data);
    } catch (error) {
      console.error('Error fetching about data:', error);
    }
  };

  if (!aboutData) {
    return <div className="loading">Đang tải...</div>;
  }

  return (
    <div className="about-container">
      <div className="about-card">
        <h2>Thông Tin Sinh Viên</h2>
        <div className="student-info">
          <div className="info-row">
            <label>Họ Tên: Nguyễn Thị Minh Tân</label>
            <span>{aboutData.student.name}</span>
          </div>
          <div className="info-row">
            <label>MSSV: 2251220244</label>
            <span>{aboutData.student.studentId}</span>
          </div>
          <div className="info-row">
            <label>Lớp:22CT2</label>
            <span>{aboutData.student.class}</span>
          </div>
        </div>
      </div>

      <div className="about-card">
        <h2>Về Ứng Dụng</h2>
        <div className="app-info">
          <div className="info-row">
            <label>Tên Ứng Dụng:</label>
            <span>{aboutData.app.name}</span>
          </div>
          <div className="info-row">
            <label>Mục Đích:</label>
            <span>{aboutData.app.description}</span>
          </div>
          <div className="info-row">
            <label>Phiên Bản:</label>
            <span>{aboutData.app.version}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
