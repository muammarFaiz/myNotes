// jshint esversion: 9
const {MongoClient} = require('mongodb');

const url = 'mongodb://mainuser:123@localhost:27017?authSource=admin';
const client = new MongoClient(url, {
  useUnifiedTopology: true
});

async function test() {
  try {
    await client.connect();
    console.log('connected to mongodb');
  } catch(err) {
    console.log(err);
  }
}
test();

const db = client.db('eduwork-1');
const dbcol = db.collection('myCollection');

module.exports = dbcol;

// application

// insertOne
// try {
//   const result = await dbcol.insertOne({name: name, price: price, stock: stock, status: status});
//   console.log('success:');
//   res.send(result);
// } catch(err) {console.log(err);}

// find
// try {
//   const mdbCursor = await dbcol.find({name: tosearch});
//   console.log('success...');
//   let found = {found: []};
// the list is needed because dbcol.find return a cursor not exactly the data we want
//   await mdbCursor.forEach((val) => {
//     found.found.push(val);
//   });
//   res.send(found);
// } catch(err) {console.log(err);}

// updateOne
// try {
//   const result = await dbcol.updateOne(filter, update);
//   console.log('update request success');
//   res.send(result);
// } catch(e) {
//   console.log(e);
//   res.send(e);
// }

// deleteOne
// try {
//   const result = await dbcol.deleteOne({name: name});
//   console.log('success del request...');
//   res.send(result);
// } catch(e) {console.log(e);}
