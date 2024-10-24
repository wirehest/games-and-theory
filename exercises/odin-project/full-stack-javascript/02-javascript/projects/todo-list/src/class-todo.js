import { format } from 'date-fns';

export default class Todo {
  _createdTimestamp = Date.now();
  _complete = false;
  _extrasVisible = false;

  constructor(
    title,
    description,
    priority,
    dueDate = defaultDuedate,
    tasks = [],
  ) {
    this._title = title;
    this._description = description;
    this._priority = priority;
    this._dueDate = dueDate;
    this._tasks = tasks;
  }

  get title() {
    return this._title;
  }

  set title(todoTitle) {
    this._title = todoTitle;
    return this;
  }

  get isComplete() {
    return this._complete;
  }

  set isComplete(value) {
    console.log('Setting isComplete directly not allowed');
  }

  get extrasVisible() {
    return this._extrasVisible;
  }

  set extrasVisible(value) {
    console.log('Setting extrasVisible directly not allowed');
  }

  get description() {
    return this._description;
  }

  set description(todoDescription) {
    this._description = todoDescription;
    return this;
  }

  get tasks() {
    return this._tasks;
  }

  set tasks(value) {
    console.log('Setting tasks directly not allowed');
  }

  get priority() {
    return this._priority;
  }

  set priority(todoPriority) {
    const validPriorities = ['high', 'medium', 'low'];
    if (validPriorities.includes(todoPriority)) this._priority = todoPriority;
    else this._priority = 'low';
    return this;
  }

  get dueDate() {
    return this._dueDate;
  }

  set dueDate(todoDue) {
    this._dueDate = todoDue;
    return this;
  }

  get createdTimestamp() {
    return this._createdTimestamp;
  }

  set createdTimestamp(value) {
    console.log('Setting creation timestamp directly not allowed');
  }

  // methods
  toggleStatus() {
    this._complete = !this._complete;
    return this;
  }

  toggleCollapsible() {
    this._extrasVisible = !this._extrasVisible;
    return this;
  }

  addTask(taskText, isCheckbox = false, isDone = false) {
    this._tasks.push({ taskText, isCheckbox, isDone });
    return this;
  }

  removeTask(taskIndex) {
    if (this._tasks[taskIndex] === undefined) return;
    this._tasks.splice(taskIndex, 1);
    return this;
  }
}

let defaultDuedate = (() => {
  let d = new Date();
  d.setDate(d.getDate() + 1);
  return format(d, 'yyyy-MM-dd');
})();
