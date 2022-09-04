 const express = require('express');
 const bodyParser = require('body-parser');
 const mongoose = require('mongoose');
 const cors = require('cors');
const dentistesRoutes=require('./routes/dentistes.js')
const utilisateursRoutes = require('./routes/utilisateur.js')
const rendezvousRoutes = require('./routes/rendezvous.js');
const agencevoyageRoutes = require('./routes/agencevoyage.js');
const agencetransportRoutes = require('./routes/agencetransport.js');

 const app = express();



 app.use(bodyParser.json({limit:"30mb",extended:true}));
 app.use(bodyParser.urlencoded({limit:"30mb" , extended:true}));
 app.use(cors());

  //routes 
  app.use('/dentistes',dentistesRoutes);
  app.use('/register',utilisateursRoutes);
  app.use('/rendezvous',rendezvousRoutes);
  app.use('/agencevoyage',agencevoyageRoutes);
  app.use('/agencetransport',agencetransportRoutes);



  
 const CONNECTION_URL = 'mongodb+srv://flytee:flytee321@cluster0.415q7cw.mongodb.net/flytee'
 
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL , {useNewUrlParser:true , useUnifiedTopology:true})
   .then(()=> app.listen(PORT , () => console.log(`server running on port: ${PORT}`)))
   .catch((error)=>console.log(error.message));
