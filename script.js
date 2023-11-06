var options = {
    root: document.querySelector('.container'),
    rootMargin: '0px',
    threshold: 1.0 
};
var ob = new IntersectionObserver((entries, observer) => {
  entries[0].target.classList.toggle('red');
}, options);

document.querySelectorAll('p').forEach((item) => {
  ob.observe(item);
});