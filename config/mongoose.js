//require the library
const mongoose = require('mongoose');

//connecting to contact_list_db
mongoose.connect('mongodb://localhost/todo_proj_db');

//to verify whether the mongoose is connected or not(acquire the connection)
const db = mongoose.connection;

//for error
db.on('error',console.error.bind(console,'error connecting to db'));

//if the connection is successful

db.once('open',function()
{
    console.log("Successfully connected to the database");
});

module.exports = db;