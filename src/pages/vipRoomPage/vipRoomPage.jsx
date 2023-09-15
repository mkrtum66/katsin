import React from 'react';
import './vipRoomPage.scss';
import { vipRoomSlider } from '../../components/slider/mock';
import Slider from '../../components/slider';
import Button from '../../components/button';

const VipRoomPage = () => {
  return (
    <div className="vipRoomPage">
      <div className="container">
        <div className="info">
          <h3 className="d-flex align-items-center">
            <p className="m-0">VIP Room Reservation</p>
            <Button variant={'outline'} onClick={() => window.open('tel:+18186393030', '_self')}>
              Call Now
            </Button>
          </h3>
          <p className="mb-2">
            At Katsin, we believe in providing an exceptional dining experience that goes above and
            beyond. Our VIP Room is an exclusive haven designed to cater to your every culinary
            desire, ensuring your visit is nothing short of extraordinary.
          </p>
          <p className="mb-0">
            Step into a world of elegance and refinement, where every detail has been meticulously
            crafted to create an atmosphere of sophistication and comfort. Whether you're
            celebrating a special occasion, hosting a private gathering, or simply seeking a
            secluded space to savor our exquisite cuisine, our VIP Room is the perfect choice.
          </p>
        </div>
        <Slider
          title={'VIP ROOM'}
          data={vipRoomSlider}
          buttonValue="Call"
          onClick={() => window.open('tel:+18186393030', '_self')}
        />
      </div>
    </div>
  );
};

export default VipRoomPage;
