function generateVerse(event) {
  event.preventDefault();


  new Typewriter(".verse", {
    strings: ["The Lord is my shepherd, I shall not want"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });

}

let verseformElement = document.querySelector(".form");
verseformElement.addEventListener("submit", generateVerse);
