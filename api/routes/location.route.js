var express = require("express");
var route = express.Router();
var locationController = require('../controllers/location.controller');

route.get('/', locationController.getLocations);

route.post('/create', locationController.createLocations);

route.delete('/delete', locationController.deleteLocations);

module.exports = route;