// Slide in when page loads
document.addEventListener("DOMContentLoaded", ()=>{
    document.body.classList.add("slide-in");
});

// Slide out when clicking links
document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", e => {
        const href = link.getAttribute("href");

        // Only slide out if the link is internal
        if (href && !href.startsWith("http") && !href.startsWith("#")) {
            e.preventDefault();
            document.body.classList.add("slide-out");

            setTimeout(() => {
                window.location.href = href;
            }, 200);
        }
    });
});
 
// Popup for table booking
const tableBtn = document.getElementById("bookTableBtn");
const bookingForm = document.getElementById("bookingForm");

if (tableBtn && bookingForm) {
    tableBtn.addEventListener("click", (e) => {
        if (!bookingForm.checkValidity()) {
            // Let the browser show its built‑in validation messages
            return;
        }

        e.preventDefault(); // stop actual submission
        alert("Thanks, you have successfully made a booking!");
    });
}

// Popup for event booking
document.querySelectorAll(".eventBookBtn").forEach(button => {
    button.addEventListener("click", () => {
        alert("Thanks, you have successfully booked an event!");
    });
});
