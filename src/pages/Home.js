import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import TourCard from '../components/Card';

const Home = () => {
  const tours = [
    {
      id: '1',
      name: 'Thái Lan ',
      img: 'https://media.travel.com.vn/LastMinute/lm__2503032_mbk-shopping-mall.webp',
      price: 5000000,
      date: '20/10/2025',
    },
    {
      id: '2',
      name: 'Hạ Long ',
      img: 'https://media.travel.com.vn/LastMinute/lm__25030410_shutterstock.webp',
      price: 3500000,
      date: '20/6/2025',
    },
    {
      id: '3',
      name: 'Đà Nẵng',
      img: 'https://media.travel.com.vn/LastMinute/lm__2503044_ba-na-hill-4.webp',
      price: 2500000,
      date: '10/7/2025',
    },
    {
      id: '4',
      name: 'Hàn Quốc ',
      img: 'https://media.travel.com.vn/LastMinute/lm__2503042_h1.webp',
      price: 7000000,
      date: '28/11/2025',
    },
  ];
  return (
    <div>
      <div className='w-100'>
        <img
          src='https://media.travel.com.vn/SlideShow/sl_250303_hoaxuanthegioiftopbannerfbtop-banner-web-1915-460-031.webp'
          alt=''
          className='w-100'
        />
      </div>
      <Container className='my-4'>
        <Row className='text-start'>
          <h3>KHÁM PHÁ SẢN PHẨM VIETTRAVEL</h3>
          <strong className='d-block w-75'>
            Hãy tận hưởng trải nghiệm du lịch chuyên nghiệp, mang lại cho bạn
            những khoảnh khắc tuyệt vời và nâng tầm cuộc sống. Chúng tôi cam kết
            mang đến những chuyến đi đáng nhớ, giúp bạn khám phá thế giới theo
            cách hoàn hảo nhất.
          </strong>
        </Row>
        <Row className='my-4'>
          <Col>
            <img
              src='https://media.travel.com.vn/Advertisings/bn_250123_hoa-anh-dao.webp'
              alt=''
              width={400}
            />
          </Col>
          <Col>
            <img
              src='https://media.travel.com.vn/Advertisings/bn_240925_KPSP3-tham-than-my.jpg'
              alt=''
              width={400}
            />
          </Col>
          <Col>
            <img
              src='https://media.travel.com.vn/Advertisings/bn_250217_kpsp4-tour-le-2-9.webp'
              alt=''
              width={400}
            />
          </Col>
        </Row>
        <br />
        <hr />
      </Container>

      <Container className='my-4'>
        <Row>
          {' '}
          <h3>ĐỊA ĐIỂM YÊU THÍCH</h3>
          <strong>
            Hãy chọn một điểm đến du lịch nổi tiếng dưới đây để khám phá các
            chuyến đi độc quyền của chúng tôi với mức giá vô cùng hợp lý.
          </strong>
        </Row>
        <Row className='text-start my-4'>
          <Col xl={4}>
            <img
              src='https://media.travel.com.vn/destination/dg_240606_dc_180119_aicap.jpg'
              alt=''
              width={400}
            />
          </Col>
          <Col xl={4}>
            <img
              src='https://media.travel.com.vn/destination/dg_240729_PHU%20QUOC%20(18).jpg'
              alt=''
              width={400}
            />
          </Col>
          <Col xl={4}>
            <img
              src='https://media.travel.com.vn/destination/dg_240726_Indochine%20Premium%20r.jpg'
              alt=''
              width={400}
              height={230}
            />
          </Col>
        </Row>
        <br />
        <hr />
      </Container>
      <Container className='my-4'>
        <Row>
          <h3>COMBO GIÁ TỐT</h3>
        </Row>
        <Row className='my-4'>
          {tours.map((item, index) => (
            <Col xl={3} key={index}>
              <TourCard tour={item} />
            </Col>
          ))}
        </Row>
      </Container>
      <hr />
    </div>
  );
};

export default Home;
