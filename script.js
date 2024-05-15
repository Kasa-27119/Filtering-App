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
    image: "https://source.unsplash.com/category/house/?modern+loft",
    description: `Introducing the 'Modern Loft', an architectural gem nestled in the serene beauty of the Bay of Plenty. This sleek and stylish loft offers a contemporary living experience with an abundance of natural light streaming through expansive windows. Boasting clean lines and modern amenities, this space is perfect for those who appreciate minimalist design and functionality.<br><br>From the spacious open-plan layout to the private balcony overlooking lush greenery, every detail of the 'Modern Loft' is designed to inspire and delight. Experience the epitome of coastal chic living in this stunning retreat.`
}, {
    id: 3,
    name: "Seaside Villa",
    location: "Northland",
    price: "$1,000,000",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://source.unsplash.com/category/house/?seaside+villa",
    description: `Introducing the epitome of coastal elegance - the 'Seaside Villa' nestled along the pristine shores of Northland. This exquisite villa offers a haven of luxury and tranquility, where panoramic ocean views and soft sea breezes create an unparalleled sense of serenity. Step inside to discover a world of refined living, with spacious interiors bathed in natural light and adorned with coastal-inspired décor.<br><br>Outside, expansive terraces beckon for al fresco dining or simply lounging in the sun, while direct access to the sandy beach invites endless opportunities for seaside relaxation and recreation. Whether you're seeking a private retreat or an entertainer's dream, the 'Seaside Villa' promises an extraordinary lifestyle immersed in the beauty of New Zealand's coastal landscape.`
}, {
    id: 4,
    name: "Rustic Cabin",
    location: "Marlborough",
    price: "$150,000",
    bedrooms: 1,
    bathrooms: 1,
    image: "https://source.unsplash.com/category/house/?rustic+cabin",
    description: `Introducing our charming "Rustic Cabin," nestled amidst the serene beauty of Marlborough, New Zealand. This cozy retreat offers a perfect blend of rustic charm and modern comfort, providing a tranquil escape from the hustle and bustle of city life.<br><br>Surrounded by lush greenery and breathtaking views of Marlborough's picturesque landscapes, this cabin invites you to unwind and reconnect with nature. Step inside to discover a warm and inviting interior adorned with natural wood finishes, cozy furnishings, and rustic décor, creating a welcoming ambiance that exudes relaxation.<br><br>Outside, a spacious deck beckons you to soak in the tranquility of your surroundings, with ample space for alfresco dining, stargazing, or simply enjoying the fresh air.`
}, {
    id: 5,
    name: "Urban Apartment",
    location: "Wellington",
    price: "$500,000",
    bedrooms: 2,
    bathrooms: 1.5,
    image: "https://source.unsplash.com/category/house/?urban+apartment",
    description: `Discover the epitome of urban living at the 'Urban Apartment' in the vibrant heart of Wellington. This stylish abode offers a modern sanctuary amidst the bustling cityscape, boasting sleek design and contemporary comforts. With floor-to-ceiling windows framing city views, natural light floods the open-plan living spaces, creating an inviting ambiance.<br><br>Enjoy the convenience of inner-city living with cafes, restaurants, and cultural attractions right at your doorstep. Whether you're relaxing on the private balcony or exploring the dynamic city scene, the 'Urban Apartment' promises a lifestyle of sophistication and convenience in the heart of Wellington.`
}, {
    id: 6,
    name: "Luxury Penthouse",
    location: "Nelson",
    price: "$2,200,000",
    bedrooms: 4,
    bathrooms: 3.5,
    image: "https://source.unsplash.com/category/house/?luxury+penthouse",
    description: `Introducing the epitome of refined living - the 'Luxury Penthouse' in the charming city of Nelson. Perched atop an exclusive residential tower, this exceptional penthouse offers unrivaled elegance and breathtaking views of Nelson's picturesque landscapes. Step into a world of luxury where every detail has been meticulously crafted to provide the utmost comfort and sophistication.<br><br>From the expansive living spaces bathed in natural light to the private terrace offering panoramic vistas of the surrounding mountains and coastline, this residence is a sanctuary of opulence. With its prime location in the heart of Nelson's vibrant cultural scene, the 'Luxury Penthouse' promises a lifestyle of indulgence and refinement for the discerning buyer.`
}, {
    id: 7,
    name: "Beachfront Villa",
    location: "Bay Of Plenty",
    price: "$1,800,000",
    bedrooms: 5,
    bathrooms: 4,
    image: "https://source.unsplash.com/category/house/?beachfront+villa",
    description: `Welcome to the epitome of coastal luxury - the 'Beachfront Villa' nestled along the pristine shores of the Bay of Plenty. This exquisite villa offers the ultimate beachside retreat, where panoramic ocean views and soft sea breezes await at every turn. Step through the doors to discover a haven of elegance and tranquility, with spacious living areas bathed in natural light and adorned with tasteful coastal décor.<br><br>Outside, a private terrace beckons for al fresco dining or simply lounging in the sun, while direct access to the sandy beach offers endless opportunities for seaside relaxation and recreation. Whether you're seeking a serene escape or an entertainer's dream, the 'Beachfront Villa' is sure to exceed your every expectation of coastal living.`
}, {
    id: 8,
    name: "Countryside Estate",
    location: "Canterbury",
    price: "$1,600,000",
    bedrooms: 6,
    bathrooms: 5,
    image: "https://source.unsplash.com/category/house/?countryside+estate",
    description: `Welcome to the picturesque splendor of the 'Countryside Estate', nestled amidst the rolling hills and verdant pastures of Canterbury. This magnificent estate offers a rare opportunity to embrace the tranquility and beauty of rural living, without sacrificing modern comforts and conveniences. Sprawling across acres of pristine land, the property boasts a grand homestead surrounded by manicured gardens, towering trees, and sweeping vistas of the countryside.<br><br>Inside, discover spacious living areas adorned with timeless elegance and refined craftsmanship, perfect for both intimate gatherings and grand celebrations. With its idyllic setting and unparalleled charm, the 'Countryside Estate' invites you to create a legacy of cherished memories in the heart of New Zealand's breathtaking landscape.`
}, {
    id: 9,
    name: "Downtown Condo",
    location: "Auckland",
    price: "$700,000",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://source.unsplash.com/category/house/?downtown+condo",
    description: `Experience the pinnacle of urban living at the 'Downtown Condo', ideally situated in the heart of Auckland's vibrant city center. This sleek and sophisticated condominium offers unparalleled convenience and luxury with stunning views of the iconic skyline. Step inside to discover modern interiors adorned with high-end finishes and designer touches, providing the perfect backdrop for contemporary city living.<br><br>From the bustling streets below to the thriving cultural scene just moments away, the 'Downtown Condo' puts you at the epicenter of Auckland's cosmopolitan lifestyle. Embrace the energy of the city while enjoying the comfort and elegance of this exclusive urban retreat.`
}, {
    id: 10,
    name: "Mountain Chalet",
    location: "Otago",
    price: "$900,000",
    bedrooms: 3,
    bathrooms: 2.5,
    image: "https://source.unsplash.com/category/house/?mountain+chalet",
    description: `Welcome to the enchanting 'Mountain Chalet', nestled amidst the rugged beauty of Otago's majestic peaks. This charming alpine retreat offers a cozy sanctuary where rustic charm meets modern comfort. Step inside to discover a warm and inviting interior, complete with wood-paneled walls, exposed beams, and a crackling fireplace to ward off the mountain chill.<br><br>Outside, panoramic views of snow-capped mountains and lush forests await, providing a breathtaking backdrop for outdoor adventures in every season. Whether you're seeking a tranquil escape or an adrenaline-fueled mountain getaway, the 'Mountain Chalet' offers the perfect blend of seclusion and adventure in one of New Zealand's most picturesque landscapes.`
}, {
    id: 11,
    name: "Luxury Penthouse",
    location: "Nelson",
    price: "$2,200,000",
    bedrooms: 4,
    bathrooms: 3.5,
    image: "https://source.unsplash.com/category/house/?luxury+penthouse",
    description: `Introducing the epitome of refined living - the 'Luxury Penthouse' in the charming city of Nelson. Perched atop an exclusive residential tower, this exceptional penthouse offers unrivaled elegance and breathtaking views of Nelson's picturesque landscapes. Step into a world of luxury where every detail has been meticulously crafted to provide the utmost comfort and sophistication.<br><br>From the expansive living spaces bathed in natural light to the private terrace offering panoramic vistas of the surrounding mountains and coastline, this residence is a sanctuary of opulence. With its prime location in the heart of Nelson's vibrant cultural scene, the 'Luxury Penthouse' promises a lifestyle of indulgence and refinement for the discerning buyer.`
}, {
    id: 12,
    name: "Beachfront Villa",
    location: "Bay Of Plenty",
    price: "$1,800,000",
    bedrooms: 5,
    bathrooms: 4,
    image: "https://source.unsplash.com/category/house/?beachfront+villa",
    description: `Welcome to the epitome of coastal luxury - the 'Beachfront Villa' nestled along the pristine shores of the Bay of Plenty. This exquisite villa offers the ultimate beachside retreat, where panoramic ocean views and soft sea breezes await at every turn. Step through the doors to discover a haven of elegance and tranquility, with spacious living areas bathed in natural light and adorned with tasteful coastal décor.<br><br>Outside, a private terrace beckons for al fresco dining or simply lounging in the sun, while direct access to the sandy beach offers endless opportunities for seaside relaxation and recreation. Whether you're seeking a serene escape or an entertainer's dream, the 'Beachfront Villa' is sure to exceed your every expectation of coastal living.`
}, {
    id: 13,
    name: "Countryside Estate",
    location: "Canterbury",
    price: "$1,600,000",
    bedrooms: 6,
    bathrooms: 5,
    image: "https://source.unsplash.com/category/house/?countryside+estate",
    description: `Welcome to the picturesque splendor of the 'Countryside Estate', nestled amidst the rolling hills and verdant pastures of Canterbury. This magnificent estate offers a rare opportunity to embrace the tranquility and beauty of rural living, without sacrificing modern comforts and conveniences. Sprawling across acres of pristine land, the property boasts a grand homestead surrounded by manicured gardens, towering trees, and sweeping vistas of the countryside.<br><br>Inside, discover spacious living areas adorned with timeless elegance and refined craftsmanship, perfect for both intimate gatherings and grand celebrations. With its idyllic setting and unparalleled charm, the 'Countryside Estate' invites you to create a legacy of cherished memories in the heart of New Zealand's breathtaking landscape.`
}, {
    id: 14,
    name: "Downtown Condo",
    location: "Auckland",
    price: "$700,000",
    bedrooms: 2,
    bathrooms: 2,
    image: "https://source.unsplash.com/category/house/?downtown+condo",
    description: `Experience the pinnacle of urban living at the 'Downtown Condo', ideally situated in the heart of Auckland's vibrant city center. This sleek and sophisticated condominium offers unparalleled convenience and luxury with stunning views of the iconic skyline. Step inside to discover modern interiors adorned with high-end finishes and designer touches, providing the perfect backdrop for contemporary city living.<br><br>From the bustling streets below to the thriving cultural scene just moments away, the 'Downtown Condo' puts you at the epicenter of Auckland's cosmopolitan lifestyle. Embrace the energy of the city while enjoying the comfort and elegance of this exclusive urban retreat.`
}, {
    id: 15,
    name: "Mountain Chalet",
    location: "Otago",
    price: "$900,000",
    bedrooms: 3,
    bathrooms: 2.5,
    image: "https://source.unsplash.com/category/house/?mountain+chalet",
    description: `Welcome to the enchanting 'Mountain Chalet', nestled amidst the rugged beauty of Otago's majestic peaks. This charming alpine retreat offers a cozy sanctuary where rustic charm meets modern comfort. Step inside to discover a warm and inviting interior, complete with wood-paneled walls, exposed beams, and a crackling fireplace to ward off the mountain chill.<br><br>Outside, panoramic views of snow-capped mountains and lush forests await, providing a breathtaking backdrop for outdoor adventures in every season. Whether you're seeking a tranquil escape or an adrenaline-fueled mountain getaway, the 'Mountain Chalet' offers the perfect blend of seclusion and adventure in one of New Zealand's most picturesque landscapes.`
}, {
    id: 16,
    name: "Sunny Bungalow",
    location: "Hawkes Bay",
    price: "$280,000",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://source.unsplash.com/category/house/?sunny+bungalow",
    description: `Welcome to 'Sunny Bungalow', nestled in the heart of picturesque Hawke's Bay. This charming bungalow invites you to embrace a lifestyle of relaxation and natural beauty. Bathed in sunlight, the property features spacious living areas adorned with large windows framing stunning views of the surrounding landscape.<br><br>Enjoy lazy mornings on the sun-drenched patio or explore the vibrant local community just moments away. With its warm ambiance and convenient location, 'Sunny Bungalow' offers the perfect blend of comfort and tranquility for your New Zealand retreat.`
}, {
    id: 17,
    name: "Oceanview Condo",
    location: "West Coast",
    price: "$420,000",
    bedrooms: 2,
    bathrooms: 1.5,
    image: "https://source.unsplash.com/category/house/?oceanview+condo",
    description: `Welcome to the 'Oceanview Condo', where coastal living meets luxury comfort on the stunning west coast of the North Island. Perched high above the rolling waves, this exquisite condo offers breathtaking panoramic views of the vast Pacific Ocean. Step onto your private balcony and immerse yourself in the sights and sounds of seaside serenity.<br><br>ssssssssssssssssInside, modern design meets coastal charm, with spacious living areas and sleek finishes throughout. Whether you're savoring sunset cocktails or strolling along the pristine shoreline just moments away, the 'Oceanview Condo' offers the ultimate escape for those seeking tranquility by the sea.`
}, {
    id: 18,
    name: "Country Farmhouse",
    location: "Manawatu",
    price: "$550,000",
    bedrooms: 4,
    bathrooms: 3,
    image: "https://source.unsplash.com/category/house/?country+farmhouse",
    description: `"Welcome to the idyllic charm of the 'Country Farmhouse' nestled in the picturesque landscapes of the Manawatū-Whanganui region. This enchanting farmhouse offers a timeless retreat where rustic elegance meets rural tranquility. Surrounded by rolling hills and lush greenery, the property boasts a sense of serenity and seclusion, providing the perfect escape from the hustle and bustle of city life.<br><br>Step inside to discover cozy interiors adorned with authentic farmhouse details and warm wood accents. Whether you're unwinding by the fireplace or exploring the vast countryside just beyond your doorstep, the 'Country Farmhouse' invites you to experience the simple joys of country living in style.`
}, {
    id: 19,
    name: "City Penthouse",
    location: "Taranaki",
    price: "$1,200,000",
    bedrooms: 3,
    bathrooms: 2,
    image: "https://source.unsplash.com/category/house/?city+penthouse",
    description: `"Experience urban luxury at its finest with the 'City Penthouse' perched atop the vibrant skyline of Taranaki. This sleek and sophisticated penthouse offers unparalleled views of the cityscape, stretching out to the majestic Mount Taranaki in the distance. Step into a world of contemporary elegance, where high ceilings, designer finishes, and floor-to-ceiling windows create an atmosphere of spaciousness and style.<br><br>Whether you're entertaining guests in the expansive living area, indulging in gourmet meals prepared in the state-of-the-art kitchen, or relaxing on the private terrace overlooking the bustling city below, the 'City Penthouse' redefines cosmopolitan living in the heart of Taranaki."`
}, {
    id: 20,
    name: "Lakeside Retreat",
    location: "Waikato",
    price: "$780,000",
    bedrooms: 5,
    bathrooms: 4,
    image: "https://source.unsplash.com/category/house/?lakeside+retreat",
    description: `Discover the essence of serenity at the 'Lakeside Retreat', nestled along the tranquil shores of Waikato's pristine lake. This idyllic sanctuary offers a haven of peace and natural beauty, where panoramic views of the glistening waters and lush surroundings greet you at every turn. Step inside to find a cozy yet elegant interior, thoughtfully designed to harmonize with the serene landscape outside.<br><br>Whether you're unwinding by the fireplace, savoring sunset views from the deck, or exploring the scenic trails meandering through the nearby forests, the 'Lakeside Retreat' promises a retreat like no other—a perfect fusion of luxury and nature in the heart of Waikato's enchanting countryside.`
}];

// get input elements from html
// our filters
const locationFilter = document.getElementById("location");
const bedroomsFilter = document.getElementById("bedrooms");
const bathroomsFilter = document.getElementById("bathrooms");
const pricemin = document.getElementById("pricemin");
const pricemax = document.getElementById("pricemax");

// sorting buttons
const highToLowButton = document.getElementById("price-high-to-low");
const lowToHighButton = document.getElementById("price-low-to-high");
const alphabeticalButton = document.getElementById("alphabetical-btn");

// click functions
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

// sorting buttons clicks
highToLowButton.addEventListener("click", function() {
    const filteredProperties = filterProperties();
    const sortedProperties = sortPropertiesByPriceHighToLow(filteredProperties); //sorting filtered properties by high to low
    populateResults(sortedProperties);
    console.log("high to low click working");
});

lowToHighButton.addEventListener("click", function() {
    const filteredProperties = filterProperties();
    const sortedProperties = sortPropertiesByPriceLowToHigh(filteredProperties); //sorting filtered properties by low to high
    populateResults(sortedProperties);
    console.log("low to high click working");
});

alphabeticalButton.addEventListener("click", function() {
    const filteredProperties = filterProperties();
    const sortedProperties = sortPropertiesAlphabetical(filteredProperties);
    populateResults(sortedProperties);
    console.log("alphabetical click working");
});

// filter functions & logic
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

// sorting functions

// sort results - sort by price - low to high
function sortPropertiesByPriceLowToHigh (properties) {
    return properties.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/\$/g, "").replace(/,/g, ""));
        const priceB = parseFloat(b.price.replace(/\$/g, "").replace(/,/g, ""));
        return priceA - priceB;
    })
}

// Sort Results - sort by price - high to low
function sortPropertiesByPriceHighToLow(properties) {
    return properties.sort((a, b) => {
        const priceA = parseFloat(a.price.replace(/\$/g, '').replace(/,/g, ''));
        const priceB = parseFloat(b.price.replace(/\$/g, '').replace(/,/g, ''));
        return priceB - priceA;
    })
}

// sort results - alphabetical order
function sortPropertiesAlphabetical(properties) {
    return properties.sort((a,b) => {
        const nameA = a.name.toLowerCase(); // property a name to lowercase
        const nameB = b.name.toLowerCase(); // property b name to lowercase
        return nameA.localeCompare(nameB);
    })
}

// population functions

// filter and populate results
function filterAndPopulateResults() {
    const filteredProperties = filterProperties();
    // sort properties (low to high) before populating 
    // const sortedProperties = sortPropertiesByPriceLowToHigh(filteredProperties); // sorting filtered properties in previous line
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

            // re-initialise swiper instances
            const swipers = document.querySelectorAll(".swiper");
            swipers.forEach(swiperEl => {
                new Swiper(swiperEl, {
                    direction: "vertical",
                    loop: "true",
                    pagination: {
                        el: ".swiper-pagination",
                        clickable: true,
                    }
                })
            });
        });
    }

}

// modal function

function attachModalToImages() {
    // get all the images from the property
    const images = document.querySelectorAll(".property-image");
    // get the details modal from the html
    const detailsModal = document.getElementById("details-modal");

    // run for loop over the image array to add a click event to each image
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener("click", function(event) {
            const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
            detailsModal.dataset.scrollPosition = scrollPosition // storing scroll position in the modal dataset
            const rect = event.target.getBoundingClientRect(); // get the position of the clicked image relative to the viewport
            const imageTop = rect.imageTop + scrollPosition; // calculate the top position of the clicked image
            const windowHeight = window.innerHeight;
            const dialogHeight = detailsModal.offsetHeight; // height of the modal
            const viewportTop = scrollPosition;

            let dialogTop = viewportTop + (windowHeight - dialogHeight) / 2; // calculate the top position for the dialog to be centered

            // ensure that the dialog doesn't go above or below the viewport
            if (dialogTop < imageTop) {
                dialogTop = imageTop; // place the dialog just below the clicked image if there's enough space
            } else if (dialogTop + dialogHeight > windowHeight + viewportTop) {
                dialogTop = windowHeight + viewportTop - dialogHeight; // place the dialog at the bottom  of the viewport if there's not enough space
            }

            detailsModal.style.top = dialogTop + "px"; // set top position of the dialog

            console.log("img click working");
            detailsModal.showModal();
            document.body.classList.add("modal-open"); // add class to disable scrolling

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
        document.body.classList.remove("modal-open"); // remove scroll lock class
        const scrollPosition = detailsModal.dataset.scrollPosition || 0;
        window.scrollTo(0, scrollPosition);
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
        <button class="booking-button" id="booking-btn">Enquire Now</button>
    `
}

// swiper js
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