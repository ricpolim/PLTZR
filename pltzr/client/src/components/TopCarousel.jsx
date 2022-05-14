import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

function TopCarousel(props) {
  const { feed, handleReadArticle } = props;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {
        feed.map((article) => (
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100"
              src={article.urlToImage}
              alt=""
            />
            <Carousel.Caption onClick={() => { handleReadArticle(article.url); }}>
              <h3 className="bg-secondary bg-opacity-50">{article.title}</h3>
              <p className="bg-secondary bg-opacity-50">{article.description}</p>
              <p className="bg-secondary bg-opacity-50">{`Source: ${article.source.name}`}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default TopCarousel;
