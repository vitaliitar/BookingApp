import React from 'react';
import styles from './Stylesheet.module.scss';
import Dropdown from '../../components/Dropdown/Dropdown';
import Card from '../../components/Card/Card';
import Carousell from '../../components/Carousel/Carousel';

const Stylesheet = () => {
  return (
    <>
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
    </>
  );
};

export default Stylesheet;
