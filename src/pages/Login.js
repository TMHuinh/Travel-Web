import React, { useState } from 'react';
import { Row, Col, Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const correctUsername = 'admin';
    const correctPassword = '123456';

    if (username === correctUsername && password === correctPassword) {
      alert('Đăng nhập thành công!');
      navigate('/');
    } else {
      alert('Tên đăng nhập hoặc mật khẩu không đúng. Vui lòng thử lại!');
    }
  };

  return (
    <Container className='my-4'>
      <Row className='justify-content-center'>
        <Col md={6}>
          <form
            className='shadow-lg p-4 border border-2 rounded'
            onSubmit={handleSubmit}
          >
            <h1 className='text-primary fw-bold my-4 mb-4'>LOGIN</h1>
            <div className='mb-3 text-start'>
              <label htmlFor='username' className='form-label fw-bold'>
                Tên đăng nhập
              </label>
              <input
                type='text'
                className='form-control'
                id='username'
                placeholder='Nhập tên đăng nhập'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className='mb-3 text-start'>
              <label htmlFor='password' className='form-label fw-bold'>
                Mật khẩu
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                placeholder='Nhập mật khẩu'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <br />
            <p>
              Chưa là thành viên?{' '}
              <a
                href='/login'
                style={{ textDecoration: 'none', fontStyle: 'italic' }}
              >
                Đăng ký ngay
              </a>
            </p>
            <Button variant='primary' type='submit' className='w-50 fs-4'>
              Đăng nhập
            </Button>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
