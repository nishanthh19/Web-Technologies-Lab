document.addEventListener('DOMContentLoaded', () => {
    const bookButtons = document.querySelectorAll('.book-button');
    const bookingForm = document.getElementById('booking-form');
    const form = document.getElementById('form');
    const cancelButton = document.getElementById('cancel-button');
    const movieInput = document.getElementById('movie');
    const seatMap = document.getElementById('seat-map');

    const seatLayout = [
        // Array of seat status: false = available, true = occupied
        [false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false],
        [false, false, false, false, false, false, false, false, false, false],
    ];

    function renderSeats() {
        seatMap.innerHTML = '';
        seatLayout.forEach((row, rowIndex) => {
            row.forEach((seat, seatIndex) => {
                const seatElement = document.createElement('div');
                seatElement.classList.add('seat');
                if (seat) {
                    seatElement.classList.add('occupied');
                }
                seatElement.addEventListener('click', () => {
                    if (!seat && !seatElement.classList.contains('selected')) {
                        seatElement.classList.add('selected');
                    } else if (seatElement.classList.contains('selected')) {
                        seatElement.classList.remove('selected');
                    }
                });
                seatMap.appendChild(seatElement);
            });
        });
    }

    bookButtons.forEach(button => {
        button.addEventListener('click', () => {
            const movieTitle = button.parentElement.querySelector('h3').textContent;
            movieInput.value = movieTitle;
            bookingForm.classList.remove('hidden');
            renderSeats();
        });
    });

    cancelButton.addEventListener('click', () => {
        bookingForm.classList.add('hidden');
    });

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const selectedSeats = Array.from(seatMap.querySelectorAll('.seat.selected')).length;
        alert(`Booking confirmed for ${movieInput.value} with ${selectedSeats} seats.`);
        bookingForm.classList.add('hidden');
        form.reset();
        seatMap.querySelectorAll('.seat.selected').forEach(seat => seat.classList.remove('selected'));
    });
});
