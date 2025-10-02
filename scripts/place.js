document.addEventListener('DOMContentLoaded', function () {
  // Footer year
  const yearSpan = document.getElementById('currentyear');
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
  // Footer last modified
  const lastModified = document.getElementById('lastModified');
  if (lastModified)
    lastModified.textContent = `Last Modification: ${document.lastModified}`;

  // Weather static values
  const temp = 10;
  const wind = 5;
  const windchillSpan = document.getElementById('windchill');

  function calculateWindChill(t, v) {
    // Wind chill formula for Celsius
    return (
      13.12 +
      0.6215 * t -
      11.37 * Math.pow(v, 0.16) +
      0.3965 * t * Math.pow(v, 0.16)
    ).toFixed(1);
  }

  // Only show windchill if temp <= 10°C and wind > 4.8 km/h
  if (temp <= 10 && wind > 4.8) {
    windchillSpan.textContent = calculateWindChill(temp, wind) + ' °C';
  } else {
    windchillSpan.textContent = 'N/A';
  }
});
