import React from 'react';
import { Modal, Button } from 'react-bootstrap';

function ArticleModal(props) {
  const { article, toggleArticleModal } = props;

  return (
    <Modal.Dialog>
      <Modal.Header closeButton>
        <Modal.Title>{article.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h2>{`Author: ${article.authors[0]}`}</h2>
        <img
          className="d-block w-75"
          src={article.top_image}
          alt=""
        />
        {article.text}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => { toggleArticleModal(); }}>Close</Button>
        <Button variant="primary">Save Article</Button>
      </Modal.Footer>
    </Modal.Dialog>
  );
}

export default ArticleModal;
