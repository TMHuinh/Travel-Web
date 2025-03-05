import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';

const tours = [
  {
    id: '1',
    name: 'Thái Lan',
    img: 'https://media.travel.com.vn/LastMinute/lm__2503032_mbk-shopping-mall.webp',
    price: 5000000,
    date: '20/10/2025',
    description:
      'Trải nghiệm chuyến du lịch tuyệt vời tại Thái Lan với các điểm đến nổi tiếng như Bangkok, Phuket, Chiang Mai.',
  },
  {
    id: '2',
    name: 'Hạ Long',
    img: 'https://media.travel.com.vn/LastMinute/lm__25030410_shutterstock.webp',
    price: 3500000,
    date: '20/6/2025',
    description:
      'Chinh phục vịnh Hạ Long với cảnh sắc thiên nhiên hùng vĩ và trải nghiệm du thuyền sang trọng.',
  },
  {
    id: '3',
    name: 'Đà Nẵng',
    img: 'https://media.travel.com.vn/LastMinute/lm__2503044_ba-na-hill-4.webp',
    price: 2500000,
    date: '10/7/2025',
    description:
      'Khám phá thành phố biển Đà Nẵng với các bãi biển đẹp, Bà Nà Hills và các món ăn đặc sản.',
  },
  {
    id: '4',
    name: 'Hàn Quốc',
    img: 'https://media.travel.com.vn/LastMinute/lm__2503042_h1.webp',
    price: 7000000,
    date: '28/11/2025',
    description:
      'Trải nghiệm văn hóa, ẩm thực và cảnh đẹp Hàn Quốc với hành trình Seoul - Busan - Jeju.',
  },
];

const TourDetail = () => {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === id);

  if (!tour) {
    return (
      <h2 className='text-center mt-5 text-danger'>
        Không tìm thấy chuyến du lịch
      </h2>
    );
  }

  return (
    <Container className='my-3'>
      <h1 className='text-primary fw-bold text-center mb-5'>
        Du lịch {tour.name}
      </h1>
      <Card className='shadow-lg border-0 rounded overflow-hidden'>
        <Row className='g-0'>
          <Col md={6} className='d-flex align-items-center'>
            <img
              src={tour.img}
              alt={tour.name}
              className='w-100 object-fit-cover rounded-start'
              style={{
                height: '500px',
              }}
            />
          </Col>

          <Col
            md={6}
            className='p-5 d-flex flex-column align-items-center text-center'
          >
            <h2 className='text-success fw-bold'>{tour.name}</h2>
            <br />
            <div className='w-100 text-start mt-3'>
              <p className='mb-2'>
                <strong>📅 Ngày khởi hành:</strong> {tour.date}
              </p>
              <p className='mb-2'>
                <strong>💰 Giá:</strong> {tour.price.toLocaleString()} VNĐ
              </p>
              <p className='mb-2'>
                <strong>📜 Thông tin: </strong> {tour.description}
              </p>
            </div>
            <br />
            <br />
            <div className='d-flex gap-3 mt-5'>
              <Button variant='success' size='lg' className='shadow' href='/'>
                Quay lại
              </Button>
              <Button variant='danger' size='lg' className='shadow'>
                Đặt ngay
              </Button>
            </div>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default TourDetail;
