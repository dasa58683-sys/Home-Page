// const images = [
//     "offer.jpeg",
//     "summer sale.jpeg",
//     "festive1.jpeg"
// ];

// let index = 0;

// setInterval(() => {

//     index++;

//     if(index >= images.length){
//         index = 0;
//     }

//     document.getElementById("heroImage").src =
//         images[index];

// }, 5000);


const bannerImage = document.getElementById("bannerImage");

const bannerImages = [
    "idependence.jpeg",
    "discount.jpeg"
];

let currentImage = 0;

setInterval(() => {

    // Fade out
    bannerImage.style.opacity = 0;

    setTimeout(() => {

        // Change image
        currentImage++;

        if(currentImage >= bannerImages.length){
            currentImage = 0;
        }

        bannerImage.src = bannerImages[currentImage];

        // Fade in
        bannerImage.style.opacity = 1;

    }, 500);

}, 5000);

const searchInput = document.getElementById("searchInput");
const clearBtn = document.getElementById("clearBtn");

searchInput.addEventListener("input", () => {

    if (searchInput.value.trim() !== "") {
        clearBtn.style.display = "block";
    } else {
        clearBtn.style.display = "none";
    }

});

clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    clearBtn.style.display = "none";
    searchInput.focus();
});

// Set countdown to 24 hours from now
let countdownDate = new Date().getTime() + (24 * 60 * 60 * 1000);

let timer = setInterval(function () {

    let now = new Date().getTime();
    let distance = countdownDate - now;

    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hours").innerHTML =
        hours.toString().padStart(2, "0");

    document.getElementById("minutes").innerHTML =
        minutes.toString().padStart(2, "0");

    document.getElementById("seconds").innerHTML =
        seconds.toString().padStart(2, "0");

    if (distance < 0) {
        clearInterval(timer);
        document.querySelector(".deal-timer").innerHTML =
            "Offer Expired";
    }

}, 1000);

const wishlistButtons = document.querySelectorAll('.wishlist-toggle');

wishlistButtons.forEach(button => {
    button.addEventListener('click', () => {

        button.classList.toggle('active');

        const icon = button.querySelector('i');

        if (button.classList.contains('active')) {
            icon.classList.remove('fa-regular');
            icon.classList.add('fa-solid');
        } else {
            icon.classList.remove('fa-solid');
            icon.classList.add('fa-regular');
        }

    });
});

const heroImage = document.getElementById("heroImage");
const dots = document.querySelectorAll(".dot");

const images = [
    "offer.jpeg",
    "summer sale.jpeg",
    "festive1.jpeg"
];

let currentIndex = 0;

function updateSlider() {

    // Change image
    heroImage.src = images[currentIndex];

    // Remove active class from all dots
    dots.forEach(dot => dot.classList.remove("active"));

    // Add active class to current dot
    dots[currentIndex].classList.add("active");
}

setInterval(() => {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    updateSlider();

}, 5000);


const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    sidebar.classList.add("show");
    overlay.classList.add("show");
});

closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
});

overlay.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
});

const menuItems = document.querySelectorAll(".menu-list li");

menuItems.forEach(item => {
    item.addEventListener("click", function () {

        // Remove active class from all items
        menuItems.forEach(li => li.classList.remove("active"));

        // Add active class to clicked item
        this.classList.add("active");

    });
});

/* ===========================
   CATEGORY PANEL
=========================== */

const categoryBtn = document.getElementById("categoryBtn");
const categoryPanel = document.getElementById("categoryPanel");
const categoryOverlay = document.getElementById("categoryOverlay");
const closeCategory = document.getElementById("closeCategory");

const leftItems = document.querySelectorAll(".left-item");
const categoryContents = document.querySelectorAll(".category-content");

/* ===========================
   OPEN PANEL
=========================== */

categoryBtn.addEventListener("click", () => {

    if (categoryPanel.classList.contains("show")) {

        categoryPanel.classList.remove("show");
        categoryOverlay.classList.remove("show");
        document.body.style.overflow = "auto";

    } else {

        categoryPanel.classList.add("show");
        categoryOverlay.classList.add("show");
        document.body.style.overflow = "hidden";

    }

});

/* ===========================
   CLOSE PANEL
=========================== */

function closeCategoryPanel(){

    categoryPanel.classList.remove("show");
    categoryOverlay.classList.remove("show");

    document.body.style.overflow = "auto";

}

closeCategory.addEventListener("click", closeCategoryPanel);

categoryOverlay.addEventListener("click", closeCategoryPanel);


/* ===========================
   CATEGORY SWITCHING
=========================== */

leftItems.forEach(item => {

    item.addEventListener("click", () => {

        // Left Menu Active
        leftItems.forEach(btn => btn.classList.remove("active"));
        item.classList.add("active");

        // Right Content Active
        const category = item.dataset.category;

        categoryContents.forEach(content => {

            content.classList.remove("active");

        });

        document.getElementById(category).classList.add("active");

    });

});


/* ===========================
   SWIPE DOWN TO CLOSE
=========================== */

const categoryHandle = document.getElementById("categoryHandle");

// let startY = 0;

// categoryHandle.addEventListener("touchstart", (e) => {
//     startY = e.touches[0].clientY;
// });

// categoryHandle.addEventListener("touchmove", (e) => {
//     let currentY = e.touches[0].clientY;

//     if (currentY - startY > 80) {
//         closeCategoryPanel();
//     }
// });

let startY = 0;
let currentY = 0;

const handle = document.querySelector(".category-handle");

handle.addEventListener("touchstart", (e) => {
    startY = e.touches[0].clientY;
});

handle.addEventListener("touchmove", (e) => {

    currentY = e.touches[0].clientY;

    let move = currentY - startY;

    if (move > 0) {
        categoryPanel.style.transform = `translateY(${move}px)`;
    }

});

handle.addEventListener("touchend", () => {

    let move = currentY - startY;

    if (move > 120) {

        categoryPanel.classList.remove("show");
        categoryOverlay.classList.remove("show");

    } else {

        categoryPanel.style.transform = "translateY(0)";

    }

    categoryPanel.style.transform = "translateY(0)";

});

function goToSearch() {
    window.location.href = "https://dasa58683-sys.github.io/search/";
}