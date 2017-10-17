var express = require('express');
var mongoose = require('mongoose');
var Job = require('../models/jobs')
var router = express.Router();

router.get('/', function(req, res, next) {
	// console.log('in the jobs route')
	// var dev = new Job({
	// 	title: 'Junior Dev',
	// 	companyName: 'Google',
	// 	location: 'Kirkland',
	// })

	//CREATE
	// Job.create({
	// 	title: 'Junior Dev',
	// 	companyName: 'Google',
	// 	location: 'Kirkland'
	// }, function(err, job) {
	// 	if(err) return console.log(err);
	// 	res.send(job);
	// })

	Job.find({}, function(err, jobs) {
		// if(err) return console.log(err);
		res.send(jobs);
	})
})

module.exports = router;