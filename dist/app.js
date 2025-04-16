"use strict";
// Sample car data
const cars = [
    {
        id: 1,
        name: "Tesla Model S",
        image: "https://public.readdy.ai/ai/img_res/7eecf19a143a6d6c774b222f5284bfaf.jpg",
        price: 200,
        type: "Electric",
        features: ["Autopilot", "Long Range", "Premium Interior"]
    },
    {
        id: 2,
        name: "Porsche 911",
        image: "https://public.readdy.ai/ai/img_res/1b26af570af3678ea10f64a7931c59a2.jpg",
        price: 300,
        type: "Sports",
        features: ["High Performance", "Leather Seats", "Sport Mode"]
    },
    {
        id: 3,
        name: "Audi A8",
        image: "https://public.readdy.ai/ai/img_res/cefec961333d223e59d27d3114ebd5d7.jpg",
        price: 250,
        type: "Luxury",
        features: ["All-Wheel Drive", "Premium Sound", "Massage Seats"]
    }
];
// Function to create car cards
function createCarCard(car) {
    const featuresList = car.features.map(feature => `<li class="mb-1"><i class="fas fa-check text-success me-2"></i>${feature}</li>`).join('');
    return `
        <div class="col-md-6 col-lg-4" data-aos="fade-up">
            <div class="card car-card h-100">
                <img src="${car.image}" class="card-img-top" alt="${car.name}" style="height: 200px; object-fit: cover;">
                <div class="card-body">
                    <h5 class="card-title">${car.name}</h5>
                    <p class="card-text text-muted">${car.type}</p>
                    <ul class="list-unstyled">
                        ${featuresList}
                    </ul>
                    <div class="d-flex justify-content-between align-items-center mt-3">
                        <span class="h5 mb-0">$${car.price}/day</span>
                        <a href="#booking" class="btn btn-primary">Book Now</a>
                    </div>
                </div>
            </div>
        </div>
    `;
}
// Function to populate car grid
function populateCarGrid() {
    const carGrid = document.getElementById('carGrid');
    if (carGrid) {
        carGrid.innerHTML = cars.map(car => createCarCard(car)).join('');
    }
}
function handleBookingSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const bookingData = {
        pickupLocation: formData.get('pickupLocation'),
        dropoffLocation: formData.get('dropoffLocation'),
        pickupDate: formData.get('pickupDate'),
        returnDate: formData.get('returnDate')
    };
    // Here you would typically send this data to your backend
    console.log('Booking submitted:', bookingData);
    alert('Booking submitted successfully!');
}
// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateCarGrid();
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
});
