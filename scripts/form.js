// Product array
const products = [
  { id: 1, name: 'Smart Thermostat' },
  { id: 2, name: 'Solar Panel System' },
  { id: 3, name: 'Home Security Camera' },
  { id: 4, name: 'Robot Vacuum Cleaner' },
  { id: 5, name: 'Air Purifier' },
];

// Populate product select options
function populateProducts() {
  const selectElement = document.getElementById('product');

  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    selectElement.appendChild(option);
  });
}

// Initialize form
document.addEventListener('DOMContentLoaded', () => {
  populateProducts();
});

// Copyright year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById(
  'lastModified'
).textContent = `Last Modified: ${document.lastModified}`;
