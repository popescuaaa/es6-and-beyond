const ariclesShowcase = document.getElementById('showcase');
const searchButton = document.getElementById('search-button');
const searchBar = document.getElementById('search-bar');

const API_KEY = 'aa2197669263422d9d2b829c3fbc797f';
let searchTopic = '';

const getArticles = async (topic) => {

}

const populateUI = () => {
  
}

// Event listeners
searchBar.addEventListener('change', (e) => {
  e.preventDefault();
  searchTopic = e.target.value;
})

searchButton.addEventListener('click', (e) => {
  e.preventDefault();
})