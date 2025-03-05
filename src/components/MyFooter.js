import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
const MyFooter = () => {
  return (
    <footer className='bg-info-subtle py-4 text-start'>
      <Container>
        <Row>
          <Col md={4}>
            <h5>GIỚI THIỆU</h5>
            <p>
              Chúng tôi tự hào là công ty du lịch hàng đầu, với sứ mệnh mang lại
              những hành trình tuyệt vời, khó quên và đầy ý nghĩa cho khách
              hàng.
            </p>
          </Col>
          <Col md={4}>
            <h5>LIÊN HỆ</h5>
            <p>
              Địa chỉ: 123 Đường ABC, Quận 1, TP. Hồ Chí Minh
              <br />
              Email:
              <a className='text-black text-decoration-none' href='/'>
                {' '}
                contact@travel.com
              </a>
              <br />
              Số điện thoại: 1900 1839
            </p>
          </Col>
          <Col md={4}>
            <ul className='list-unstyled '>
              <h5>DU LỊCH</h5>
              <li>
                <a className='text-black text-decoration-none' href='/'>
                  Du lịch trong nước
                </a>
              </li>
              <li>
                <a className='text-black text-decoration-none' href='/'>
                  Du lịch nước ngoài
                </a>
              </li>
              <li>
                <a className='text-black text-decoration-none' href='/'>
                  Tin tức du lịch
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
