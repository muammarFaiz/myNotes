// jshint esversion: 9

const express = require('express');
const cors = require('cors');
const multer = require('multer');
const app = express();
const session = require('express-session');
require('./passportStrategy')

app.use(cors());

// to avoid transfer limitation use {limit: infinity} on urlencoded and json
app.use(express.urlencoded({extended: true, limit: Infinity}));
app.use(express.json({limit: Infinity}));
app.use(express.static(__dirname + '/images'));

// session
app.use(session({
  secret: process.env.EXPESS_SESSION_SECRET || 'susybaka',
  resave: false,
  saveUninitialized: false
}))
app.use(passport.initialize())
app.use(passport.session())


const storageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './images');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-savedmulter-" + file.originalname);
  }
});
const upload = multer({storage: storageEngine});

// restful api: get, post, put, patch, delete.

app.route('/').get((req, res) => {
  res.send('something');
})
.post(upload.single('image'), (req, res) => {
  // accesss the image through req.file
  res.send('something');
});

app.listen(process.env.PORT || 3000, () => console.log('server running 3000'));
