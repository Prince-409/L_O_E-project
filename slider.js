const images = [
    { src: "images/1.jpg", caption: "A smile I never want to forget 💖" },
    { src: "images/2.jpg", caption: "Moments that feel like magic ✨" },
    { src: "images/3.jpg", caption: "Your happiness is my peace 💕" },
    { src: "images/4.jpg", caption: "Every memory leads back to you ❤️" },
    { src: "images/5.jpg", caption: "Time slows down with you ⏳" },
    { src: "images/6.jpg", caption: "Forever feels right with you 💘" }
];

let index = 0;
const slide = document.getElementById("slide");
const caption = document.getElementById("caption");

function showImage() {
    slide.src = images[index].src;
    caption.textContent = images[index].caption;
}

function next() {
    index = (index + 1) % images.length;
    showImage();
}

function prev() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

// Auto slideshow
setInterval(next, 3000);
