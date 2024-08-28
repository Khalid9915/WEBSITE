let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let hill6 = document.getElementById('hill6');
let header=document.getElementById('header')



window.addEventListener('scroll', () => {
    let value = window.scrollY;

    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    // hill1.style.top = value * 1 + 'px';
    hill1.style.top = value * 0.5 + 'px';
    hill6.style.top = value * -0.1 + 'px';

});
document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) { // Adjust this value as needed
        header.classList.add('minimized');
    } else {
        header.classList.remove('minimized');
    }
});
