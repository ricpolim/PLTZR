import React from 'react';
import { Container, Card, Row, Col, InputGroup, Button, FormControl } from 'react-bootstrap';
import { testFeedData } from '../test_data/testFeedData.js';
import { testArticleData } from '../test_data/testArticleData.js';
import { testLocalFeed } from '../test_data/testLocalFeed.js';
import { testSportsFeedData } from '../test_data/testSportsFeedData.js';
import { testBusinessFeedData } from '../test_data/testBusinessFeedData.js';
import { testTechFeedData } from '../test_data/testTechFeedData.js';
import { testEntFeedData } from '../test_data/testEntFeedData.js';
import TopCarousel from './TopCarousel.jsx';
import NewsWidget from './NewsWidget.jsx';
import ArticleModal from './ArticleModal.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showArticleModal:false
    };

    this.handleReadArticle = this.handleReadArticle.bind(this);
    this.toggleArticleModal = this.toggleArticleModal.bind(this);
  }

  handleReadArticle(url) {
    this.toggleArticleModal();
  }

  toggleArticleModal() {
    const { showArticleModal } = this.state;
    this.setState({
      showArticleModal:!showArticleModal,
    });
  }

  renderNotModal() {
    return (
      <Container fluid="md">
        <Container fluid="md">
          <Row>
            <Col>
              <Card>
                <Card.Body>
                  <Card.Title>72 Degrees Sunny</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">May 5, 2022</Card.Subtitle>
                  <Card.Text>
                    San Francisco, CA
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} lg={7}>
              <Card>
                <Card.Body className="text-center">
                  <Card.Title><h1 className="display-1">P-L-T-Z-R</h1></Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Fake News doesn't exist in this dojo!</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card>
                <Card.Body>
                  <InputGroup className="mb-3">
                    <Button variant="outline-secondary" id="button-addon1">
                      Search
                    </Button>
                    <FormControl
                      aria-label="Example text with button addon"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
        <br></br>
        <Container>
          <Card>
            <Card.Header><h3>Featured Stories</h3></Card.Header>
            <Card.Body>
              <TopCarousel feed={testFeedData.articles.slice(0,5)} handleReadArticle={this.handleReadArticle}/>
            </Card.Body>
          </Card>
        </Container>
        <Container>
          <Card>
            <Card.Header><h3>Trending Locally</h3></Card.Header>
            <Card.Body>
              <TopCarousel feed={testLocalFeed.articles.slice(0,5)} handleReadArticle={this.handleReadArticle}/>
            </Card.Body>
          </Card>
        </Container>
        <Container>
          <Row>
            <Col>
              <NewsWidget feed={testBusinessFeedData.articles.slice(0,10)} handleReadArticle={this.handleReadArticle} category="Business"/>
            </Col>
            <Col>
              <NewsWidget feed={testSportsFeedData.articles.slice(0,10)} handleReadArticle={this.handleReadArticle} category="Sports"/>
            </Col>
          </Row>
          <Row>
            <Col>
              <NewsWidget feed={testTechFeedData.articles.slice(0,10)} handleReadArticle={this.handleReadArticle} category="Technology"/>
            </Col>
            <Col>
              <NewsWidget feed={testEntFeedData.articles.slice(0,10)} handleReadArticle={this.handleReadArticle} category="Entertainment"/>
            </Col>
          </Row>
        </Container>
      </Container>
    );
  }

  render() {
    const { showArticleModal } = this.state;

    return (
      <Container fluid="md">
          {showArticleModal ? '' : this.renderNotModal() }
        <Container>
          {showArticleModal ? <ArticleModal article={testArticleData.article} toggleArticleModal={this.toggleArticleModal} /> : ''}
        </Container>
      </Container>
    );
  }
}

export default App;
