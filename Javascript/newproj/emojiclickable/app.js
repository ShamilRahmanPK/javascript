const closedEmoji = document.querySelector(".closed");
const openEmoji = document.querySelector(".open");

//event listner

closedEmoji.addEventListener("click", () => {
    if (openEmoji.classList.contains(".open")) {
       openEmoji.classList.add(".active"); 
    }
});

