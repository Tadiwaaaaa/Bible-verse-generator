function displayVerse(response){
  console.log("poem generated");
   new Typewriter(".verse", {
     strings: response.data.answer,
     autoStart: true,
     delay: 1,
     cursor: "",
   });


}

function generateVerse(event) {
  event.preventDefault();

  let instructionInput = document.querySelector(".instruction");

  let apiKey = "bb9tdd6f8a38d9fb4774eo8499ffbe03";
  let prompt = `User Instruction: Generate a bible verse about ${instructionInput.value}`;
  let context = "You are a Christian growing their knowledge and relationship with God. Your goal is to memorize as many bible verses as possible. Make sure to follow the user instruction to generate the correct bible verse in basic HTML. Encapsulate the whole verse in the <i></i> element including the name of the verse";
  let apiUrl =
    `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

    console.log("generating verse ");
    console.log(`Prompt: ${prompt}`);
    console.log(`Context: ${context}`);


    axios.get(apiUrl).then(displayVerse);


}

let verseformElement = document.querySelector(".form");
verseformElement.addEventListener("submit", generateVerse);
