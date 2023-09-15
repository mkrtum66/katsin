import React, { useEffect, useState } from 'react';
import './welcomePage.scss';
import Button from '../../components/button';
import wine from '../../assets/video/wineVd.mp4';
import Loader from '../../components/loader';

const WelcomePage = () => {
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
  }, []);

  return (
    <div className="welcomePage">
      {isLoaded ? (
        <Loader />
      ) : (
        <>
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
                    Glendale, our restaurant offers a unique and unforgettable dining experience
                    that combines exquisite flavors, impeccable service and a warm ambiance.
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
        </>
      )}
    </div>
  );
};

export default WelcomePage;
