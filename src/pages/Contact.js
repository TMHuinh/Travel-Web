import React from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';

const Contact = () => {
  return (
    <Container className='my-4'>
      <Row className='mb-4'>
        <h1 className='text-primary fw-bold'>CONTACT</h1>
        <p className='text-muted fs-5 px-5'>
          Để có thể đáp ứng được các yêu cầu và đóng góp ý kiến của quý khách,
          xin vui lòng gửi thông tin hoặc gọi đến hotline các chi nhánh bên dưới
          để liên hệ một cách nhanh chóng nhất.
        </p>
      </Row>

      <Row className='d-flex justify-content-center align-items-stretch'>
        <Col md={7} className='d-flex'>
          <Card className='p-4 shadow bg-light w-100 d-flex flex-column'>
            <h3 className='text-success fw-bold text-center'>
              Liên hệ chúng tôi
            </h3>

            <Form className='mt-5 text-start'>
              <Form.Group className='mb-3' controlId='name'>
                <Form.Label className='fw-bold ms-2'>Họ và tên:</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Nhập họ và tên'
                  required
                />
              </Form.Group>

              <Form.Group className='mb-3' controlId='email'>
                <Form.Label className='fw-bold ms-2'>Email:</Form.Label>
                <Form.Control type='email' placeholder='Nhập email' required />
              </Form.Group>

              <Form.Group className='mb-3' controlId='message'>
                <Form.Label className='fw-bold ms-2'>Tin nhắn:</Form.Label>
                <Form.Control
                  as='textarea'
                  rows={4}
                  placeholder='Nhập nội dung'
                  required
                />
              </Form.Group>

              <Button variant='primary' type='submit' className='w-100 mt-auto'>
                Gửi tin nhắn
              </Button>
            </Form>
          </Card>
        </Col>

        <Col md={5} className='d-flex'>
          <Card className='p-4 shadow bg-light w-100 d-flex flex-column'>
            <h3 className='text-success fw-bold mb-4'>Thông tin liên hệ</h3>

            <div className='text-start mt-4'>
              <h5 className='mb-3'>
                <strong>TRỤ SỞ CHÍNH</strong>
              </h5>
              <p>
                <strong>📍 Địa chỉ:</strong> 123 Đường ABC, Quận 1, TP. Hồ Chí
                Minh
              </p>
              <p>
                <strong>📞 Điện thoại:</strong> 1900 1839
              </p>
              <p>
                <strong>✉️ Email:</strong> contact@travel.com
              </p>
            </div>
            <hr />
            <div className='text-start mt-2'>
              <h5 className='mb-3'>
                <strong>Công ty TNHH Travel TPHCM</strong>
              </h5>
              <p>
                <strong>📍 Địa chỉ:</strong> 123 Đường ABC, Quận 1, TP. Hồ Chí
                Minh
              </p>
              <p>
                <strong>📞 Điện thoại:</strong> 1900 1839
              </p>
              <p>
                <strong>✉️ Email:</strong> contact@travel.com
              </p>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
