var $ = require('jquery');
window.$ = $;
window.jQuery = $;
require('bootstrap');
require('bootstrap/dist/css/bootstrap.min.css');
var angular = require('angular');
var todolistApp = angular.module('todolistApp', ['todolistControllers']);

require('./controllers.js');
