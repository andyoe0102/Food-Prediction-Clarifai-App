var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
const Clarifai = require('clarifai');


const clarifaiApp = new Clarifai.App({apiKey:'1cf7e0331d5c4d878921f7b48bc2c6e9'});

// clarifaiApp.models.predict("bd367be194cf45149e75f01d59f77ba7",'https://images.all-free-download.com/images/graphiclarge/food_picture_04_hd_pictures_167555.jpg')
// .then(res =>{
//   var data = res.outputs[0].data.concepts;
//   var recipe = data.map(ingredient =>{
//     return ingredient.name
//   }).join(',')
//   console.log(recipe)
// }).catch(err =>{
//   console.log(err)
// })

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.get('/items', function (req, res) {
  // items.selectAll(function(err, data) {
  //   if(err) {
  //     res.sendStatus(500);
  //   } else {
  //     res.json(data);
  //   }
  // });
  res.send('dd')
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

