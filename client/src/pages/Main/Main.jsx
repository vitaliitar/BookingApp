import React from 'react';
import Carousell from "../../components/Carousel/Carousel";
import Card from "../../components/Card/Card";

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
		</div>
	);
};

export default Main;