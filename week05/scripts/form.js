// Populate the Product Name options using array

document.addEventListener("DOMContentLoaded", () => {

    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averagerating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0
        }
    ];

    const selectElement = document.getElementById("product-name");

    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });

});

// Counter for review.html page.
document.addEventListener("DOMContentLoaded", () => {
    // Retrieve the current count of reviews from localStorage
    let reviewCount = localStorage.getItem('reviewCount') || 0;

    // Convert the count to an integer
    reviewCount = parseInt(reviewCount, 10);

    // Add one to the counter
    reviewCount += 1;

    // Update the count in localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // Display the count on the page
    const reviewCountElement = document.getElementById('review-count');
    if (reviewCountElement) {
        reviewCountElement.textContent = `You have completed ${reviewCount} reviews.`;
    }
});

