import React, { useEffect, useState } from 'react';
import './homePage.scss';
import video from '../../assets/video/video.mp4';
import Slider from '../../components/slider';
import { cuisineSlider, venueSlider } from '../../components/slider/mock';
import { scrollToSection } from '../../utils/scrollToSection';

import cocktail from '../../assets/images/cocktail.jpg';
import { useNavigate } from 'react-router';
import Loader from '../../components/loader';

const HomePage = ({ sideRef }) => {
  const [isLoaded, setIsLoaded] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(false);
    }, 2000);
  }, []);

  useEffect(() => {
    scrollToSection(sideRef);
  }, [sideRef]);

  const bookNow = () => {
    window.open(
      'https://restaurant.opentable.com/v2/',
      '_blank', // <- This is what makes it open in a new window.
    );
  };

  return (
    <div className="homePageWrapper">
      {isLoaded ? (
        <Loader />
      ) : (
        <div className="homePage">
          <video className="video-background" autoPlay muted loop playsInline preload={'metadata'}>
            <source src={video} type="video/mp4" />
          </video>
          <section className="section1">
            <h3 className="animate-charcter">Katsin</h3>
            <div className="button" onClick={() => bookNow()}>
              Book NoW
            </div>
          </section>
        </div>
      )}
      <section className="section2">
        <div className="container">
          <Slider
            title={'Cuisine'}
            data={cuisineSlider}
            buttonValue="menu"
            onClick={() => navigate('/food-menu')}
          />
        </div>
      </section>
      <div className="img-section">
        <div className="container">
          <div className="gradient-image">
            <div className="bg"></div>
            <img src={cocktail} alt="img" className="img-fluid img-gradient" />
          </div>
        </div>
      </div>
      <section id="venue" className="sectionVanue">
        <div className="container">
          <Slider
            title={'Venue'}
            data={venueSlider}
            buttonValue="Book a Table"
            onClick={() => bookNow()}
          />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
