document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (name && email && message) {
        document.getElementById("status").innerText = "Message Sent!";
        document.getElementById("status").style.color = "green";
        this.reset();
    } else {
        document.getElementById("status").innerText = "Please fill in all fields";
        document.getElementById("status").style.color = "red";
    }
});
