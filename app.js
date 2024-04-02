// app.js
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.use(express.static('carrenthtml'));
app.use(express.urlencoded({ extended: true }));


// Serve Angular static files
app.use(express.static(path.join(__dirname, 'about/src')));
app.use(express.static(path.join(__dirname, 'about/assets/')));

// Define your API routes
app.get('/api/data', (req, res) => {
   // Handle API requests here
});

// Serve other routes or handle errors
app.get('/about', (req, res) => {
   res.sendFile(path.join(__dirname, 'about/src/app/app.component.html'));
});



// Routes
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

  app.get('/service', (req, res) => {
    res.sendFile(__dirname + '/carrenthtml/pages/service.html');
  });

  app.get('/team', (req, res) => {
    res.sendFile(__dirname + '/public/pages/team.html');
  });

  app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/pages/contact.html');
  });

  app.get('/service-1', (req, res) => {
    res.sendFile(__dirname + '/carrenthtml/pages/login_registration/daily.html');
  });

  app.get('/service-2', (req, res) => {
    res.sendFile(__dirname + '/carrenthtml/pages/login_registration/outstation_form.html');
  });

  app.get('/service-3', (req, res) => {
    res.sendFile(__dirname + '/carrenthtml/pages/login_registration/rental_form.html');
  });

  app.get('/signup', (req, res) => {
    res.sendFile(__dirname + '/carrenthtml/pages/signup.html');
  });

  app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/carrenthtml/pages/login_registration/login.html');
  });

  app.get('/forgot', (req, res) => {
    res.sendFile(__dirname + '/carrenthtml/pages/login_registration/forgot_password/forgot_password.html');
  });
  

app.post('/rent', (req, res) => {
    const { carType, rentalDays } = req.body;
    // Process rental request
    // For now, just sending a response
    res.send(`Successfully rented ${carType} for ${rentalDays} days!`);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
