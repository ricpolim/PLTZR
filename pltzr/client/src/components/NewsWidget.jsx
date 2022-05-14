import React from 'react';
import { Card } from 'react-bootstrap';

function NewsWidget(props) {
  const { feed, handleReadArticle, category } = props;

  const topArticle = feed[0];

  return (
    <Card className="scrollable-widget">
      <Card.Header><h3>{category}</h3></Card.Header>
      <Card.Body onClick={() => { handleReadArticle(topArticle.url); }}>
        <div className="card mb-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img src={topArticle.urlToImage} className="img-fluid rounded-start" alt="" />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{topArticle.title}</h5>
                <p className="card-text">{topArticle.description}</p>
                <p className="card-text"><small className="text-muted">{topArticle.source.name}</small></p>
              </div>
            </div>
          </div>
        </div>
        {feed.slice(1, 3).map((article) => (
          <Card>
            <Card.Body onClick={() => { handleReadArticle(article.url); }}>
              <Card.Title>{article.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{`Source: ${article.source.name}`}</Card.Subtitle>
              <Card.Text>{article.description}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </Card.Body>
    </Card>
  );
}

export default NewsWidget;
