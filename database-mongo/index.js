var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/food');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var foodSchema = mongoose.Schema({
  url:{
    type:String,
    unique:true
  },
  ingredients:String,
  name:String

});

var Food = mongoose.model('Food', foodSchema);

let save =(food,callback)=>{
  Food.create(food,callback);
}

let find = (callback) =>{
  Food.find().sort({name:1}).exec(callback);
}

module.exports.save = save;
module.exports.find = find;