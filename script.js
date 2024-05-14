const properties = [{
    id: 1,
    name: "Cozy Cottage",
    location: "Gisborne",
    price: "$200,000",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://source.unsplash.com/category/house/?cozy+cottage",
    description: `Welcome to "Cozy Cottage" nestled in the serene locale of Gisborne, offering a tranquil escape from the hustle and bustle of urban life. Priced at a steal for $200,000, this charming abode boasts 2 snug bedrooms and 2 immaculate bathrooms, ensuring comfort and convenience for its lucky inhabitants.        <br></br>Picture yourself unwinding in the cozy ambiance of this cottage, where every corner exudes warmth and relaxation. Whether you're curling up with a book by the fireplace or savoring a cup of tea on the quaint porch, each moment spent here promises to be nothing short of blissful.`
}, {
    id: 2,
    name: "Modern Loft",
    location: "Bay Of Plenty",
    price: "$350,000",
    bedrooms: 3,
    bathrooms: 2.5,
    image: "https://source.unsplash.com/category/house/?modern+loft"
}, {
    id: 3,
    name: "Seaside Villa",
    location: "Northland",
    price: "$1,000,000",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://source.unsplash.com/category/house/?seaside+villa"
}, {
    id: 4,
    name: "Rustic Cabin",
    location: "Marlborough",
    price: "$150,000",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://source.unsplash.com/category/house/?rustic+cabin"
}, {
    id: 5,
    name: "Urban Apartment",
    location: "Wellington",
    price: "$500,000",
    bedrooms: 2,
    bathrooms: 1.5,
    image: "https://source.unsplash.com/category/house/?urban+apartment"
}, {
    id: 6,
    name: "Luxury Penthouse",
    location: "Nelson",
    price: "$2,200,000",
    bedrooms: 4,
    bathrooms: 3.5,
    image: "https://source.unsplash.com/category/house/?luxury+penthouse"
}, {
    id: 7,
    name: "Beachfront Villa",
    location: "Bay Of Plenty",
    price: "$1,800,000",
    bedrooms: 5,
    bathrooms: 4,
    image: "https://source.unsplash.com/category/house/?beachfront+villa"
}, {
    id: 8,
    name: "Countryside Estate",
    location: "Canterbury",
    price: "$1,600,000",
    bedrooms: 6,
    bathrooms: 5,
    image: "https://source.unsplash.com/category/house/?countryside+estate"
}, {
    id: 9,
    name: "Downtown Condo",
    location: "Auckland",
    price: "$700,000",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://source.unsplash.com/category/house/?downtown+condo"
}, {
    id: 10,
    name: "Mountain Chalet",
    location: "Otago",
    price: "$900,000",
    bedrooms: 3,
    bathrooms: 2.5,
    image: "https://source.unsplash.com/category/house/?mountain+chalet"
}, {
    id: 11,
    name: "Luxury Penthouse",
    location: "Nelson",
    price: "$2,200,000",
    bedrooms: 4,
    bathrooms: 3.5,
    image: "https://source.unsplash.com/category/house/?luxury+penthouse"
}, {
    id: 12,
    name: "Beachfront Villa",
    location: "Bay Of Plenty",
    price: "$1,800,000",
    bedrooms: 5,
    bathrooms: 4,
    image: "https://source.unsplash.com/category/house/?beachfront+villa"
}, {
    id: 13,
    name: "Countryside Estate",
    location: "Canterbury",
    price: "$1,600,000",
    bedrooms: 6,
    bathrooms: 5,
    image: "https://source.unsplash.com/category/house/?countryside+estate"
}, {
    id: 14,
    name: "Downtown Condo",
    location: "Auckland",
    price: "$700,000",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://source.unsplash.com/category/house/?downtown+condo"
}, {
    id: 15,
    name: "Mountain Chalet",
    location: "Otago",
    price: "$900,000",
    bedrooms: 3,
    bathrooms: 2.5,
    image: "https://source.unsplash.com/category/house/?mountain+chalet"
}, {
    id: 16,
    name: "Sunny Bungalow",
    location: "Hawkes Bay",
    price: "$280,000",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://source.unsplash.com/category/house/?sunny+bungalow"
}, {
    id: 17,
    name: "Oceanview Condo",
    location: "West Coast",
    price: "$420,000",
    bedrooms: 2,
    bathrooms: 1.5,
    image: "https://source.unsplash.com/category/house/?oceanview+condo"
}, {
    id: 18,
    name: "Country Farmhouse",
    location: "Manawatu",
    price: "$550,000",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://source.unsplash.com/category/house/?country+farmhouse"
}, {
    id: 19,
    name: "City Penthouse",
    location: "Taranaki",
    price: "$1,200,000",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://source.unsplash.com/category/house/?city+penthouse"
}, {
    id: 20,
    name: "Lakeside Retreat",
    location: "Waikato",
    price: "$780,000",
    bedrooms: 5,
    bathrooms: 4,
    image: "https://source.unsplash.com/category/house/?lakeside+retreat"
}];

// get input elements from html - our filters
const locationFilter = document.getElementById("location");
const bedroomsFilter = document.getElementById("bedrooms");
const bathroomsFilter = document.getElementById("bathrooms");
const pricemin = document.getElementById("pricemin");
const pricemax = document.getElementById("pricemax");

// on change event on each filter
// location
locationFilter.addEventListener("change", function () {
    console.dir(locationFilter.value);
    filterAndPopulateResults();
});

// bedrooms
bedroomsFilter.addEventListener("change", function () {
    console.dir(bedroomsFilter.value);
    filterAndPopulateResults();
});

// bathrooms
bathroomsFilter.addEventListener("change", function () {
    console.dir(bathroomsFilter.value);
    filterAndPopulateResults();
});

// price min
pricemin.addEventListener("change", function () {
    console.dir(pricemin.value);
    filterAndPopulateResults();
});

// // price max
pricemax.addEventListener("change", function () {
    console.dir(pricemax.value);
    filterAndPopulateResults();
});


// filter results - return an array of filtered properties
function filterProperties() {
    const filteredProperties = properties.filter(property => {
        // check if location matches input

        // set both to lowercase to be exact
        const propertyLocation = property.location.toLowerCase();
        const filterValue = locationFilter.value.toLowerCase();

        // if it doesn't match - so it returns false and doesn't add to the array
        if (filterValue && !propertyLocation.includes(filterValue)) {

            // if (Auckland && !propertyLocation.includes(Auckland))
            // if the property doen't include the filter value, reutn false
            return false;
        }

        // check if numbers of bedrooms match
        if (bedroomsFilter.value && parseInt(property.bedrooms) <= parseInt(bedroomsFilter.value)) {
            return false;
        }

        // check if number of bathrooms match
        if (bathroomsFilter.value && parseFloat(property.bathrooms) <= parseFloat(bathroomsFilter.value)) {
            return false;
        }

        // check if the price falls within the specified range
        const priceValue = parseFloat(property.price.replace(/\$/g, "").replace(/,/g, "")); // removes dollar sign and comma from price and makes the number a floating number

        const minprice = parseFloat(pricemin.value);
        const maxprice = parseFloat(pricemax.value);

        if ((minprice && priceValue < minprice) || (maxprice && priceValue > maxprice)) {
            return false
        }

        // if all conditions pass, include the property in the array
        return true;
    });

    // return the filtered properties array - can access outside
    return filteredProperties;
}

// sort results - sort by price - low to high
function sortPropertiesByPriceLowToHigh(properties) {
    return properties.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/\$/g, "").replace(/,/g, ""));
        const priceB = parseFloat(b.price.replace(/\$/g, "").replace(/,/g, ""));
        return priceA - priceB;
    })
}

function sortedPropertiesByPriceHighToLow(properties) {
    return properties.sort((b, a) => {
        const priceA = parseFloat(a.price.replace(/\$/g, "").replace(/,/g, ""));
        const priceB = parseFloat(b.price.replace(/\$/g, "").replace(/,/g, ""));
        return priceB - priceA;
    })
}

// filter and populate results
function filterAndPopulateResults() {
    const filteredProperties = filterProperties();
    // sort properties (low to high) before populating 
    const sortedProperties = sortPropertiesByPriceLowToHigh(filteredProperties); // sorting filtered properties in previous line
    populateResults(filteredProperties);
}

// initial population
filterAndPopulateResults();

// populate cards function
function populateResults(filteredResults) {

    // get results div
    const resultsDiv = document.getElementById("results");

    // clear prev results
    resultsDiv.innerHTML = "";

    // check if filtered properties is empty
    if (filteredResults.length === 0) {
        resultsDiv.innerHTML = `<p class = "no-results">No Results Found</p>`
    } else {
        // if filterResults in is not empty
        filteredResults.forEach(property => {

            // Create a card for that property:
            const propertyCardHTML = `
            <div class="property">
                <div class="swiper">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide"><img src="${property.image}" alt="${property.name} image 1" class="property-image" value=${property.id}></div>
                        <div class="swiper-slide"><img src="${property.image}" alt="${property.name} image 2" class="property-image" value=${property.id}></div>
                        <div class="swiper-slide"><img src="${property.image}" alt="${property.name} image 3" class="property-image" value=${property.id}></div>
                    </div>
                    <div class="swiper-pagination"></div>
                </div>
                <div class="property-details">
                    <h2>${property.name}</h2>
                    <p>${property.location}</p>
                    <div class="more-details">
                        <div class="property-amenities">
                            <p>${property.bedrooms} <i class="fa-solid fa-bed"></i></p>
                            <p>${property.bathrooms} <i class="fa-solid fa-bath"></i></p>
                        </div>
                        <h4>${property.price}</h4>
                    </div>
                </div>
            </div>
            `;
            resultsDiv.innerHTML += propertyCardHTML;
            attachModalToImages(); // attach event listeners straight after population
        });
    }

}


// initialise swiper js
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // enables pagination bullets
    },
});

function attachModalToImages() {
    // get all the iamges from the property
    const images = document.querySelectorAll(".property-image");
    // get the details modal from the html
    const detailsModal = document.getElementById("details-modal");

    // run for loop over the image array to add a click event to each image
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function(event) {
            console.log("img click working");
            detailsModal.showModal();

            // add close function
            closeDetailsModal();

            // populate modal with the correct info
            console.log(event.target.getAttribute("value"));
            populateModal(event.target.getAttribute("value"))
        })
    }
}

function closeDetailsModal() {
    // get the close button
    const close = document.getElementById("close-modal");
    const detailsModal = document.getElementById("details-modal");

    // click event on close modal to close modal
    close.addEventListener("click", function() {
        detailsModal.close();
    })
    
}

function populateModal(imageId) {
    // get the modal
    const detailsModal = document.querySelector(".modal-content");

    detailsModal.innerHTML = `
        <img src="${properties[imageId -1].image}" alt="${properties[imageId -1].name} image 1">
        <h2>${properties[imageId -1].name}</h2>
        <p>${properties[imageId -1].location}</p>
        <h4>${properties[imageId -1].price}</h4>
        <div class="modal-ammenities">
            <p>${properties[imageId -1].bedrooms} <i class="fa-solid fa-bed"></i></p>
            <p>${properties[imageId -1].bathrooms} <i class="fa-solid fa-bath"></i></p>
        </div>
        <p class="property-description">${properties[imageId -1].description}</p>
        <button class="booking-button">Enquire Now</button>
    `
}