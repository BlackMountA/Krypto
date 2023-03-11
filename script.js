'use strict'
const nav = document.querySelector('nav');
const header = document.querySelector('header');
const btns =document.querySelectorAll('.sec-btn')
// function addHover(btn) {
// }
btns.forEach(btn => {
  console.log(btn)
  btn.addEventListener('mouseover', function () {
    btn.classList.add('sec-hover')
  })
  btn.addEventListener('mouseleave', function () {
  btn.classList.remove('sec-hover')})
})
const stickyNav = function (entries) {
  const [entry] = entries;

    if (entry.isIntersecting) {
        nav.classList.add('nav-sticky')
    }
    
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
});

headerObserver.observe(nav);

