import { format } from 'date-fns';
// TODO set task status (e.g., complete)
// TODO max length checking for title
// TODO max length checking for description

export default class Todo {
  _createdTimestamp = Date.now();

  constructor(
    title,
    description,
    priority,
    tasks = [],
    dueDate = defaultDuedate,
  ) {
    this._title = title;
    this._description = description;
    this._priority = priority;
    this._tasks = tasks;
    this._dueDate = dueDate;
  }

  set title(todoTitle) {
    this._title = todoTitle;
    return this;
  }

  get title() {
    return this._title;
  }

  set description(todoDescription) {
    this._description = todoDescription;
    return this;
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
    const validPriorities = ['high', 'medium', 'low'];
    if (validPriorities.includes(todoPriority)) this._priority = todoPriority;
    else this._priority = 'low';
    return this;
  }

  get priority() {
    return this._priority;
  }

  set dueDate(todoDue) {
    this._dueDate = todoDue;
    return this;
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
  addTask(taskText, isCheckbox = false, isDone = false) {
    this._tasks.push({ taskText, isCheckbox, isDone });
    return this._tasks;
  }

  removeTask(taskIndex) {
    if (this._tasks[taskIndex] === undefined) return;
    this._tasks.splice(taskIndex, 1);
    return this._tasks;
  }
}

let defaultDuedate = (() => {
  let d = new Date();
  d.setDate(d.getDate() + 1);
  return format(d, 'yyyy-MM-dd');
})();
