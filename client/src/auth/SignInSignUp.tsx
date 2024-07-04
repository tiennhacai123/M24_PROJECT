import React, { useState } from 'react';
import axios from 'axios';
import './style.css';

export default function SignInSignup() {
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    userName: ''
  });

  const toggleSignInSignUp = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  const handleChange = (e:any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    if (isSignUpActive) {
      try {
        const response = await axios.post('http://localhost:8080/users', {
          userName: formData.userName,
          email: formData.email,
          name: formData.name,
          password: formData.password,
          avatar: '',   
          banner: '',   
          bio: '',     
          follows: [],   
          friends: [],   
          groups: [],   
          created_at: new Date().toISOString()
        });
        alert('Đăng ký thành công')
      } catch (error) {
        alert('Đăng ký thất bại. Vui lòng thử lại')
      }
    } else {
      try {
        const response = await axios.get('http://localhost:8080/users', {
          params: {
            email: formData.email,
            password: formData.password
          }
        });
        const user = response.data.find((user: { email: string; password: string; }) => user.email === formData.email && user.password === formData.password);
        if (user) {
          alert(`Chào mừng, ${user.name}!`);
        } else {
          alert('Đăng nhập thất bại. Email hoặc mật khẩu không đúng.');
        }
      } catch (error) {
        alert('Đăng nhập thất bại. Vui lòng thử lại.');
      }
    }
  };

  return (
    <div className="auth-wrapper">
      <div className={`container ${isSignUpActive ? 'active' : ''}`} id="container">
        <div className="form-container sign-up">
          <form onSubmit={handleSubmit}>
            <h1>Tạo Tài Khoản</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
            <span>hoặc sử dụng email của bạn để đăng ký</span>
            <input type="text" name="name" placeholder="Tên" value={formData.name} onChange={handleChange} required />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="text" name="userName" placeholder="Tên Đăng Nhập" value={formData.userName} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Mật Khẩu" value={formData.password} onChange={handleChange} required />
            <button type="submit">Đăng Ký</button>
          </form>
        </div>
        <div className="form-container sign-in">
          <form onSubmit={handleSubmit}>
            <h1>Đăng Nhập</h1>
            <div className="social-icons">
              <a href="#" className="icon">
                <i className="fa-brands fa-google-plus-g" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-facebook-f" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-github" />
              </a>
              <a href="#" className="icon">
                <i className="fa-brands fa-linkedin-in" />
              </a>
            </div>
            <span>hoặc sử dụng email của bạn để đăng nhập</span>
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
            <input type="password" name="password" placeholder="Mật Khẩu" value={formData.password} onChange={handleChange} required />
            <a href="#">Quên mật khẩu của bạn?</a>
            <button type="submit">Đăng Nhập</button>
          </form>
        </div>
        <div className="toggle-container">
          <div className="toggle">
            <div className="toggle-panel toggle-left">
              <h1>Chào Mừng Trở Lại!</h1>
              <p>Nhập chi tiết cá nhân của bạn để tiếp tục sử dụng dịch vụ</p>
              <button className="toggle-btn" onClick={toggleSignInSignUp}>
                Đăng Nhập
              </button>
            </div>
            <div className="toggle-panel toggle-right">
              <h1>Xin Chào, Bạn!</h1>
              <p>Đăng ký bằng chi tiết cá nhân của bạn để sử dụng các tính năng của trang web</p>
              <button className="toggle-btn" onClick={toggleSignInSignUp}>
                Đăng Ký
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
