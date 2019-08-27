import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import routes from './routes';

const docsPath = path.resolve(__dirname, '../docs')
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(docsPath));
// app.get('/docs', (req, res) => {
//   res.sendFile(docsPath + '/index.html');
// })

app.use('/', routes);

export default app;