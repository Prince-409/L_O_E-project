function checkPassword() {
    const input = document.getElementById("password");
    const error = document.getElementById("error-msg");
    const card = document.querySelector(".lock-card");

    const correctPassword = "isha";

    if (input.value.trim().toLowerCase() === correctPassword) {
        error.style.color = "#d4ffea";
        error.innerHTML = "Welcome Isha ❤️ This heart belongs to you...";
        
        setTimeout(() => {
            window.location.href = "welcome.html";
        }, 1500);

    } else {
        error.style.color = "#fff";
        error.innerHTML = "Oops… only your name can unlock this 💔";
        card.classList.add("shake");

        setTimeout(() => {
            card.classList.remove("shake");
        }, 400);
    }
}
