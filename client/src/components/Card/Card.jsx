import React from 'react';
import './Card.scss';
import { Link } from 'react-router-dom';

const Card = ({ imagePath, city, destination, description }) => {
  return (
      <div className="col-12 col-sm-8 col-md-6 col-lg-4">
        <div className="card">
          <img className="card-img-top" src={imagePath} alt="Bologna" />
          <div className="card-body">
            <h4 className="card-title">{city}</h4>
            <h6 className="card-subtitle mb-2 text-muted">{destination}</h6>
            <p className="card-text">{description}</p>
            <br />
            <Link to={'/'} className="card-link">
              Read More
            </Link>
            <Link to={'/'} className="card-link">
              Book a Trip
            </Link>
          </div>
        </div>
      </div>
  );
};

export default Card;
