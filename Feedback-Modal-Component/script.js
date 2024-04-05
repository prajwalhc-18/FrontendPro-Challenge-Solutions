function rate(rating) {
  // Highlight selected rating
  const ratings = document.querySelectorAll('.rating div');
  ratings.forEach((div, index) => {
    if (index < rating) {
      div.classList.add('selected');
    } else {
      div.classList.remove('selected');
    }
  });
}

function cancel() {
  // Reset rating
  const ratings = document.querySelectorAll('.rating div');
  ratings.forEach(div => {
    div.classList.remove('selected');
  });
}

function submitRating() {
  // Get selected rating
  const selectedRating = document.querySelector('.rating div.selected a').innerText;
  alert(`You rated FrontendPro ${selectedRating}/10. Thank you for your feedback!`);
  // You can add further logic here to submit the rating to a server or perform other actions
}
