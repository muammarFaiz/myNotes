const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const bcrypt = require('bcrypt');

const users = require('./model');
const { Passport } = require('passport');
const c = console.log

async function authenticateUser(email, password, done) {
  try {
    c('authenticateUser running... finding the user using the email');
    c(email);
    const user = await users.findOne({ email: email })
    if (user) {
      c('user found, comparing password hash');
      c(password);
      c(user.password);
      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        c('password true, authenticateUser done(null, user)');
        const exclude = ({ password, token, _id, ...cut }) => cut
        const public = { ...exclude(user._doc), id: user.id }
        c(public);
        done(null, public);
      } else {
        c('password false');
        done(null, false);
      }
    } else {
      c('user not found');
      done(null, false);
    }
  } catch (e) {
    c('something wrong in bcrypt or findOne');
    done(e);
  }
}
// IMPORTANT NOTES ABOUT done() AND passport.authenticate options successRedirect and failureRedirect:
// 1. the successRedirect and failureRedirect does not pass the req.authInfo to the target route, so the target
// route know nothing about the user fail or successful login
// 2. done() have a third parameter beside done(error, user) which is an extra data that usually used as extra info
// that is passed up to req.authInfo for the next() midlewares, only if the user is not redirected using
// the successRedirect and failureRedirect
passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));

passport.serializeUser((user, done) => {
  console.log(user);
  return done(null, user.id);
});
passport.deserializeUser(async (userid, done) => {
  return done(null, await users.findOne({ _id: userid }).select('-password -token'));
});
