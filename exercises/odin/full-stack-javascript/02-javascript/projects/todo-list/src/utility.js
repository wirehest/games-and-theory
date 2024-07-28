let header = document.querySelector('header');
let content = document.querySelector('#content');

export let currentView;

export function setCurrentView(viewName) {
  if (['single-project', 'all-projects'].includes(viewName)) {
    currentView = viewName;
  } else {
    throw new Error('invalid view name');
  }
}

export function clearContent() {
  while (header.firstChild) header.removeChild(header.firstChild);
  while (content.firstChild) content.removeChild(content.firstChild);
}
