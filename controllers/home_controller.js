//export so that it is publically available to my routes


const db = require('../config/mongoose');
const Todo = require('../models/todo');

//action for route/
module.exports.home = function(req,res){

    Todo.find({},function(err,todolist)
    {
        if(err){
            console.log("Error in fetching contacts from db");
            return;
        }
        return res.render("home",{
            title:"To Do App",
            todo : todolist
        });
    });
};

// action for route /create-todo
module.exports.create = function(req,res)
{
    Todo.create({
        description:req.body.description,
        date:req.body.date,
        category:req.body.category
    },
    function(err,newTask){
        
    if(err){
        console.log("error in creating a new todo!",err);
        return;
    }
    console.log("******",newTask);
    return res.redirect('/');
    });
}

// action for /delete DELETEION OF MULTIPLE TODOS AT A TIME IS POSSIBLE
module.exports.delete = function(req,res)
{
    console.log("delete controlerr");
    console.log(req.query);
    let id=req.query;
    for(key of Object.keys(id))
    {
        console.log(key);
        Todo.findByIdAndDelete(key,function(err,item)
        {
            if(err)
            {
                console.log("error in deleting",err);
                return;
            }
        })
    }
    return res.redirect("/");


   // return res.redirect('back');
}



