/*
switch (browser) {
  case 'Edge':
    alert( "You've got the Edge!" );
    break;

  case 'Chrome':
  case 'Firefox':
  case 'Safari':
  case 'Opera':
    alert( 'Okay we support these browsers too' );
    break;

  default:
    alert( 'We hope that this page looks ok!' );
}
*/

function switchAsIf(browser) {
  if (browser === 'Edge') {
    console.log("You've got the Edge!");
  } else if (['Chrome', 'Firefox', 'Safari', 'Opera'].includes(browser)) {
    console.log("Okay we support these browsers too");
  } else {
    console.log("We hope that this page looks ok!");
  }
}

for (browser of ['Edge', 
  'Chrome',
  'Firefox',
  'Safari',
  'Opera',
  'Vivaldi']) {
    console.log(`browser: ${browser}`);
    console.log(switchAsIf(browser));
}