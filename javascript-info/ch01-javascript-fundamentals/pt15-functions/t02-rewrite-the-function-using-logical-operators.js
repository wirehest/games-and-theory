/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
*/

function checkAgeType1(age) {
  return age > 18 ? true : "Did your parents allow you?";
}

function checkAgeType2(age) {
  return age > 18 || "Did your parents allow you?";
}

for (age of [15, 19]) {
  console.log(`age: ${age}, checkAgeType1 result: ${checkAgeType1(age)}`);
  console.log(`age: ${age}, checkAgeType2 result: ${checkAgeType2(age)}`);
}