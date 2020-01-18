import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

function one(req, res, next) {
	req.hello = 'world';
	next();
  }
  
  function two(req, res, next) {
	req.foo = '...needs better demo 😔';
	next();
  }

express() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.get('/users/:id', (req, res) => {
		console.log(`~> Hello, ${req.hello}`);
		res.end(`User: ${req.params.id}`);
	  })
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
