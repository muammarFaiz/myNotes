const { default: mongoose } = require("mongoose");

const secretSchema = new mongoose.Schema({
  creatorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true
  },
  content: {
    type: String,
    minlength: 1,
    maxlength: 400
  },
  date_created: {
    type: String,
    default: () => {
      const d = new Date();
      return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
    }
  },
  number: Number
})

const counterCollection = mongoose.model('counter', new mongoose.Schema({ number: Number }), 'counter')
secretSchema.pre('save', async function () {
  if (!this.number) {
    let counterDoc = await counterCollection.findOne()
    if (!counterDoc) {
      counterDoc = new counterCollection({ number: 1 })
      console.log(response);
    } else {
      counterDoc.number++
    }
    this.number = counterDoc.number
    const response = await counterDoc.save()
    console.log(response);
  }
})

const secretModel = mongoose.model('secret', secretSchema, 'secrets')
module.exports = secretModel