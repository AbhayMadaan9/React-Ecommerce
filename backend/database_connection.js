// getting-started.js
const mongoose = require('mongoose');

async function main() {
  try {
    await mongoose.connect('mongodb://localhost:27017/Eccomerce');
    console.log("Database connected")
  } catch (err) {
    console.log(err)
  }
}
module.exports = main()