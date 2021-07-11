// adjust header on scroll down
const header = document.querySelector('header');
const headerMain= document.querySelector('header main');
const headerHeight = header.getBoundingClientRect().bottom;

window.addEventListener('scroll',function() {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > headerHeight) {
    header.classList.add('scrolled-down');
    headerMain.classList.add('scrolled-down');
  } else {
    header.classList.remove('scrolled-down');
    headerMain.classList.remove('scrolled-down');
  }
});

// auto-update year
document.querySelector('.year').innerHTML = new Date().getFullYear();