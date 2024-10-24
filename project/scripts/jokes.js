const jokeOutput = document.querySelector('#joke-output');
const slider = document.querySelector('#joke-count-input');
const displayNumberTxt = document.querySelector('#joke-count-number');
const displayButton = document.querySelector('#display-jokes');

const url = 'https://dad-jokes-by-api-ninjas.p.rapidapi.com/v1/dadjokes';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'eb31923ca2msh50ee8cc2f732479p139236jsn76acd6736d79',
		'x-rapidapi-host': 'dad-jokes-by-api-ninjas.p.rapidapi.com'
	}
};

async function getJoke() {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result[0].joke);
        return result[0].joke;
} catch (error) {
    console.error(error);
}

}

jokeList = [];

async function getJokes(count) {
    console.log(count);
    for (let index = 0; index < count; index++) {
        newJoke = await getJoke();
        jokeList[index] = newJoke;
        // console.log(jokeList);
        // console.log(newJoke);
    }
    jokeOutput.innerHTML = '';
    jokeList.forEach(joke => {
        let newP = document.createElement('div');
        newP.classList.add('card');
        newP.textContent = joke;
        jokeOutput.appendChild(newP);
    });
}

// Updates slider value
displayNumberTxt.textContent = slider.value;
slider.oninput = function() {
    displayNumberTxt.textContent = this.value;
}

displayButton.addEventListener('click', () => {
    getJokes(parseInt(slider.value));
})

getJokes(parseInt(slider.value));
