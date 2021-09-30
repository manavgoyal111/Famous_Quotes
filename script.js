fetch("https://quotes15.p.rapidapi.com/quotes/random/", {
  method: "GET",
  headers: {
    "x-rapidapi-host": "quotes15.p.rapidapi.com",
    "x-rapidapi-key": "1528cf9782msh0d036cb6b74d347p18a9d6jsne5da362b02fd",
  },
})
  .then((data) => data.json())
  .then((quoteData) => {
    const quoteText = quoteData.content;
    const quoteAuthor = "- " + quoteData.originator.name;

    const quoteTextEle = document.getElementById("quoteElement");
    const quoteAuthorEle = document.getElementById("quoteAuthor");

    quoteTextEle.innerHTML = quoteText;
    quoteAuthorEle.innerHTML = quoteAuthor;
  })
  .catch((err) => {
    console.error(err);
  });
