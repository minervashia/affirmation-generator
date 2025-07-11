function displayAffirmation(response) {
  console.log("affirmation generated");
  //response.data.answer will have poem in it
  new Typewriter("#affirmation", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateAffirmation(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "9117d16f27ad34748062df20bto34069";
  let prompt = `User  instructions are :Generate an Affirmation about${instructionsInput.value}`;
  let context =
    "You are an affirmation expert and love to write short positive affirmations.Sign your affirmation with 'SheCodes AI'inside a <strong> element  .Do not show html format.Seperate each line with <br / Your misson is to generate a 4 line poem formatted basic HTML. Only follow user instructions";
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  //BUILD API URL
  //CALL THE API (define as a function)
  let affirmationElement = document.querySelector("#affirmation");
  affirmationElement.classList.remove("hidden");
  affirmationElement.innerHTML = `<div class="generating">⏳ Generating an Affirmation about ${instructionsInput.value}</div>`;

  console.log("Generating affirmation");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayAffirmation);
  //DISPLAY GENERATED POEM
}

let affirmationFormElement = document.querySelector("#affirmation-generator-form");
affirmationFormElement.addEventListener("submit", generateAffirmation);
