// const value = document.querySelector('.value');
// console.log(value);

// const button = document.querySelector('button');
// console.log(button);

// const area = document.querySelector('.area-display');
// console.log(area);

// const stat = document.querySelector('.stat div');
// console.log(stat);

// const hello = document.querySelector('.hello');
// console.log(hello);

// const buttons = document.querySelectorAll('button');
// console.log(buttons);

// const ratings = document.querySelectorAll('.rating-display .value');

// for (let rating of ratings.values()) {
//     console.log(rating);
// }

// const areas = document.querySelectorAll('.area-display .value');

// for (let i = 0; i < areas.length; i++) {
//     console.log(areas[i]);
// }

const descriptions = document.querySelectorAll('.description-display');
for (let desc of descriptions.values()) {
    let content = desc.innerText;

    if (content.length > 250) {
        content = content.slice(0, 250);
        content = content + '<a href="#">...</a>';
    }

    desc.innerHTML = content;
}

const ratings = document.querySelectorAll('.rating-display .value');
for (rating of ratings) {
    let ratingValue = parseFloat(rating.innerText);

    if (ratingValue > 4.7) {
        rating.classList.add('high-rating');
        rating.classList.remove('value');
    }
}

const parks = document.querySelectorAll('.park-display');
const numberParks = parks.length;
const newElement = document.createElement('div');
newElement.innerText = `${numberParks} exciting parks to visit`;
newElement.classList.add('header-statement');
const header = document.querySelector('header');
header.appendChild(newElement);

const firstBtn = document.querySelector('button');
firstBtn.addEventListener('click', (event) => {
    console.log('You clicked the button', event);
});

const main = document.querySelector('main');
const parksList = main.querySelectorAll('.park-display');
main.innerHTML = '';
const parksArray = Array.from(parksList);

parksArray.sort((parkA, parkB) => {
    const parkAName = parkA.querySelector('h2').innerText;
    const parkBName = parkB.querySelector('h2').innerText;
    if (parkAName < parkBName) {
        return -1;
    } else if (parkAName > parkBName) {
        return 1;
    } else {
        return 0;
    }
});

parksArray.forEach((park) => {
    main.appendChild(park);
});

// Sort Parks By Rating 
const sortByRating = (ratingA, ratingB) => {
    const ratingAName = ratingA.querySelector('.rating-display .value').innerText;
    const ratingBName = ratingB.querySelector('.rating-display .value').innerText;
    if (ratingAName < ratingBName) {
        return -1;
    } else if (ratingAName > ratingBName) {
        return 1;
    } else {
        return 0;
    }
};

const ratingSorterClinkHandler = (event) => {
    event.preventDefault();
    // Get the main element
    const main = document.querySelector('main');
    // Get the list of ratings 
    const ratingList = document.querySelectorAll('.rating-display');
    // Empty the main 
    main.innerHTML = '';
    // Create an array
    const ratingArray = Array.from(ratingList);
    // Sort the array 
    ratingArray.sort(sortByRating);
    // Insert each rating into the DOM
    ratingArray.forEach((rating) => {
        main.appendChild(rating);
    });
};

const main = () => {
    const nameSorter = document.querySelector('#name-sorter');
    nameSorter.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('You clicked the name sorter');
    })
    // Select the 'ratingSorter' link 
    const ratingSorter = document.querySelector('#rating-sorter');
    // Add an event listener 
    ratingSorter.addEventListener('click', ratingSorterClinkHandler);
}