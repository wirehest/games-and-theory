// TODO set task status (e.g., complete)
// TODO set dueDate default to next day;
// TODO max length checking for title
// TODO max length checking for description

export default class Todo {
  constructor(title, description, priority, dueDate) {
    this._title = title;
    this._description = description;
    this._priority = priority;
    this._dueDate = dueDate;
  }
  // _title = 'new todo';
  // _description = 'description';
  // _priority = 'low';
  // _dueDate;
  _tasks = [];
  _createdTimestamp = Date.now();

  set title(todoTitle) {
    this._title = todoTitle;
  }

  get title() {
    return this._title;
  }

  set description(todoDescription) {
    this._description = todoDescription;
  }

  get description() {
    return this._description;
  }

  set tasks(value) {
    console.log('Setting tasks directly not allowed');
  }

  get tasks() {
    return this._tasks;
  }

  set priority(todoPriority) {
    this._priority = todoPriority;
  }

  get priority() {
    return this._priority;
  }

  set dueDate(todoDue) {
    this._dueDate = todoDue;
  }

  get dueDate() {
    return this._dueDate;
  }

  set createdTimestamp(value) {
    console.log('Setting creation timestamp directly not allowed');
  }

  get createdTimestamp() {
    return this._createdTimestamp;
  }

  // methods
  addTask(taskText, isCheckbox = false) {
    this._tasks.push({ taskText, isCheckbox });
    return this._tasks;
  }

  removeTask(taskIndex) {
    if (this._tasks[taskIndex] === undefined) return;
    this._tasks.splice(taskIndex, 1);
    return this._tasks;
  }
}
