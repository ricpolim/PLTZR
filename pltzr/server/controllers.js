const {
  getGeoIP, fetchTopHeadlines, fetchLocalNews, searchNews,
} = require('./api_controllers');

const getTopHeadlines = (req, res) => {
  const category = req.params.category ? req.params.category : '';

  getGeoIP()
    .then((response) => fetchTopHeadlines(response.data.country, category))
    .then((response) => {
      res.json(response.data.articles);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
};

const getLocalNews = (req, res) => {
  // const city = req.params.city;
  // const state = req.params.state;

  console.log(req.params);

  getGeoIP()
    .then((response) => {
      const city = req.query.city ? req.query.city : response.data.city;
      return fetchLocalNews(city);
    })
    .then((response) => {
      res.json(response.data.articles);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
};

const search = (req, res) => {
  const { query } = req.query;

  searchNews(query)
    .then((response) => {
      res.json(response.data.articles);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json(error);
    });
};

module.exports = {
  getTopHeadlines,
  getLocalNews,
  search,
};
