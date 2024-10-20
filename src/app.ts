import express from 'express';

import sequelize from './models';
import routes from './routes';

const app = express();
app.use(express.json());

app.use('/api', routes);

// Test DB connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

export default app;
