import Task from './class-todo.js';

export default class Project {
  _todos = [];

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  get todos() {
    return this._todos;
  }

  addTodo(title, description, priority, dueDate, tasks) {
    this._todos.push(new Task(title, description, priority, dueDate, tasks));
    return this._todos;
  }

  completeTodos() {
    // TODO completes todo and all child tasks
  }

  removeTodo(todoIndex) {
    if (this._todos[todoIndex] === undefined) return;
    this._todos.splice(todoIndex, 1);
    return this._todos;
  }

  todoCounter() {
    // let completeTodos =
    // return ''
  }
}
