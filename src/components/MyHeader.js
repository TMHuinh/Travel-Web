import { Container } from 'react-bootstrap';

function Header() {
  return (
    <div className='bg-info-subtle'>
      <Container className='text-start'>
        <i className='fa-solid fa-phone'></i>
        <span className='text-danger'> 1900 1839</span>
        <span className='mx-1'>- Từ 8:00 - 23:00 hằng ngày</span>
      </Container>
    </div>
  );
}

export default Header;
