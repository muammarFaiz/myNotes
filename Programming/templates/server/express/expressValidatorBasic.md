```js
const router = require('express').Router()
const { body, validationResult } = require('express-validator')
// the body is the middleware that validate the data, the validationResult is the function that
// return the error information
const userModel = require('../user/userModel')

const c = console.log

router.post('/post',
  [
    body('poste').isAlpha().withMessage('can only contain letters'),
    body('poste').contains('cock').withMessage('post must contain cock'),
    body('tangan').not().isEmpty()
    // the not() reverse the value of the next method, returning the opposit true to false, false to true
  ],
  (req, res) => {
  c(req.body)
  const errors = validationResult(req)
  if(!errors.isEmpty()) {
    return res.status(400).json({errors: errors.array()})
  }
  return res.send('ok wewe')
})

module.exports = router
```