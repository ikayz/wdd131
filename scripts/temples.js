document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menu-button');
  const mainNav = document.getElementById('main-nav');

  menuButton.addEventListener('click', function () {
    mainNav.classList.toggle('open');
    if (mainNav.classList.contains('open')) {
      menuButton.innerHTML = '&#10005;';
    } else {
      menuButton.innerHTML = '&#9776;';
    }
  });

  // Set current year in footer
  const yearSpan = document.getElementById('currentyear');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
  // Set last modified date in footer
  const lastModified = document.getElementById('lastModified');
  if (lastModified) {
    lastModified.textContent = `Last Modified: ${document.lastModified}`;
  }
});
