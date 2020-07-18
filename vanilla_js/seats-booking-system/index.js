// Select elements from the DOM
const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieSelect = document.getElementById("movie");

let ticketPrice = +movieSelect.value; // converting to number


const updateSelectedCount = () => {
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const numberOfSeats = selectedSeats.length;
    count.innerText = numberOfSeats;
    total.innerText = numberOfSeats * ticketPrice;
}

// Even listeners
movieSelect.addEventListener('change', (e) => {
    ticketPrice = e.target.value;
    updateSelectedCount();
});

container.addEventListener("click", (e) => {
    /**
        e.target => will return the explicit DOM element that is clicked
    */
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
      e.target.classList.toggle('selected');
      updateSelectedCount();
  }
});
