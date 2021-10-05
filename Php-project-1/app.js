import dotenv from 'dotenv/config';
import express from 'express';
import routes from './api/routes/index';
import './api/data/db';

//config({ path: '.env' });

const app = express();

console.log('HMMM', process.env.DB_NAME);
const PORT = process.env.PORT || 8000;

app.set('port', PORT);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/api', routes);

app.get('/', (req, res) => {
  res.redirect('/api/frameworks');
});

const server = app.listen(app.get('port'), (err) => {
  if (err) throw err;
  console.log(`Server runnning on port ${server.address().port}`);
});
