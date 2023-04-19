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

if (window.innerWidth >= 1024) { // Only execute on desktop devices
  window.addEventListener('scroll', function() {
    const resumeDiv = document.getElementById('resume-job');
    const distanceFromTop = resumeDiv.getBoundingClientRect().top;
    if (distanceFromTop < window.innerHeight * 0.5) {
      resumeDiv.style.height = 'margin-bottom: var(--vspace-2);'; /* Change this to the expanded height you want */
    } else {
      resumeDiv.style.height = 'margin-bottom: var(--vspace-1_75);'; /* Change this to the initial height you set earlier */
    }
  });
}

const expandButton = document.querySelector('.expand-button');
const expandableContent = document.querySelector('.expandable-content');

expandButton.addEventListener('click', () => {
  expandableContent.classList.toggle('expanded');
  if (expandableContent.classList.contains('expanded')) {
    expandButton.textContent = 'Collapse';
  } else {
    expandButton.textContent = 'Expand';
  }
});

