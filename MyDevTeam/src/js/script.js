// scroll com o header sumindo
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        header.classList.add('hidden');
    } else {
        header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});

let button = document.getElementById("orcamento");
button.addEventListener("click", () => {
    button.style.backgroundColor = "black";
})