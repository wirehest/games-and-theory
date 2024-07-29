import Todo from './class-todo.js';

export default class Project {
  _todos = [];

  constructor(name) {
    this._name = name;
  }

  get todos() {
    return this._todos;
  }

  set todos(todosArray) {
    if ({}.toString.call(todosArray) === '[object Array]') {
      this._todos = todosArray;
    }
    return this._todos;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
    return this;
  }

  addTodo(title, description, priority, dueDate, tasks) {
    this._todos.push(new Todo(title, description, priority, dueDate, tasks));
    return this._todos;
  }

  removeTodo(todoIndex) {
    if (this._todos[todoIndex] === undefined) return;
    this._todos.splice(todoIndex, 1);
    return this._todos;
  }

  completeTodos() {
    // TODO completes todo and all child tasks
  }

  todoCounter() {
    let total = this._todos.length;
    let incomplete = this._todos.filter((todo) => todo.status === false).length;
    return `Todos: ${incomplete} Open, ${total} Total`;
  }
}
