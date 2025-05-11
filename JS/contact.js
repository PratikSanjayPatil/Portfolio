
document.getElementById("contact-form").addEventListener("submit", async function(event) {
    event.preventDefault();
    const form = event.target;
    const status = document.getElementById("form-status");

    const formData = new FormData(form);

    try {
    const response = await fetch("https://formspree.io/f/mgvklake", {
        method: "POST",
        body: formData,
        headers: {
        'Accept': 'application/json'
        }
    });

    if (response.ok) {
        status.textContent = "Message sent successfully!";
        status.className = "text-success";
        form.reset();
    } else {
        status.textContent = "Oops! There was a problem.";
        status.className = "text-danger";
    }
    } catch (error) {
    status.textContent = "Failed to send. Try again later.";
    status.className = "text-danger";
    }
});
