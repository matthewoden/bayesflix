'use strict';
var express = require('express');
var controller = require('./movies.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/new-releases', controller.newReleases);
router.get('/search', controller.search);


module.exports = router;