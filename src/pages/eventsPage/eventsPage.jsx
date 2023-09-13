import React from 'react';
import './eventsPage.scss';
import cocktail from '../../assets/images/cocktail.jpg';

const EventsPage = () => {
  return (
    <div className="eventsPage pageWrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1 className="mb-5">Currently we don't have upcoming events!</h1>
          </div>
          <div className="col-md-6">
            <img src={cocktail} alt="img" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
