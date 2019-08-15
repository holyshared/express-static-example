import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import IndexPage from './components/pages/index';

const app = express();

app.use(express.static('public', {
  maxAge: process.env.ASSETS_MAX_AGE || 1 * 60 * 60 * 1000
}));

app.get('/', (_req, res, _next) => {
  ReactDOMServer.renderToNodeStream((<IndexPage />)).pipe(res);
});

app.listen(process.env.PORT || 3000);
