//since we don't have a database we'll use our front end models at the moment
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');

var express = require('express');
var filmRoute = express.Router();


    filmRoute.get('/', function (req, res) {
        res.json(films)
    })
    //show
    filmRoute.get('/:id', function(req, res){
        res.json(films[req.params.id])
    })
    //Update film
    filmRoute.put('/:id', function(req, res){
        films[req.params.id] = req.body;
        res.json(films)
    })
    //create
    filmRoute.post('/', function(req, res){
        films.push(req.body);
        res.json(films)
    })
    //create a new review
    filmRoute.post('/:id/review', function(req, res){
        films[req.params.id].push(req.body)
        res.json(films)
    })
    //delete
    filmRoute.delete('/:id', function(req, res){
        films.splice(req.params.id, 1)
        res.json(films)
    })

    module.exports = filmRoute;

