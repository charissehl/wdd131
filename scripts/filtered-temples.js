// Burger and close buttons
const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Temple gallery
const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Hamilton New Zealand",
        location: "Hamilton, New Zealand",
        dedicated: "1958, April, 20",
        area: 45251,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/hamilton-new-zealand-temple/hamilton-new-zealand-temple-29744-main.jpg"

    },
    {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii, United States",
        dedicated: "1919, November, 27",
        area: 42100,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/laie-hawaii-temple/laie-hawaii-temple-7370-main.jpg"
    },
    {
        templeName: "Tokyo Japan",
        location: "Tokyo, Japan",
        dedicated: "1980, October, 27",
        area: 53997,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tokyo-japan-temple/tokyo-japan-temple-26340-main.jpg"
    },
    {
        templeName: "Sydney Australia",
        location: "Carlingford, New South Wales, Australia",
        dedicated: "1984, September, 20",
        area: 30067,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/sydney-australia-temple/sydney-australia-temple-43342-main.jpg"
    },
    {
        templeName: "Johannesburg South Africa",
        location: "Johannesburg, South Africa",
        dedicated: "1985, August, 24",
        area: 19184,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-22475-main.jpg"
    },
    {
        templeName: "Cebu City Phillipines",
        location: "Cebu City, Cebu, Phillipines",
        dedicated: "2010, June, 13",
        area: 29556,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/133-Cebu-City-Philippines-Temple.jpg"
    },
    {
        templeName: "San Diego California",
        location: "San Diego, California, United States",
        dedicated: "1993, April, 25",
        area: 72000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/san-diego-california-temple/san-diego-california-temple-9060-main.jpg"
    },
    {
        templeName: "Seoul Korea",
        location: "Seoul, Seoul-teukbyeolsi, South Korea",
        dedicated: "1985, December, 14",
        area: 28057,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22305-main.jpg"
    },
    {
        templeName: "Stockholm Sweden",
        location: "Västerhaninge, Sweden",
        dedicated: "1985, June, 10",
        area: 31000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/stockholm-sweden-temple/stockholm-sweden-temple-30267-main.jpg"
    },
    {
        templeName: "Fortaleza Brazil",
        location: "Fortaleza-CE, Brazil",
        dedicated: "2019, June, 2",
        area: 36000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/fortaleza-brazil-temple/fortaleza-brazil-temple-5569-main.jpg"
    },
    {
        templeName: "Kinshasa Democratic Republic of the Congo",
        location: "Kinshasa, Democratic Republic of the Congo",
        dedicated: "2019, April, 14",
        area: 12000,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
    },
    {
        templeName: "Kyiv Ukraine",
        location: "Kyevo-Sviatoshyns'ky Rayon, Kyivs'ka Oblast, Ukraine",
        dedicated: "2010, August, 29",
        area: 22184,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/_temp/134-Kyiv-Ukraine-Temple.jpg"
    },
    {
        templeName: "Preston England",
        location: "Lancashire, England, United Kingdom",
        dedicated: "1998, June, 7",
        area: 69630,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/preston-england-temple/preston-england-temple-45357-main.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, RM, Italy",
        dedicated: "2019, March, 10",
        area: 41010,
        imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-2642-main.jpg"
    },
];

// Function to create and display the temple gallery
function createTempleGallery(filteredTemples) {
    const galleryContainer = document.getElementById("temple-gallery");
    // Clear existing content
    galleryContainer.innerHTML = "";

    filteredTemples.forEach(temple => {
        const templeCard = document.createElement("div");
        templeCard.classList.add("temple-card");

        const templeImage = document.createElement("img");
        templeImage.src = temple.imageUrl;
        templeImage.alt = temple.templeName;
        templeImage.loading = "lazy";

        const templeInfo = document.createElement("div");
        templeInfo.classList.add("temple-info");

        const templeName = document.createElement("h3");
        templeName.textContent = temple.templeName;

        const createInfoElement = (label, text) => {
            const container = document.createElement("div");

            const heading = document.createElement("h4");
            heading.innerHTML = `<span class="heading-label">${label}:</span>`

            const paragraph = document.createElement("p");
            paragraph.textContent = text;

            container.appendChild(heading);
            container.appendChild(paragraph);

            return container;
        };

        const templeLocation = createInfoElement("Location", temple.location);
        const templeDedicated = createInfoElement("Dedicated", temple.dedicated);
        const templeArea = createInfoElement("Area", `${temple.area} sq ft`);

        templeInfo.appendChild(templeName);
        templeInfo.appendChild(templeLocation);
        templeInfo.appendChild(templeDedicated);
        templeInfo.appendChild(templeArea);

        templeCard.appendChild(templeImage);
        templeCard.appendChild(templeInfo);

        galleryContainer.appendChild(templeCard);
    })
}

// Initial display of the temples
document.addEventListener("DOMContentLoaded", createTempleGallery(temples));

// Functions to filter temples as follows
const filterOldTemples = () => temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
const filterNewTemples = () => temples.filter(temple => new Date(temple.dedicated).getFullYear() >= 2000);
const filterLargeTemples = () => temples.filter(temple => temple.area > 90000);
const filterSmallTemples = () => temples.filter(temple => temple.area < 10000);

// Event listeners for navigation menu filtered items
document.getElementById("home").addEventListener("click", () => createTempleGallery(temples));
document.getElementById("old").addEventListener("click", () => createTempleGallery(filterOldTemples()));
document.getElementById("new").addEventListener("click", () => createTempleGallery(filterNewTemples()));
document.getElementById("large").addEventListener("click", () => createTempleGallery(filterLargeTemples()));
document.getElementById("small").addEventListener("click", () => createTempleGallery(filterSmallTemples()));