// fetch request
const hymnsData = fetch('data/hymns.json')
	.then(response => response.json());

export default await hymnsData;