// Rewrite this example code from the chapter Promises chaining using
// async/await instead of .then/catch:

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

/** A: loadJson rewritten with async/await.*/
async function loadJsonAsync(url) {
  let response = await fetch(url);
  if (response.status === 200) return response.json();
  throw new Error(response.status);
}

// Both expressions return Error: 404
loadJson('https://javascript.info/no-such-user.json').catch(console.log);
console.log();
loadJsonAsync('https://javascript.info/no-such-user.json').catch(console.log);
