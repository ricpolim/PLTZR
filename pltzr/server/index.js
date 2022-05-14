require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const path = require('path');
const axios = require('axios');
const { getTopHeadlines, getLocalNews, search } = require('./controllers');

const app = express();

app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(cors());

app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/news', getTopHeadlines);
app.get('/news/category/:category', getTopHeadlines);
app.get('/news/local', getLocalNews);
app.get('/news/search', search);

app.get('/test', (req, res) => {
  // console.log(req.socket.remoteAddress);
  // console.log(req.ip);
  // console.log(req.socket.localAddress);
  // res.json([req.socket.remoteAddress, req.ip, req.socket.localAddress]);

  axios.get('https://ipapi.co/json/')
    .then((response) => {
      console.log(response);
      res.json(response.data);
    });
});

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
