// Put your checkEmotion and speak functions here! ✨
// See ./original.js for their older JavaScript code.

async function checkEmotion(knownEmotions, emotion) {
	let result = await new Promise((resolve) => {
		// Simulate database processing time by waiting a second...
		setTimeout(() => {
			resolve(knownEmotions.has(emotion));
		}, 1000);
	});
	return result;
}

async function speak(knownEmotions, newEmotion, phrase) {
	let hasEmotion = await checkEmotion(knownEmotions, newEmotion);
	if (hasEmotion) return `"${phrase}" (${newEmotion})`;
	throw new Error(`Does not compute. I do not understand ${newEmotion}.`);
}

module.exports.checkEmotion = checkEmotion;
module.exports.speak = speak;
