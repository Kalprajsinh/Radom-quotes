let currentQuote = '';
let currentQuote2 = '';
let currentQuote3 = '';
function getRandomQuote() {
  fetch("https://random-quote-generator2.p.rapidapi.com/randomQuote", {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "random-quote-generator2.p.rapidapi.com",
      "X-RapidAPI-Key": "6129d442d1mshc5b312e0de8c457p183411jsn6a0870a6274a"
    }
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then(data => {

      currentQuote = data[0].Quote;
      currentQuote2 = data[0].Author;
      currentQuote3 = data[0].Tags;

      document.getElementById("quote-text").textContent = "\❝ " + currentQuote + "\❞ - by " + currentQuote2;
    })
    .catch(error => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

function createNewPost() {
  if (currentQuote) {

    const backendEndpoint = 'https://jsonplaceholder.typicode.com/posts';

    fetch(backendEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"

      },
      body: JSON.stringify({ title: 'New Quote Post', body: currentQuote, userId: 1 })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Error");
        }
        console.log("New post created successfully!");
      })
      .catch(error => {
        console.error("There was a problem", error);
      });
  } else {
    console.error("No quote");
  }
}