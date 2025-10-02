// Temple data array
const temples = [
  {
    templeName: 'Aba Nigeria',
    location: 'Aba, Nigeria',
    dedicated: '2005, August, 7',
    area: 11500,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg',
  },
  {
    templeName: 'Manti Utah',
    location: 'Manti, Utah, United States',
    dedicated: '1888, May, 21',
    area: 74792,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg',
  },
  {
    templeName: 'Payson Utah',
    location: 'Payson, Utah, United States',
    dedicated: '2015, June, 7',
    area: 96630,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg',
  },
  {
    templeName: 'Yigo Guam',
    location: 'Yigo, Guam',
    dedicated: '2020, May, 2',
    area: 6861,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg',
  },
  {
    templeName: 'Washington D.C.',
    location: 'Kensington, Maryland, United States',
    dedicated: '1974, November, 19',
    area: 156558,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg',
  },
  {
    templeName: 'Lima Perú',
    location: 'Lima, Perú',
    dedicated: '1986, January, 10',
    area: 9600,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg',
  },
  {
    templeName: 'Mexico City Mexico',
    location: 'Mexico City, Mexico',
    dedicated: '1983, December, 2',
    area: 116642,
    imageUrl:
      'https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg',
  },
  {
    templeName: 'Kinshasa Democratic Republic of the Congo',
    location: 'Kinshasa, Democratic Republic of the Congo',
    dedicated: '2019, April, 14',
    area: 12000,
    imageUrl:
      'https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg',
  },
  {
    templeName: 'Kyiv Ukraine',
    location: 'Kyiv, Ukraine',
    dedicated: '2010, August, 29',
    area: 22184,
    imageUrl:
      'https://churchofjesuschristtemples.org/assets/img/temples/_temp/134-Kyiv-Ukraine-Temple.jpg',
  },
  {
    templeName: 'Taipei Taiwan',
    location: 'Taipei, Taiwan',
    dedicated: '1984, November, 17',
    area: 9945,
    imageUrl:
      'https://churchofjesuschristtemples.org/assets/img/temples/taipei-taiwan-temple/taipei-taiwan-temple-8296-main.jpg',
  },
];

// Function to create temple card
function createTempleCard(temple) {
  const figure = document.createElement('figure');
  figure.className = 'temple-card';
  figure.innerHTML = `
        <img src="${temple.imageUrl}" alt="${
    temple.templeName
  } Temple" loading="lazy">
        <figcaption>
            <h3>${temple.templeName} Temple</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
        </figcaption>
    `;
  return figure;
}

// Function to filter temples
function filterTemples(filter = 'all') {
  const gallery = document.getElementById('temple-gallery');
  gallery.innerHTML = ''; // Clear current display

  const filteredTemples = temples.filter(temple => {
    const dedicatedYear = parseInt(temple.dedicated.split(',')[0]);
    switch (filter) {
      case 'old':
        return dedicatedYear < 1900;
      case 'new':
        return dedicatedYear > 2000;
      case 'large':
        return temple.area > 90000;
      case 'small':
        return temple.area < 10000;
      default:
        return true;
    }
  });
  filteredTemples.forEach(temple => {
    gallery.appendChild(createTempleCard(temple));
  });

  // Update heading
  document.querySelector('h2').textContent =
    filter.charAt(0).toUpperCase() + filter.slice(1) + ' Temples';
}

// Set up navigation event listeners
document.querySelectorAll('#main-nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const filter = e.target.dataset.filter;
    filterTemples(filter);
  });
});

// Toggle menu functionality
document.getElementById('menu-button').addEventListener('click', () => {
  document.getElementById('main-nav').classList.toggle('open');
});

// Initialize the page with all temples
filterTemples();

// Copyright year and last modified date
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById(
  'lastModified'
).textContent = `Last Modified: ${document.lastModified}`;
