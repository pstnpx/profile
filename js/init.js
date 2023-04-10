// Scrolled Arrived
const skillBarItems = document.querySelectorAll('.skill-bar li');
const skillBarTopOffset = document.querySelector('.skill-bar').offsetTop;
const skillBarBottomOffset = skillBarTopOffset + document.querySelector('.skill-bar').offsetHeight;

window.addEventListener('scroll', function() {
  if (window.scrollY > skillBarTopOffset - window.innerHeight  && window.scrollY < skillBarBottomOffset) {
    skillBarItems.forEach(item => item.classList.add('show'));
  } else {
    skillBarItems.forEach(item => item.classList.remove('show'));
  }
});