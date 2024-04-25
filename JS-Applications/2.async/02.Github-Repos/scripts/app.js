async function logFetch(url) {
	const username = document.getElementById('username').value;
	const url = `https://api.github.com/users/${username}/repos`;
	try {
		const response = await fetch(url);
		console.log(await response.text());
	} catch (err) {
		console.log(`Error: ${err}`);
	}
}