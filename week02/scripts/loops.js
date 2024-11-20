myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};
// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
let favoriteFood1 = document.createElement("li");
favoriteFood1.textContent = myInfo.favoriteFoods[0];

let favoriteFood2 = document.createElement("li");
favoriteFood2.textContent = myInfo.favoriteFoods[1];

let favoriteFood3 = document.createElement("li");
favoriteFood3.textContent = myInfo.favoriteFoods[2];

let favoriteFood4 = document.createElement("li");
favoriteFood4.textContent = myInfo.favoriteFoods[3];

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
document.querySelector("#favorite-foods").appendChild(favoriteFood1);
document.querySelector("#favorite-foods").appendChild(favoriteFood2);
document.querySelector("#favorite-foods").appendChild(favoriteFood3);
document.querySelector("#favorite-foods").appendChild(favoriteFood4);

//   Activity 1
const foodsElement = document.querySelector("#favorite-foods");

// 2. .forEach method to loop over an array and output its contents in a <ul>
function createAndAppendFoodItem(food) {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    foodsElement.appendChild(favoriteFood);
}

myInfo.favoriteFoods.forEach(createAndAppendFoodItem);

// 3. .map method to loop over an array and output its contents in a <ul>
function mapFoodItem(food) {
    let favoriteFood = document.createElement("li");
    favoriteFood.textContent = food;
    return favoriteFood;
}
const foodListElements = myInfo.favoriteFoods.map(mapFoodItem);
foodsElement.innerHTML = foodListElements.join("");

//  Activity 3
// 1. Function that will take a food string and return that string embedded in some html. (<li>food</li>)
function createFoodItemHTML(food) {
    return `<li>${food}</li>`;
}

// 2. Function that will take a place string and return that string embedded in some html. (a bit more complex)We have the location and the length. Use template:
// <dt${place.place}</dt><dd>${place.length}</dd>)
function createPlaceHTML(place) {
    return `<dt>$P{place.place}</dt><dd>${place.length}</dd>`;
}

// 3. Function that will take a list, and a callback function to produce an HTML template. It should transform the list by looping over it calling the template function once for each item in the list. The function should return all of the HTML strings flattened into one long string.
function createHTMLList(list, templateFunction) {
    return list.map(templateFunction).join("");
}

// 4. Call the function above once for the placesLived list and again for favoriteFoods list. Set the innerHTML of the appropriate HTML element to the results of the function call.
const favoriteFoodsHTML = createHTMLList(myInfo.favoriteFoods, createFoodItemHTML);
document.querySelector("#favorite-foods").innerHTML = favoriteFoodsHTML;

const placesLivedHTML = createHTMLList(myInfo.placesLived, createPlaceHTML);
document.querySelector("#places-lived").innerHTML = placesLivedHTML;




// Activity 3 Tutor's example:
// reusable!
myInfo = {
    name: "Brother T",
    photo: "images/photo.jpg",
    favoriteFoods: ["Fettucini", "Steak", "Chicken", "Shrimp", "Baked Potato"],
    hobbies: ["Reading", "Fishing", "Camping"],
    placesLived: [
        {
            place: "Rexburg, ID",
            length: "5 years",
        },
        {
            place: "Ammon, ID",
            length: "3 years",
        },
        {
            place: "Sandy, UT",
            length: "1 year",
        },
    ],
};
const foodsElement = document.querySelector("#favorite-foods");
const placesElement = document.querySelector("#places-lived");
// requires a list, and a callback that will produce an html string for each item in the list
// returns a string of html
function generateListMarkup(list, templateCallback) {
    const htmlList = list.map(templateCallback);
    return htmlList.join("");
}
// requires an food string
// returns that string embedded in HTML markup
function foodsTemplate(food) {
    return `<li>${food}</li>`;
}

// requires an place string
// returns that string embedded in HTML markup
function placesTemplate(place) {
    return `<dt>${place.place}</dt><dd>${place.length}</dd>`;
}

foodsElement.innerHTML = generateListMarkup(
    myInfo.favoriteFoods,
    foodsTemplate
);
placesElement.innerHTML = generateListMarkup(
    myInfo.placesLived,
    placesTemplate
);


// Check your understanding activity:

const DAYS = 6;
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

// Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below 30.
for (let i = 0; i < studentReport.length; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// Repeat the previous programming snippet by using a while loop.
let i = 0
while (i < studentReport.length) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    i++;
}

// Repeat the previous programming snippet by using a forEach loop.
studentReport.forEach(function (item) {
    if (item < LIMIT) {
        console.log(item);
    }
});

// Repeat the previous programming snippet by using a for...in loop.
for (let i in studentReport) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
}

// Use any type of repetition (looping) statement to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) of the next number of DAYS from today's date.

// array to store days of the week.
const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// new Date() provides current date.
let today = new Date();
// Loop to iterate from 0 to DAYS, creating a new date for each iteration by adding day to todays date. getDay() retrieves the day of the week as a number (Sunday=0, Monday=1 etc), aand is then used to get the day name from dayNames array.
for (let day = 0; day <= DAYS; day++) {
    let futureDate = new Date(today);
    futureDate.setDate(today.getDate() + day);
    console.log(dayNames[futureDate.getDay()]);
}