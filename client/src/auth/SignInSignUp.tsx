import React, { useState } from 'react';
import axios from 'axios';
import './Signinsignout.css'
import { User, UserFormData, FormErrors } from '../interfaces/interface'
import { useNavigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
//tien
export default function SignInSignup() {
  const navigate=useNavigate();
  const [isSignUpActive, setIsSignUpActive] = useState(false);
  const [formData, setFormData] = useState<UserFormData>({
    email: '',
    password: '',
    name: '',
    userName: ''
  });

  const [errors, setErrors] = useState<FormErrors>({
    email: '',
    password: '',
    name: '',
    userName: ''
  });

  const toggleSignInSignUp = () => {
    setIsSignUpActive(!isSignUpActive);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateFormData = (isSignUp: boolean) => {
    let isValid = true;
    const newErrors = { email: '', password: '', name: '', userName: '' };

    // Validate email
    if (!formData.email || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ.';
      isValid = false;
    }

    // Validate password
    if (!formData.password || formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự.';
      isValid = false;
    }

    // Additional validations for sign-up
    if (isSignUp) {
      if (!formData.name.trim()) {
        newErrors.name = 'Tên không được để trống.';
        isValid = false;
      }

      if (!formData.userName.trim()) {
        newErrors.userName = 'Tên đăng nhập không được để trống.';
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!validateFormData(isSignUpActive)) {
      return;
    }

    if (isSignUpActive) {
      try {
        const response:User = await axios.post('http://localhost:8080/users', {
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
        alert('Đăng ký thành công');
        
        // Sau khi đăng ký thành công, đặt lại giá trị của formData
        setFormData({
          email: '',
          password: '',
          name: '',
          userName: ''
        });

        // Chuyển sang form đăng nhập
        setIsSignUpActive(false);
      } catch (error) {
        alert('Đăng ký thất bại. Vui lòng thử lại');
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
          navigate("/");
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
      <div className={`container_login ${isSignUpActive ? 'active' : ''}`} id="container_login">
        <div className="form-container_login sign-up">
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
            <input
              type="text"
              name="name"
              placeholder="Tên"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <input
              type="text"
              name="userName"
              placeholder="Tên Đăng Nhập"
              value={formData.userName}
              onChange={handleChange}
            />
            {errors.userName && <span className="error">{errors.userName}</span>}
            <input
              type="password"
              name="password"
              placeholder="Mật Khẩu"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <span className="error">{errors.password}</span>}
            <button type="submit">Đăng Ký</button>
          </form>
        </div>
        <div className="form-container_login sign-in">
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
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <span className="error">{errors.email}</span>}
            <input
              type="password"
              name="password"
              placeholder="Mật Khẩu"
              value={formData.password}
              onChange={handleChange}
              required
            />
            {errors.password && <span className="error">{errors.password}</span>}
            <a href="#">Quên mật khẩu của bạn?</a>
            <button type="submit" >Đăng Nhập</button>
          </form>
        </div>
        <div className="toggle-container_login">
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
