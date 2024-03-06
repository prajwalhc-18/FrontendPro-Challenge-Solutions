document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); 

    alert("Form submitted successfully!"); // Display an alert when the form is submitted
  });
});
