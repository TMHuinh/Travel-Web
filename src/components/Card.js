import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Card.css';

const TourCard = ({ tour }) => {
  return (
    <Link to={`/tours/${tour.id}`} className='tour-card-link'>
      <Card className='tour-card'>
        <Card.Img
          variant='top'
          src={tour.img}
          alt={tour.name}
          className='tour-img'
        />
        <Card.Body>
          <Card.Title className='tour-title'>{tour.name}</Card.Title>
          <Card.Text className='tour-date'>
            📅 Ngày khởi hành: {tour.date}
          </Card.Text>
          <Card.Text className='tour-price'>
            💰Giá: {tour.price.toLocaleString()} VNĐ
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default TourCard;
