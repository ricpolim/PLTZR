require('dotenv').config();
const axios = require('axios');

const getGeoIP = () => axios.get('https://ipapi.co/json/');

const fetchTopHeadlines = (country, category) => axios.get(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${process.env.NEWS_API_KEY}`);

const fetchLocalNews = (city) => axios.get(`https://newsapi.org/v2/everything?q=${city}&language=en&apiKey=${process.env.NEWS_API_KEY}`);

const searchNews = (query) => axios.get(`https://newsapi.org/v2/everything?q=${query}&apiKey=${process.env.NEWS_API_KEY}`);

module.exports = {
  getGeoIP,
  fetchTopHeadlines,
  fetchLocalNews,
  searchNews,
};
