export default class Task {
  _title = 'new task';
  _description = 'description';
  _notes = [];
  _priority = 'low';
  _dueDate; // TODO set default to next day;
  _createdTimestamp = Date.now();

  set title(taskName) {
    // TODO max length checking for title
    this._title = taskName;
  }

  get title() {
    return this._title;
  }

  set description(taskDescription) {
    // TODO max length checking for description
    this._description = taskDescription;
  }

  get description() {
    return this._description;
  }

  set notes(taskNote) {
    console.log('Setting notes directly not allowed');
    // this._notes = taskNotes;
  }

  get notes() {
    return this._notes;
  }

  set priority(taskPriority) {
    this._priority = taskPriority;
  }

  get priority() {
    return this._priority;
  }

  set dueDate(taskDue) {
    this._dueDate = taskDue;
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
  addNote(noteText, isChecklist = false) {
    this._notes.push({ noteText, isCheckList });
  }

  removeNote(noteIndex) {
    if (this._notes[noteIndex] === undefined) return;
    this._notes.splice(noteIndex, 1);
  }
}
