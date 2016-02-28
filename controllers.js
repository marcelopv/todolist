var angular = require('angular');
var todolistApp = angular.module('todolistApp', []);

todolistApp.controller('TodoListCtrl', function($scope){
  $scope.addItem = function(){
    console.log("oi");
  };
});
