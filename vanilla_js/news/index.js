const articlesShowcase = document.querySelector(".showcase");
const searchButton = document.getElementById("search-button");
const searchBar = document.getElementById("search-bar");

const API_KEY = "aa2197669263422d9d2b829c3fbc797f";
let searchTopic = "";
let articles = [];

const getArticles = async (topic) => {
  const url = `https://newsapi.org/v2/everything?q=bitcoin&from=2020-07-19&sortBy=popularity&apiKey=aa2197669263422d9d2b829c3fbc797f`;
  const req = new Request(url);

  fetch(req)
    .then((response) => {
      console.log("Success!", response);
    })
    .catch((err) => {
      console.warn("Something went wrong.", err);
    });
};

// Map articles to list elements
const populateUI = async () => {
  await getArticles("bitcoin");

  if (articles.length === 0) {
    let node = document.createElement("LI");
    let textNode = document.createTextNode("Retriving data...");
    node.appendChild(textNode);
    articlesShowcase.appendChild(node);
  }
};

// Event listeners
searchBar.addEventListener("change", (e) => {
  e.preventDefault();
  searchTopic = e.target.value;
});

searchButton.addEventListener("click", (e) => {
  e.preventDefault();
});

populateUI();
