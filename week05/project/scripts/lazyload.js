// lazyload.js — intersection observer to add 'loaded' class for images
document.addEventListener('DOMContentLoaded', () => {
  const imgs = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '100px' }
    );
    imgs.forEach(img => io.observe(img));
  } else {
    imgs.forEach(img => img.classList.add('loaded'));
  }
});
