// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./controllers/burgerController');

const PORT = process.env.PORT || 6614;
const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

// Templates
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Start the server and begin listening for client requests.
app.listen(PORT, function () {
    // Server log to indicate the server has started
  console.log(`Server listening on: http://localhost:${PORT}`);
});