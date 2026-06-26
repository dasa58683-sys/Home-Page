const images = [
    "/photos/hero.jpeg",
    "/photos/hero.png",
    "/photos/hero.jpg"
];

let index = 0;

setInterval(() => {

    index++;

    if(index >= images.length){
        index = 0;
    }

    document.getElementById("heroImage").src =
        images[index];

}, 5000);


const bannerImage = document.getElementById("bannerImage");

const bannerImages = [
    "/photos/idependence.jpeg",
    "/photos/discount.jpeg"
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