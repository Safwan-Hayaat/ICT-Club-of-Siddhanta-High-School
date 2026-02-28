/*
function updateHeaderPosition() {
  const header = document.getElementById('header');
  
  formerly, this was a javascipt code to make sure that the website looked fine on mobile, the headers position fixed.
  But if the headers height was too big then a large portion of the screen was basically invisible.
  so this code made sure that when the header height is over 30%, the position became relative.
  But now i learned that i can just do this with css media queries T_T
  
  
  if (!header) return;

  const viewportHeight = window.innerHeight;
  const headerHeight = header.offsetHeight;


  if (headerHeight > viewportHeight * 0.3) {
    header.classList.remove('fixed-header');
    header.classList.add('normal-header');
  } else {
    header.classList.remove('normal-header');
    header.classList.add('fixed-header');
  }
}



window.addEventListener('DOMContentLoaded', updateHeaderPosition);
window.addEventListener('resize', updateHeaderPosition);
window.addEventListener()

updateHeaderPosition();
*/

function showSidebar() {
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display ='flex'
}

function hideSidebar() {
  const sidebar = document.querySelector(".sidebar");
  sidebar.style.display = "none";
}

