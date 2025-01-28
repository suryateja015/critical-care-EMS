function showBookingForm() {
    const form = document.getElementById('booking');
    form.scrollIntoView({ behavior: 'smooth' });
}

document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let pickup = document.getElementById('pickup').value;
    let drop = document.getElementById('drop').value;

    // Hide the booking form and show confirmation message
    document.getElementById('bookingForm').style.display = 'none';
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';

    // Show the QR code
    const qrCodeSection = document.getElementById('qrCodeSection');
    qrCodeSection.style.display = 'block';

    // Generate the QR code with booking details
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const qrCodeData = `Pickup: ${pickup}, Drop-off: ${drop}`;
    new QRCode(qrCodeContainer, {
        text: qrCodeData,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    // Simulate hospital and metro station confirmation
    setTimeout(function() {
        alert("Your booking has been confirmed by both the nearest hospital and the metro station.");
    }, 3000); // Simulate delay for confirmation notification
});
