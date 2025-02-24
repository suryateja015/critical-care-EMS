// Handle patient form submission
document.getElementById("patientForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Patient information saved!");
});

// Show booking confirmation notification
document.getElementById("confirmBooking").addEventListener("click", function() {
    let notification = document.getElementById("notification");

    notification.style.opacity = "1";
    notification.style.visibility = "visible";

    // Hide notification after 3 seconds
    setTimeout(() => {
        notification.style.opacity = "0";
        notification.style.visibility = "hidden";
    }, 3000);
});

// Handle payment selection
document.getElementById("makePayment").addEventListener("click", function() {
    let paymentMethod = document.getElementById("paymentMethod").value;
    
    if (!paymentMethod) {
        alert("Please select a payment method before proceeding.");
        return;
    }
    
    alert(`Payment successful via ${paymentMethod}!`);
});

// Function to fetch nearby hospitals based on user's location
function fetchNearbyHospitals() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                // Simulated API call delay
                setTimeout(() => {
                    let hospitals = [
                        "City Hospital",
                        "Green Valley Medical Center",
                        "Sunrise Health Clinic",
                        "Global Care Hospital",
                        "Rapid Response Emergency Unit"
                    ];
                    let hospitalList = document.getElementById("hospitalList");
                    hospitalList.innerHTML = "";

                    hospitals.forEach(hospital => {
                        let li = document.createElement("li");
                        li.className = "list-group-item";
                        li.textContent = hospital;
                        hospitalList.appendChild(li);
                    });
                }, 1000);
            },
            error => {
                alert("Unable to fetch location. Please enable GPS and try again.");
            }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

// Fetch hospitals on page load
fetchNearbyHospitals();
