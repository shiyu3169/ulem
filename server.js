const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const app = express();

//HTTPS redirect middleware
function ensureSecure(req, res, next) {
  //Heroku stores the origin protocol in a header variable. The app itself is isolated within the dyno and all request objects have an HTTP protocol.
  if (req.get('X-Forwarded-Proto') == 'https' || req.hostname == 'localhost') {
    // Don't do anything if the req is comming from https or localhost
    next();
  } else if (
    req.get('X-Forwarded-Proto') != 'https' &&
    req.get('X-Forwarded-Port') != '443'
  ) {
    //Redirect if not HTTP with original request URL
    res.redirect('https://' + req.hostname + req.url);
  }
}

app.use('/', ensureSecure);

const cookieParser = require('cookie-parser');
const session = require('cookie-session');
const passport = require('passport');

app.use(cookieParser());

if (process.env.SESSION_SECRET) {
  app.use(
    session({
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: true
    })
  );
} else {
  app.use(
    session({
      secret: 'test',
      resave: true,
      saveUninitialized: true
    })
  );
}

app.use(passport.initialize());
app.use(passport.session());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Point static path to dist -- For building -- REMOVE
app.use(express.static(path.join(__dirname, 'build')));

// CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

const port = process.env.PORT || '3100';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

require('./server/app')(app);

// For Build: Catch all other routes and return the index file -- BUILDING
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
  });
}

// server.listen(port);
server.listen(port, function() {
  console.log('Running on ' + app.get('port'));
});
