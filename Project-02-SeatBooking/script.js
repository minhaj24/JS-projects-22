// get elements

const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)');
const count = document.querySelector('.count');
const total = document.querySelector('.total');
const movieSelect = document.getElementById('movie');

let ticketPrice = +movieSelect.value;

populateUI();

//get data from local storage to populate ui

function populateUI(){
    const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));

    if( selectedSeats !== null && selectedSeats.length >0 ){
        seats.forEach((seat, index) => {
            if(selectedSeats.indexOf(index) > -1){
                seat.classList.add('selected');
            }
        });

        const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
        if(selectedMovieIndex !== null) {
            movieSelect.selectedIndex = selectedMovieIndex ;
        }
    }
}

    const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');
    if(selectedMovieIndex !== null) {
        movieSelect.selectedIndex = selectedMovieIndex ;
    }

function updateSelectedCount() {

    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    const seatsIndex = [...selectedSeats].map(seat => [...seats].indexOf(seat));
    console.log(seatsIndex);
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount*ticketPrice;
    localStorage.setItem('selectedSeats',JSON.stringify(seatsIndex));
}

//save movie data to local storage
function setMovieData (movieIndex, moviePrice) {
    localStorage.setItem('selectedMovieIndex', movieIndex);
    localStorage.setItem('selectedMoviePrice', moviePrice);
}

//Event listener for seat and price manipulation

container.addEventListener('click', e => {
    if(e.target.classList.contains('seat') &&
        !e.target.classList.contains('occupied'));
    {
        e.target.classList.toggle('selected');
        updateSelectedCount();
    }
})

// Event listener for movie selector

movieSelect.addEventListener('change', e => {
    ticketPrice = +e.target.value;
    setMovieData(e.target.selectedIndex, e.target.value);
    updateSelectedCount();
})

//initial cost and total count

updateSelectedCount(); 