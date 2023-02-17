// this substitutes the the css :target and :checked which open/close the navbar and the popup

const allLinks = document.querySelectorAll('a:link');
const checkbox = document.querySelector('#navi-toggle');
const popup = document.querySelector('#popup');

allLinks.forEach((link) => {
  const href = link.getAttribute('href');

  if (href === '#') {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
  if (href !== '#' && href.startsWith('#') && href !== '#popup') {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: 'smooth' });
      checkbox.checked = false;
      popup.style.visibility = 'hidden';
    });
  }
  if (href == '#popup') {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      popup.style.visibility = 'visible';
      popup.style.opacity = '1';
      popup.firstElementChild.style.opacity = '1';
      popup.firstElementChild.style.transform =
        'translate(-50%, -50%) scale(1)';
    });
  }
});
