const menuBtn = document.querySelector('.menu-btn');
const list = document.querySelector('.list');

menuBtn.addEventListener('click', function() {
    list.classList.toggle('show');
})

