import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const About = () => {
  return (
    <Container className='my-4'>
      <Row className='text-center mb-4'>
        <h1 className='text-primary fw-bold'>ABOUT</h1>
        <p className='text-muted fs-5 px-5'>
          Chúng tôi tự hào là công ty du lịch hàng đầu, với sứ mệnh mang lại
          những hành trình tuyệt vời, khó quên và đầy ý nghĩa cho khách hàng.
          Với đội ngũ chuyên nghiệp, tận tâm và giàu kinh nghiệm, chúng tôi cam
          kết tạo nên những trải nghiệm vượt xa mong đợi.
        </p>
      </Row>

      <Row className='text-start'>
        <Col md={12}>
          <Card className='p-4'>
            <Card.Body>
              <h4 className='text-dark fw-bold'>Sứ mệnh của chúng tôi</h4>
              <p>
                Với sứ mệnh là đồng hành cùng khách hàng trên những hành trình
                đặc biệt, chúng tôi cam kết cung cấp các tour du lịch chất lượng
                cao, được thiết kế riêng để giúp khách hàng khám phá thế giới
                theo cách hoàn hảo nhất. Mỗi chuyến đi không chỉ là hành trình
                trải nghiệm mà còn là cơ hội để khách hàng tận hưởng vẻ đẹp của
                thiên nhiên, văn hóa và con người ở khắp mọi nơi trên thế giới.
              </p>
              <h4 className='text-dark fw-bold mt-4'>
                Tại sao chọn chúng tôi?
              </h4>
              <ul>
                <li>Dịch vụ chuyên nghiệp và tận tâm.</li>
                <li>Đội ngũ hướng dẫn viên giàu kinh nghiệm.</li>
                <li>Chi phí hợp lý, không phát sinh chi phí ẩn.</li>
                <li>Hỗ trợ khách hàng 24/7.</li>
              </ul>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
