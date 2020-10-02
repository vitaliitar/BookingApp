import React from 'react';
import './Card.module.scss'

const Card = () => {
	return (
		<div>
			<div className="center">
				<div className="property-card">
					<a href="#">
						<div className="property-image">
							<div className="property-image-title">
							</div>
						</div>
					</a>
					<div className="property-description">
						<h5> Card Title </h5>
						<p>Lorem Ipsum Dipsum hortata. Mixcall Horcho. Mixwell Chingo. More Bingo. Lorem Ipum doth be hard.</p>
					</div>
					<a href="#">
						<div className="property-social-icons">
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Card;