import React from 'react';
import { Card } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div>
            <Card className="bg-dark text-black">
  <Card.Img className="img-fluid" src="https://wallpaperaccess.com/full/1547020.jpg" alt="Card image" />
  <div >
  <Card.ImgOverlay className='mt-4'>
      <br />
    <Card.Title className="fs-1">LOVE PARIS </Card.Title>
    <Card.Title className="fs-1">ARCH DE TRIOMPHE </Card.Title>
    <Card.Text>
      Discover hidden wonders on trips curated
    </Card.Text>
    <Card.Text>
    by Citytours Tours Experts
    </Card.Text>
    
    <button className="bg-danger rounded fw-bold">Read more</button>
  </Card.ImgOverlay>
  </div>
</Card>
            </div>
        </div>
    );
};

export default Banner;