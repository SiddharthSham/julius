import sirv from 'sirv';
import express from 'express';
import compression from 'compression';
import * as sapper from '@sapper/server';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

express() // You can also use Express
	.use(
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.get('/users/:id', (req, res) => {
		console.log('Endpoint hit!')
		res.end(`User: ${req.params.id}`);
	  })
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
