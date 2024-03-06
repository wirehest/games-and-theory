'use strict';

function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

let askArrow = (question, yes, no) => confirm(question) ? yes() : no();

askArrow("Do you agree?",
  () => { alert("You agreed."); },
  () => { alert("You canceled the execution."); }
);

