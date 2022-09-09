let navPage = document.querySelector('.page-navigation');
let navToggle = document.querySelector('.page-navigation__toggle');

navPage.classList.remove('page-navigation--nojs');

navToggle.addEventListener('click', function () {
  if (navPage.classList.contains('page-navigation--closed')) {
    navPage.classList.remove('page-navigation--closed');
    navPage.classList.add('page-navigation--opened');
  } else {
    navPage.classList.add('page-navigation--closed');
    navPage.classList.remove('page-navigation--opened');
  }
});
