const express = require('express');
const mongoose = require('mongoose');
const bodyParser  = require('body-parser');
const PORT = 4000;

const app = express();

  mongoose.connect('mongodb+srv://raeann:rayraythomas18@cluster0-gyykb.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true}).then( () => console.log('DB Connected..')).catch(err => console.log(err));
  db = mongoose.connection;

  app.use(bodyParser.urlencoded());
  app.use(bodyParser.json());
  app.use('/', express.static(__dirname + '/Pages'));
  app.use('/images', express.static(__dirname + '/images'));


  app.post('/api/bookings', (req,res)=>{
    console.log(req.body);

    //Database code here
    db.collection('DB').insertOne({
      First_name: req.body.fname,
      Last_name: req.body.lname,
      email:req.body.email,
      destination:req.body.destination,
      time:req.body.time,
      number:req.body.number,
      airport:req.body.airport,
      cruiseship:req.body.cruiseship,
      tours:req.body.tours,
    })



    res.send({redirect:'./bookings2'});
  })

  app.listen(PORT, () => { });
