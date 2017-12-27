const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config =require('./config/database');
mongoose.Promise=global.Promise;
mongoose.connect (config.uri , (err) =>{
if (err){
	console.log('Could Not connect to database',err);

} else {
	
	console.log('connected to database'+config.db);
	}});
app.get('*',(req, res) => {
  res.send('<h1> hello !!</h1>');
});

app.listen(3004 , () =>{
	console.log('Listening on port 3004');
});