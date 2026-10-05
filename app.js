const express = require('express');
const path = require('path');

const indexRouter = require('./app_server/routes/index');
require('./app_api/models/db');
const apiRouter = require('./app_api/routes/index');

const app = express();

// Configure Handlebars (HBS)
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

// Serve the existing Module One static files
app.use(express.static(path.join(__dirname, 'public')));

// Register MVC routes
app.use('/', indexRouter);
app.use('/api', apiRouter);

// Keep the original home page working
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

module.exports = app;
