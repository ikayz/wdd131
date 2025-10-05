// Handle review counter
document.addEventListener('DOMContentLoaded', () => {
  // Get current count from localStorage
  let reviewCount = parseInt(localStorage.getItem('reviewCount') || '0');

  // Increment count
  reviewCount++;

  // Update localStorage
  localStorage.setItem('reviewCount', reviewCount.toString());

  // Update display
  document.getElementById('reviewCount').textContent = reviewCount;
});
