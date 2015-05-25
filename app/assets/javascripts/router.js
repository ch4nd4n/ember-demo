Todos.Router.map(function() {
  this.resource('todos', { path: '/' });
  this.resource('about', { path: '/about' });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return Todos.Todos;
  }
});