// Activity 1 - Map

const steps = ["one", "two", "three"];
const listTemplate(step) {
    //the html string made from step
    return `<li>${step}</li>`;
}
// use map to convert the list from strings to HTML
const stepsHtml = steps.map(listTemplate);
// set the innerHTML
document.querySelector("#myList").innerHTML = stepsHtml.join();


// Activity 2 - Map

// Declare an array with letter grades in it: ( A B A)
let grades = ["A", "B", "A"];

// Function to take one letter grade and return appropriate gpa points for it
function convertGradeToPoints(grade) {
    let points = 0;
    if (grade === "A") {
        points = 4;
    }
    else if (grade === "B") {
        points = 3;
    }
    return points;
}

// Use map and conversion function to convert array in step1 to gpa points
const gpaPoints = grades.map(convertGradeToPoints);


// Activity 3 - Reduce

// Using function convertgradetopoints, convert an array of grades into an array of gpapoints.
const gpaPoints = grades.map(convertGradeToPoints);

// Calculate GPA from array of gpaPoints using reduce 
const pointsTotal = gpaPoints.reduce(function (total, item) {
    return total + item;
});

// Same as above but uses arrow function
// const pointsTotal = gpaPoints.reduce((total, item) => total + item);
// const gpa = pointsTotal / gpaPoints.length;

// If further simplified is desired:
// const gpa = gpaPoints.reduce((total, item) => total + item) / gpaPoints.length;


// Activity 4 - Filter

// Declare an array with  the following value: ['watermelon', 'peach', 'apple', 'tomato', 'grape']
let fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape']

// Use filter to keep only fruits that are samller than 6 characters
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(function (word) {
    return word.length < 6;
});


// Activity 5 - indexOf

// Declare an array with the following value: [12, 34, 21, 54]
let numberArray = [12, 34, 21, 54];

// Declare a luckyNumber variable with the value 21;
const luckyNumber = 21;

// Use indexOf to see if the luckyNumber is in the Array
let luckyIndex = numberArray.indexOf(luckyNumber);