// jshint esversion: 9

// IMPORTANT
  // findOneAndX and findByIdAndX functions support limited validation. also update, updateOne, updateMany!
// You can enable validation by setting the runValidators option. {runValidators: true}
// HEAVILY RECOMMENDED to set your own static method! (not sure about this)

const mongoose = require('mongoose');

const password = process.env.PASSWORD;
// IMPORTANT: the connection string you get from atlas does not include the database parameter, they are assuming
// you are using mongodb native driver instead of mongoose
const connAtlas = 'mongodb://faiz1:' + password + '@cluster0-shard-00-00.bd5hs.mongodb.net:27017,cluster0-shard-00-01.' +
'bd5hs.mongodb.net:27017,cluster0-shard-00-02.bd5hs.mongodb.net:27017/cluster0?ssl=true&' +
'replicaSet=atlas-10erh7-shard-0&authSource=admin&retryWrites=true&w=majority';
const connLocal = 'mongodb://mainuser:123@localhost:27017/mongoosedb?authSource=admin';
const local = 'mongodb://localhost:27017/eduwork-1';
console.log(connAtlas);

mongoose.connect(connAtlas);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error test atlas: '));
db.once('open', () => {console.log('connection mongoose success...');});

// config.js doesn't need to export anything just require like this in the index.js for it to be connected:
// require('./config/mongoose.js');

// model.js
// const mongoose = require('mongoose');

const modelSchema = new mongoose.Schema({
  id: Number,
  name: String,
  price: {
    type: Number,
    min: [10, 'price too low, got {VALUE}'],
    max: 999,
    required: true
  },
  stock: Number,
  date: {type: Date, default: Date.now},
  equipment: {
    type: String,
    required: true,
    enum: {
      values: ['kitchen knife', 'rope', 'fire starter'],
      // those are the accepted values, if the equipment isnt one of those then validation will reject
      message: '{VALUE} is not supported'
      // the {VALUE} will be replaced in error message as the rejected value that the user input
    }
  },
  action: function() {
    return this.price > 200;
  }, // a field can contain a function that usually return a string or boolean
  armorTypes: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'armor',
    // the mongoose schema types ObjectId and the ref: armor is required to make a document relationship,
    // and the armor string is taken from the model name of armor collection
    validate: [armorTypesValidation, 'the armor type is not supported, or the array length is too short or long']
    // armorTypesValidation can be a data type or a function that return boolean wether the value is accepted or not
  },
  createdDate: {
    type: Date,
    immutable: true,
    // if immutable set true then you cannot modify it
    default: () => Date.now()
  }
});
function armorTypesValidation(val) {
  return val.length >= 2;
}
// for more information about schema data types visit:
// https://mongoosejs.com/docs/schematypes.html#schematype-options
// built in mongoose validation:
// https://mongoosejs.com/docs/validation.html#built-in-validators

// HEAVILY RECOMMENDED to use your own custom methods for actions such like find one and update to make sure
// the validators is running:
// you can define your own custom static methods:
modelSchema.statics.myCustomFindAndUpdate = async function(filter, payload) {
  const result = await this.findOne(filter);
  const tosave = {...result, ...payload};
  tosave.save();
};
// and you can use it just like the regular mongoose method:
// try {
//   const result = await NgooseMod.myCustomFind({name: /rudi/i});
//   res.json(result);
// } catch(e) {
//   hehe
// }

modelSchema.methods.dosomething = function() {
  console.log('hehe, hello ' + this.name + '!');
};
// now your document instance can do something for whatever meaningless shit you trying to do, example:
// const faiz = await db.find({name: 'faiz'});
// faiz.dosomething();
// the console will log: hehe, hello faiz!

modelSchema.pre('save', function(next) {
  this.name = this.name.toLowerCase();
  next();
});
// the callback will run when the document is about to be saved to the database and the `this` is a
// document that about to be saved

modelSchema.post('save', function(doc, next) {
  doc.dosomething();
  next();
});
// just like the pre midleware post midleware will run after the document is saved, and send the saved document
// as the first parameter to the callback right before next

const MongooseModel = mongoose.model('tugas', modelSchema);

module.exports = MongooseModel;

// application
// create
// try {
//   const result = await NgooseMod.create({
//     id: Date.now(), name: name, price: price, action: status, stock: stock
//   });
//   console.log('insert many success...');
//   res.send(result);
// } catch(e) {
//   console.log(e);
//   res.send(e);
// }

// find all
// mongoose doesn't return a cursor so no map needed
// try {
//   const result = await NgooseMod.find()
//   .populate('doc1 doc2 doc3', 'name age weight')
// the populate is used to get the relationship documents
//   .skip(0)
//   .limit(5);
// skip and limit is used for mongoose pagination
//   console.log('get all success...');
//   res.send(result);
// } catch(e) {
//   console.log(e);
//   res.send(e);
// }

// findById
// try {
//   const result = await NgooseMod.findById(tosearch);
//   console.log('success find mongoose...');
//   res.send(result);
// } catch(e) {
//   console.log(e);
//   res.send(e);
// }

// findOne
// try {
//   const result = await NgooseMod.findOne({name: 'pret'});
//   console.log('get all success...');
//   res.send(result);
// } catch(e) {
//   console.log(e);
//   res.send(e);
// }

// updateOne
// const filter = {_id: req.query.filter};
// const update = {
//   name: req.query.name,
//   price: req.query.price,
//   stock: req.query.stock,
//   action: req.query.status
// };
// try {
//   console.log(req.query);
//   const result = await NgooseMod.updateOne(filter, update);
//   console.log('update success mongoose...');
//   res.send(result);
// } catch(e) {
//   console.log(e);
//   res.send(e);
// }

// findOneAndReplace
// const filter = {_id: req.query.filter};
// const update = req.body;
// try {
//   const result = await NgooseMod.findOneAndReplace(filter, update);
//   console.log(result);
// } catch(e) {
//   console.log(e);
// }

// findByIdAndDelete
// try {
//   const result = await NgooseMod.findByIdAndDelete(id);
//   console.log('success mongoose...');
//   res.send(result);
// } catch(e) {
//   console.log(e);
//   res.send(e);
// }

// deleteOne
// try {
//   const result = await NgooseMod.deleteOne({name: 'pret'});
//   console.log('success mongoose...');
//   res.send(result);
// } catch(e) {
//   console.log(e);
//   res.send(e);
// }
