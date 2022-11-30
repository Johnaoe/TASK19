const btn = document.querySelector('#btn');
const btn2 = document.querySelector('#btn2');
const info = document.querySelector('.info')

btn.addEventListener("click", (ea) => {
    info.classList.toggle('show-element');
    ea.target.classList.toggle('active');
});

btn2.addEventListener("click", (ea) => {
    info.classList.toggle('show-element');
    ea.target.classList.toggle('active');
});
