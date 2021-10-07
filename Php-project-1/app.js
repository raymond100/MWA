import dotenv from 'dotenv/config';
import express from 'express';
import routes from './api/routes/index';
import path from 'path';
import './api/data/db';

//config({ path: '.env' });

const app = express();

const PORT = process.env.PORT || 8000;

app.set('port', PORT);

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

app.get('/', (req, res) => {
  res.redirect('/api/frameworks');
});

const server = app.listen(app.get('port'), (err) => {
  if (err) throw err;
  console.log(`Server runnning on port ${server.address().port}`);
});
