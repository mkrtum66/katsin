import React from 'react';
import './welcomePage.scss';
import Button from '../../components/button';
import wine from '../../assets/video/wineVd.mp4';

const WelcomePage = () => {
  return (
    <div className="welcomePage">
      <video className="smoke-video" autoPlay loop muted playsInline preload={'metadata'}>
        <source src={wine} type="video/mp4" />
      </video>
      <div className="container">
        <div className="row">
          <div className="col-md-5">
            <div className="content">
              <h1>Welcome to Katsin!</h1>
              <p>
                Step into a world of culinary excellence at Katsin. Nestled in the heart of
                Glendale, our restaurant offers a unique and unforgettable dining experience that
                combines exquisite flavors, impeccable service and a warm ambiance.
              </p>
              <p>
                Thank you for choosing Katsin. We look forward to serving you with passion and
                delight.
              </p>
              <Button>Book Now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
