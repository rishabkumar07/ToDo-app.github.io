const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

//database
const db = require('./config/mongoose');
const Todo = require('./models/todo');

//parser to convert form data into json object placed inside body in request
app.use(express.urlencoded());

//to set up our view engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

//to use our css and js file
app.use(express.static('assets'));

//use of express router
app.use('/',require('./routes'));




app.listen(port,function(err){
    if(err){

        console.log(`Error in running the Server:${err}`);
    }
    console.log(`Yup!My Express Server is running on port:${port}`);
});