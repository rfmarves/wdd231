const recipesOutput = document.querySelector("#recipe-container");
const displayButton = document.querySelector("#find-recipes");
const loader = document.querySelector('#loader');
const recipeDetails = document.querySelector('#recipe-details-modal');
const recipeQty = document.querySelector("#list-size").value;
const searchTerms = document.querySelector("#list-search").value;

// console.log(recipeQty);
// console.log(searchTerms);


// API configuration segment
const url = (recipeQty,searchTerms) => {
    if(searchTerms.length > 0) {
        return `'https://tasty.p.rapidapi.com/recipes/list?from=0&size=${recipeQty}&tags=under_30_minutes&q=${searchTerms}'`;
    } else {
        return `https://tasty.p.rapidapi.com/recipes/list?from=0&size=${recipeQty}&tags=under_30_minutes`;
    }
}
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "eb31923ca2msh50ee8cc2f732479p139236jsn76acd6736d79",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

// Fetch function to pull API data
async function fetchRecipes(recipeQty,searchTerms) {
  try {
    const response = await fetch(url(recipeQty,searchTerms), options);
    const result = await response.json();
    // console.log(result.results);
    return result.results;
  } catch (error) {
    console.error(error);
  }
}

// Modal creation fuction
const displayRecipeDetails = (recipe) => {
    recipeDetails.innerHTML = '';
    recipeDetails.innerHTML = `
            <div class="modal-title-row">
                <h2>${recipe.name}</h2>
                <button id="close-button" class="modal-close-button">❌</button>
            </div>
            <video alt="Video showing preparation of ${recipe.name}" src="${recipe.original_video_url}" controls></video>
            `;
    recipeDetails.showModal();
    const closeButton = document.querySelector('#close-button');
    closeButton.addEventListener('click', () => {
        recipeDetails.close();
        recipeDetails.innerHTML = '';
    });
}

// Create and load elements into page
async function displayRecipes(recipeQty,searchTerms) {
    loader.showModal();
    let recipesArray = await fetchRecipes(recipeQty,searchTerms);
    recipesOutput.innerHTML = '';
    recipesArray.forEach(recipe => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('card-clickable');
        newDiv.innerHTML = `
        <h2>${recipe.name}</h2>
        <div class='image-container'><img alt="${recipe.thumbnail_alt_text}" src="${recipe.thumbnail_url}?resize=300:*&output-format=jpg&output-quality=auto" loading="lazy"></div>
        <p>Preparation time: ${recipe.total_time_minutes} minutes</p>`;
        newDiv.addEventListener('click', () => {
            displayRecipeDetails(recipe);
        });
        recipesOutput.appendChild(newDiv);
    });
    loader.close();
}

// getRecipes();

// General event Listeners
displayButton.addEventListener('click', () => {
    displayRecipes(recipeQty, searchTerms);
});