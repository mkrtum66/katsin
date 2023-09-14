import React, { useState } from 'react';
import './footer.scss';
import location from '../../assets/icons/location.png';
import phone from '../../assets/icons/call.png';
import calendar from '../../assets/icons/calendar.png';
import clock from '../../assets/icons/clock.png';
import mail from '../../assets/icons/email.png';
import logo from '../../assets/logo-big.png';
import www from '../../assets/icons/www.png';
import { Form } from 'react-bootstrap';
import Button from '../button';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = event => {
    event.preventDefault();
    setEmail('');
    setIsSubmitted(true);
    console.log(email);
  };

  const handleChange = e => {
    setEmail(e.target.value);
  };

  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-between align-items-end">
          <div className="col-md-3 mb-5 mb-md-0">
            <div className="col1">
              <div className="site-link">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
                  alt="img"
                />
              </div>
              <a
                href="https://www.google.com/maps/place/515+W+Broadway,+Glendale,+CA+91204/@34.1469975,-118.2658522,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2c059cd1794bf:0xa2e2eb7f04a67441!8m2!3d34.1469975!4d-118.2658522!16s%2Fg%2F11csksbsjl?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="location-link"
              >
                <div>
                  <img src={location} alt="img" />
                  <span>515 W Broadway Ave, Unit 111, Glendale, CA, 91204</span>
                </div>
              </a>
              <a href="tel:+18186393030" className="phone-link">
                <img src={phone} alt="img" />
                <span>+1 (818)-639-3030</span>
              </a>
              <div className="hours mb-3">
                <div className="mb-3">
                  <img src={calendar} alt="img" />
                  <p>Monday - Sunday</p>
                </div>
                <div>
                  <img src={clock} alt="img" />
                  <p>11:30AM - 0:00AM</p>
                </div>
              </div>
              <div className="email mb-3">
                <a href="mailto:info@katsinusa.com">
                  <img src={mail} alt="img" />
                  <p>info@katsinusa.com</p>
                </a>
              </div>
              <div className="website">
                <a href="https://katsin.netlify.app/">
                  <img src={www} alt="img" />
                  <p>www.katsinusa.com</p>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 mb-5 mb-md-0">
            <div className="logo-wrapper mb-4">
              <img src={logo} alt="logo" className="img-fluid" />
            </div>
            <p className="title">Newslatters:</p>
            {!isSubmitted ? (
              <Form className="newsLatterForm" onSubmit={event => handleSubmit(event)}>
                <Form.Group className="mb-3" controlId="newsletter">
                  <Form.Control
                    type="email"
                    placeholder="Email Address"
                    value={email}
                    onChange={e => handleChange(e)}
                  />
                </Form.Group>
                <Button onClick={event => handleSubmit(event)}>Subscribe</Button>
              </Form>
            ) : (
              <div className="thank-you">Thank you for subscription</div>
            )}
          </div>
          <div className="col-md-3">
            <div className="col1">
              <div className="site-link">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_Armenia_%28Soviet_colors%29.svg/800px-Flag_of_Armenia_%28Soviet_colors%29.svg.png?20200627191637"
                  alt="img"
                />
              </div>
              <a
                href="https://www.google.com/maps/place/Katsin+Restaurant/@40.179765,44.5099792,19.91z/data=!4m15!1m8!3m7!1s0x406abcfbf7f7bfa7:0x621287d0a9083be3!2s4,+6+Amiryan+St,+Yerevan+0001,+Armenia!3b1!8m2!3d40.1795514!4d44.5102382!16s%2Fg%2F11r63j0y84!3m5!1s0x406abde086cd6025:0xca014a370e8a581!8m2!3d40.1798355!4d44.5107282!16s%2Fg%2F11rmzkfx17?entry=ttu"
                target="_blank"
                rel="noreferrer"
                className="location-link"
              >
                <div>
                  <img src={location} alt="img" />
                  <span>4/6 Amiryan Str., Yerevan, Armenia</span>
                </div>
              </a>
              <a href="tel:+37477881001" className="phone-link">
                <img src={phone} alt="img" />
                <span>+374 77 881001</span>
              </a>
              <div className="hours">
                <div className="mb-3">
                  <img src={calendar} alt="img" />
                  <p>Monday - Sunday</p>
                </div>
                <div className="mb-3">
                  <img src={clock} alt="img" />
                  <p>11:00PM - 1:00AM</p>
                </div>
              </div>
              <div className="email mb-3">
                <a href="mailto:katsin@tiziano.am">
                  <img src={mail} alt="img" />
                  <p>katsin@tiziano.am</p>
                </a>
              </div>
              <div className="website">
                <a href="https://katsin-arm.netlify.app/">
                  <img src={www} alt="img" />
                  <p>www.katsin.am</p>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-5">
          <ul className="footer-links">
            <li>
              <NavLink to={'/jobs'}>Jobs</NavLink>
            </li>
            <span>|</span>
            <li>
              <NavLink to={'/privacy-policy'}>Privacy Policy</NavLink>
            </li>
            <span>|</span>
            <li>
              <NavLink to={'/terms-of-services'}>Terms of Services</NavLink>
            </li>
            <span>|</span>
            <li>
              <NavLink to={'/accessibility'}>Accessibility</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <p className="poweredBy mb-0">
        Powered by <a href="https://www.linkedin.com/in/mkrtum-abrahamyan/">M. A.</a>
      </p>
    </div>
  );
};

export default Footer;
