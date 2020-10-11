import React from 'react';
import Carousell from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";
import {Link} from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const Main = () => {
	return (
		<div>
			<Carousell/>
			<br/>
			<div className="container">
				<div className="row">
					<Card
						imagePath={'assets/images/img_1.jpg'}
						city={'Bologna'}
						destination={'Emilia-Roma Region, Italy'}
						description={
							'It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people.'
						}
					/>
					<Card
						imagePath={'assets/images/img_1.jpg'}
						city={'Bologna'}
						destination={'Emilia-Roma Region, Italy'}
						description={
							'It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people.'
						}
					/>
					<Card
						imagePath={'assets/images/img_1.jpg'}
						city={'Bologna'}
						destination={'Emilia-Roma Region, Italy'}
						description={
							'It is the seventh most populous city in Italy, at the heart of a metropolitan area of about one million people.'
						}
					/>
				</div>
			</div>

			<div className="site-section border-top">
				<div className="container">
					<div className="row text-center">
						<div className="col-md-12">
							<h2 className="mb-5 mt-5 titleFeedback">Want To Travel With Us?</h2>
							<p className="mb-0"><Link to={'/'} className="btn bookBtn py-3 px-5 text-white">Book Now</Link>
							</p>
						</div>
					</div>
				</div>
			</div>
			<br/>
			<Footer/>
		</div>
	);
};

export default Main;