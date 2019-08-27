import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './routes';

const docsPath = path.resolve(__dirname, '../docs')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Documentação
 * url: http://localhost:3000/
 */
app.use(express.static(docsPath));

app.use('/', routes);

export default app;