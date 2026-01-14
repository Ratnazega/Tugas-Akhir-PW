require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const { sequelize } = require('./models');

const app = express();

/* Middleware */
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

/* View engine */
app.set('view engine', 'ejs');

/* Default redirect */
app.get('/', (req, res) => res.redirect('/login'));

/* Routes */
app.use('/', require('./routes/authRoutes'));
app.use('/', require('./routes/itemRoutes')); // nanti kita buat

/* Start server */
sequelize.sync().then(() => {
  console.log('Server running di http://localhost:3000/login');
  app.listen(3000);
});
