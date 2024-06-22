import Task from './class-task.js';

export default class Project {
  _todos = [];

  get todos() {
    return this._todos;
  }

  addTodo(title, description, priority, tasks, dueDate) {
    this._todos.push(new Task(title, description, priority, tasks, dueDate));
    return this._todos;
  }

  completeTodo() {
    // TODO completes todo and all child tasks
  }

  removeTodo(todoIndex) {
    if (_todos[todoIndex] === undefined) return;
    _todos.splice(todoIndex, 1);
    return this._todos;
  }
}
