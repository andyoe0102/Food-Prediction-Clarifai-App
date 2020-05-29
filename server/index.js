var express = require('express');
var bodyParser = require('body-parser');
var items = require('../database-mongo');
const Clarifai = require('clarifai');
const apikey = require('config').get('apikey')
const clarifaiApp = new Clarifai.App({apiKey:apikey});
let {save,find} = require('../database-mongo')


var app = express();

console.log(apikey)

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.post('/food', function (req, res) {
  var {name, url} = req.body

  clarifaiApp.models.predict("bd367be194cf45149e75f01d59f77ba7",url)
    .then(obj =>{
      var data = obj.outputs[0].data.concepts;
      var ingredients = data.map(ingredient =>{
        return ingredient.name
        }).join(',')
      var food = {
        name:name,
        url: url,
        ingredients: ingredients
      };

      save(food,(err,response)=>{
        if(err){
          console.log('error saving data')
        }else{
          res.status(200).send(food)
        }
      })

    }).catch(err =>{
      console.log(err)
    })
});

app.get('/food',(req,res) =>{
  console.log('get');
  find((err,foods) =>{
    if(err){
      console.log(err);
    }else{
      res.send(foods);
    }
  })
})

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

