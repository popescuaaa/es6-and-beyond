// Select elements from the DOM
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value; // converting to number

const populateUI = () => {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((s, i) => {
          // indexOf return -1 for negative answer
          if (selectedSeats.indexOf(i) > -1) {
              s.classList.add('selected');
          }
      });
  }
  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
  if (selectedMovieIndex !== null) {
      movieSelect.selectedIndex = selectedMovieIndex;
  }
};

populateUI();

const setMovieData = (index, price) => {
  localStorage.setItem("selectedMovieIndex", index);
  localStorage.setItem("moviePrice", price);
};

const updateSelectedCount = () => {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  // spead operator => passing the values
  // we need seats indexes for local storage
  const seatsIndex = [...selectedSeats].map((s) => [...seats].indexOf(s));

  // save <string, string>
  localStorage.setItem("selectedSeats", JSON.stringify(seatsIndex));

  const numberOfSeats = selectedSeats.length;
  count.innerText = numberOfSeats;
  total.innerText = numberOfSeats * ticketPrice;
};

// Even listeners
movieSelect.addEventListener("change", (e) => {
  ticketPrice = e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount(e.target.value);
});

container.addEventListener("click", (e) => {
  /**
        e.target => will return the explicit DOM element that is clicked
    */
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");
    updateSelectedCount();
  }
});

// initial count and total
updateSelectedCount();