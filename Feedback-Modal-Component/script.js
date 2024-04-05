function rate(rating) {
  // Remove selected class from all ratings
  const ratings = document.querySelectorAll('.rating div a');
  ratings.forEach(a => {
    a.classList.remove('selected');
  });

  // Add selected class to the clicked rating
  const clickedRating = document.querySelector(`.rating div a[data-rating="${rating}"]`);
  clickedRating.classList.add('selected');
}

function cancel() {
  // Reset rating
  const ratings = document.querySelectorAll('.rating div a');
  ratings.forEach(a => {
    a.classList.remove('selected');
  });
}

function submitRating() {
  // Get selected rating
  const selectedRating = document.querySelector('.rating div a.selected');
  if (selectedRating) {
    const ratingValue = selectedRating.getAttribute('data-rating');
    alert(`You rated FrontendPro ${ratingValue}/10. Thank you for your feedback!`);
  } else {
    alert('Please select a rating before submitting.');
  }
}
