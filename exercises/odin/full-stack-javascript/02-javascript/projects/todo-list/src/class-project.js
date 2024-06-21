import Task from './class-task.js';

// TODO complete entire Todo

export default class Project {
  _todos = [];

  get todos() {
    return this._todos;
  }

  addTodo(title, description, priority, dueDate) {
    this._todos.push(new Task(title, description, priority, dueDate));
    return this._todos;
  }

  updateTodo() {
    // TODO update method that calls relevant setter in Task
  }

  completeTodo() {}

  removeTodo(todoIndex) {
    if (_todos[todoIndex] === undefined) return;
    _todos.splice(todoIndex, 1);
    return this._todos;
  }
}
