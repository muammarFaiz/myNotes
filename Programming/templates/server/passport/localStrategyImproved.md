```js
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const userModel = require('./userModel')
const bcrypt = require('bcrypt')

const c = console.log;

passport.use(new LocalStrategy({ usernameField: 'email' }, async (email, password, done) => {
  c('authentication running...')
  let user;
  try {
    user = await userModel.findOne({ email: email })
  } catch (error) {
    c('error in findOne')
    c(error)
    done(error, false)
  }
  if (!user) {
    c('user not found')
    done(null, { _id: 'no user' }, { failInfo: 'user not found' })
  } else {
    const b = await bcrypt.compare(password, user.hashed_password)
    if (b) {
      c('user found and password correct')
      done(null, user)
    } else {
      c('user found and password incorrect')
      done(null, user, { failInfo: 'wrong password' })
    }
  }
}))
// in this strategy, i do not make any failure, so the passport.authenticate always do next() but i add the
// third parameter which will be passed up to req.authInfo so i can identfy wheter the user fail logging in or
// not in the next middleware after passport.authenticate do next() so i can do something about it.
passport.serializeUser((user, done) => done(null, user._id))
passport.deserializeUser(async (id, done) => {
  const user = await userModel.findById(id)
  done(null, user)
})

// example of the authenticate route using this strategy:
router.post('/login', passport.authenticate('local'), (req, res, next) => {
  if (req.authInfo.failInfo) {
    res.send(req.authInfo.failInfo)
  } else {
    next()
  }
}, signJWT)
```