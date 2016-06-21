var $ = require('jquery');
window.$ = $;
window.jQuery = $;
require('bootstrap/dist/css/bootstrap.min.css');
require('angular');
require('./app.js')
require('angular-route');
require('./routes.js');
require('./controllers/todolist-ctrl.js');
require('./controllers/home-ctrl.js');
