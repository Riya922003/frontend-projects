const form = document.getElementById('emailForm');
const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  if (!email || !isValidEmail(email)) {
    errorMessage.style.display = 'block';
  } else {
    errorMessage.style.display = 'none';
    // Redirect to another page
    window.location.href = 'index1.html';
  }
});

function isValidEmail(email) {
  // Basic email validation using regular expression
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
