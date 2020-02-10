// question 1
// convert the function to an arrow function

(a, b) => a - b;

// question 2
// call to the URL below, pass the JSON it returns to a function and inside that function loop through the results and log each game's name

fetch("https://api.rawg.io/api/games?genres=sports")
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        gamesName(json);
        })
    .catch(function(error) {
        console.dir(error);
    });

function gamesName(json) {
    const jsonResults = json.results;
    let html = "";
    for(let i = 0; i < jsonResults.length; i++) {
        console.log(jsonResults[i].name);
    }
    return html;
}
// question 3
// replace the word in the console

    var strReplace = "These cats are outrageous.";
    var resReplace = strReplace.replace("cats", "giraffes");
    console.log(resReplace);
    
// question 4








// question 5
// remove the button from its parent element

function deleteTheButton(details) {
    console.dir(details);
    const container = document.querySelector(".container");
    const button = document.querySelector(".btn");
    container.removeChild(button);
}

// question 6
// create an li element 

function createNewListItem() {
    const animalsList = document.querySelector("li");
    const parrots = document.createElement("li");
    parrots.innerText = "Parrots";
    parrots.className = "parrots";
    parrots.before("elephants");
    animalsList.appendChild(parrots);
}

// question 7

const theUrl = "https://api.rawg.io/api/";
const jsonUrl = `${theUrl}games/3801`;

fetch(jsonUrl)
    .then(function(response) {
        return response.json();
    })
    .then(function(json) {
        createDetails(json);
    })
    .catch(function(error) {
        console.dir(error);
    });
