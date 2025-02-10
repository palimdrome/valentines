// function handleNoClick() {
//     const noButton = document.querySelector(".no-button");
//     const yesButton = document.querySelector(".yes-button");
//     noButton.textContent = messages[messageIndex];
//     messageIndex = (messageIndex + 1) % messages.length;
//     const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
//     yesButton.style.fontSize = `${currentSize * 1.5}px`;
// }

// function handleYesClick() {
//     window.location.href = "yes_page.html";
// }

let noButton = document.getElementById("no");
let yesButton = document.getElementById("yes");
let messages = [
    "Are you sure?", "Really sure?", "Think again!", "Last chance!", "Come on...", "Say YES!", 
    "Please reconsider!", "You're breaking my heart!", "Why not?", "Give it a chance!", "I'm waiting...", 
    "Still no?", "You must be joking!", "Just say yes!", "Don't be so stubborn!", "I'll wash the dishes!", 
    "I'll do your dailies!", "I'll give you cuddles!", "This is your destiny!", "Give love a chance!"
];
let currentIndex = 0;
let yesSize = 18; // Initial font size in px

noButton.addEventListener("click", function() {
    if (currentIndex < messages.length) {
        noButton.textContent = messages[currentIndex];
        currentIndex++;
    } else {
        noButton.style.display = "none";
    }
    
    // Increase the Yes button size gradually
    yesSize += 20;
    yesButton.style.fontSize = yesSize + "px";
    yesButton.style.padding = (yesSize / 2) + "px";
});

yesButton.addEventListener("click", function() {
    window.location.href = "yes.html";
});