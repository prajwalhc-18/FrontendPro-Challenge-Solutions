document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    // Example: Send form data to server using Fetch API
    fetch("your-server-endpoint", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          // Form submitted successfully
          alert("Form submitted successfully!");
          // You can also reset the form
          form.reset();
        } else {
          // Form submission failed
          alert("Form submission failed. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred. Please try again later.");
      });
  });
});
