// JavaScript for contact form validation
document.addEventListener("DOMContentLoaded", function() {
    var form = document.getElementById("contact-form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;
        var message = document.getElementById("message").value;
        
        // Simple validation
        if (name && email && message) {
            alert(`Thank you, ${name}! Your message has been sent.`);
            form.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
});
