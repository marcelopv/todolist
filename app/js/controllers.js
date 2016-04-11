var todolistControllers = angular.module('todolistControllers', []);

todolistControllers.controller('TodoListCtrl', function(){

  var todoList = this;

  todoList.todos = [
      {text:'learn angular', done:false},
      {text:'learn webpack', done:false}
  ];

  todoList.addTodo = function(){
    todoList.todos.push({text:todoList.todoText, done:false});
    todoList.todoText = '';
  };

});

todolistControllers.controller('IndexController', function(){

  var index = this;

  index.mensagem = 'ola';
  
});
