const container = document.querySelector(".container");
const seats = document.querySelectorAll(".seat:not(reserved)");
const amount = document.getElementById("amount");
const option = document.getElementById("movies");

getFromLocalStorage();
culculateTicet();

container.addEventListener("click", function (e) {
  let myTarget = e.target;

  if (
    myTarget.classList.contains("seat") &&
    !myTarget.classList.contains("reserved")
  ) {
    myTarget.classList.toggle("selected");
    culculateTicet();
  }
});

option.addEventListener("change", function () {
  culculateTicet();
});

function culculateTicet() {
  const selectedSeats = container.querySelectorAll(".seat.selected");
  const selectedSeatCount = selectedSeats.length;
  let price = option.value;
  amount.innerHTML = price * selectedSeatCount;

  const seatsArr = [];
  const selecedSeatsArr = [];

  // bu bolumde nodeList i Array a donusturuyoruz.
  seats.forEach(function (seat) {
    seatsArr.push(seat);

    if (seat.classList.contains("selected")) {
      selecedSeatsArr.push(seat);
    }
  });

  // secili olan indexleri tutuyoruz
  const selecedSeatsIndex = selecedSeatsArr.map(function (seat) {
    return seatsArr.indexOf(seat);
  });
  console.log(selecedSeatsIndex);

  saveToLocalStorge(selecedSeatsIndex);
}

function saveToLocalStorge(selecedSeatsIndex) {
  localStorage.setItem("selecedSeatsIndex", JSON.stringify(selecedSeatsIndex)); // secili koltuklarin indexi
  localStorage.setItem("selectedMovieIndex", option.selectedIndex); // movie indexi
}

function getFromLocalStorage() {
  const selectedSeatLocalStorage = JSON.parse(
    localStorage.getItem("selecedSeatsIndex")
  );

  if (
    selectedSeatLocalStorage !== null &&
    selectedSeatLocalStorage.length > 0
  ) {
    seats.forEach(function (seat, index) {
      if (selectedSeatLocalStorage.indexOf(index) > -1) {
        seat.classList.add("selected");
      }
    });
  }

  const selectedMovieLocalStorege = JSON.parse(
    localStorage.getItem("selectedMovieIndex")
  );
  if (selectedMovieLocalStorege !== null) {
    option.selectedIndex = selectedMovieLocalStorege; //option.selectedIndex etiketine ait ozellik
  }
}
