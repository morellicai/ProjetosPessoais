// scroll com o header sumindo
let lastScrollTop = 0;
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    // Usando scrollY ao invés de pageYOffset
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rolando para baixo, esconder o cabeçalho
        header.classList.add('hidden');
    } else {
        // Rolando para cima, mostrar o cabeçalho
        header.classList.remove('hidden');
    }
    
    lastScrollTop = scrollTop;
});