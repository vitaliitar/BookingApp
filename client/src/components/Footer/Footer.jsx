import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h6>About</h6>
              <p className="text-justify">
                A Booking is a private retailer or public service that provides travel and
                tourism-related services to the general public on behalf of accommodation or travel
                suppliers. Travel agencies can provide outdoor recreation activities, airlines, car
                rentals, cruise lines, hotels, railways, travel insurance, package tours, insurance,
                guide books, public transport timetables, car rentals, and bureau de change
                services. Travel agencies can also serve as general sales agents for airlines that
                do not have offices in a specific region. A travel agency's main function is to act
                as an agent, selling travel products and services on behalf of a supplier.
              </p>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Categories</h6>
              <ul className="footer-links">
                <li>
                  <Link to={'/'}>Something</Link>
                </li>
              </ul>
            </div>

            <div className="col-xs-6 col-md-3">
              <h6>Quick Links</h6>
              <ul className="footer-links">
                <li>
                  <Link to={'/'}>About us</Link>
                </li>
                <li>
                  <Link to={'/'}>Contact us</Link>
                </li>
                <li>
                  <Link to={'/'}>Privacy policy</Link>
                </li>
                <li>
                  <Link to={'/'}>FAQ</Link>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-sm-6 col-xs-12">
              <p className="copyright-text">
                Copyright &copy; 2020 All Rights Reserved by BookingApp
              </p>
            </div>

            <div className="col-md-4 col-sm-6 col-xs-12">
              <ul className="social-icons">
                <li>
                  <Link className="facebook" to={'/'}>
                    {' '}
                    <FontAwesomeIcon icon={faFacebook} />
                  </Link>
                </li>
                <li>
                  <Link className="twitter" to={'/'}>
                    {' '}
                    <FontAwesomeIcon icon={faTwitter} />
                  </Link>
                </li>
                <li>
                  <Link className="instagram" to={'/'}>
                    {' '}
                    <FontAwesomeIcon icon={faInstagram} />
                  </Link>
                </li>
                <li>
                  <Link className="linkedin" to={'/'}>
                    {' '}
                    <FontAwesomeIcon icon={faLinkedin} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
