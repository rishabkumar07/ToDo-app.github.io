// this is the route folder
const express = require('express');
const router = express.Router();
// to acquire from the controller
const homeController = require('../controllers/home_controller');

//to know whether our router is loaded or not
console.log('Router Loaded');

//route for home
router.get('/',homeController.home);

//route for delete
router.get('/delete',homeController.delete);

//route for create
router.post('/create-todo',homeController.create);

module.exports = router;

//issue kha h