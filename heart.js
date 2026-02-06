const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseenter", () => {
    const x = Math.random() * 200 - 100;
    const y = Math.random() * 80 - 40;

    noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

function openHeart() {
    document.getElementById("heart").style.display = "none";
    document.querySelector(".btn-area").style.display = "none";
    document.getElementById("message").style.display = "block";
}
