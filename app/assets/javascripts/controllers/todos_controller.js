Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      // Get the todo title set by the "New Todo" text field
      var title = this.get('newTitle');
      if (!title.trim()) { return; }

      var todo = {
        title: title,
        isCompleted: false
      };

      this.set('newTitle', '');

      Todos.Todos.push(todo);
    }
  }
});