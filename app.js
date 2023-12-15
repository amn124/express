// app.js

const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Serve static files (CSS, images, etc.) from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to allow access at all times
const allowAccess = (req, res, next) => {
  // Continue to the next middleware or route handler
  next();
};

// Apply the middleware to all routes
app.use(allowAccess);

// Define routes
app.get('/', (req, res) => {
  res.render('home'); // Renders views/home.ejs
});

app.get('/about', (req, res) => {
  res.render('about'); // Renders views/about.ejs
});

app.get('/services', (req, res) => {
  res.render('services'); // Renders views/services.ejs
});

app.get('/contact', (req, res) => {
  res.render('contact'); // Renders views/contact.ejs
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

