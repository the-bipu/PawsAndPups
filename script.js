// JavaScript for showing cats pictures

const url = "https://api.thecatapi.com/v1/images/search";

const section = document.querySelector('.container');
const button = document.querySelector('.btn');

button.addEventListener('click', getRandomCats);

randomCat = (json) => {
    let photo = json[0].url
    section.classList.add('cats')

    let image = document.createElement('img')
    image.src = photo;
    image.classList.add('random_cats')
    image.alt = photo
    section.appendChild(image)
};

async function getRandomCats() {
    section.innerHTML = "";
    try {
        const response = await fetch(url);
        const json = await response.json();
        console.log("JSON:", json);
        return randomCat(json);
    } catch(e){
        console.log("This is an error");
        console.log(e);
    }
}

// JavaScript for showing dogs picture 

const url2 = "https://api.thedogapi.com/v1/images/search";

const section2 = document.querySelector('.container');
const button2 = document.querySelector('.btn2');

button2.addEventListener('click', getRandomDogs);

randomDog = (json) => {
    let photo2 = json[0].url
    section.classList.add('dogs');

    let image2 = document.createElement('img')
    image2.src = photo2;
    image2.classList.add('random_dogs')
    image2.alt = photo2;
    section.appendChild(image2)
};

async function getRandomDogs() {
    section.innerHTML = "";
    try {
        const response = await fetch(url2);
        const json = await response.json();
        console.log("JSON:", json);
        return randomDog(json);
    } catch(e){
        console.log("This is an error");
        console.log(e);
    }
}