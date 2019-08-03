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

  app.get('/', (req, res) => res.sendFile(__dirname+'/Pages/index.html'));
  app.get('/index', (req, res) => res.sendFile(__dirname+'/Pages/index.html'));
  app.get('/OurTours', (req, res) => res.sendFile(__dirname+'/Pages/Our tours.html'));
  app.get('/aboutUS', (req, res) => res.sendFile(__dirname+'/Pages/About Us.html'));
  app.get('/aboutTT', (req, res) => res.sendFile(__dirname+'/Pages/About Trinidad.html'));
  app.get('/cuisine', (req, res) => res.sendFile(__dirname+'/Pages/Ourcuisine.html'));
  app.get('/music', (req, res) => res.sendFile(__dirname+'/Pages/ourmusic.html'));
  app.get('/tourists', (req, res) => res.sendFile(__dirname+'/Pages/touristsAttactions.html'));
  app.get('/bookings', (req, res) => res.sendFile(__dirname+'/Pages/bookings.html'));
  app.get('/bookings2', (req, res) => res.sendFile(__dirname+'/Pages/bookings2.html'));


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

  app.listen(PORT, () => { console.log(`Running on port ${ PORT }`) });
