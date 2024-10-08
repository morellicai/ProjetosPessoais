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
// Botão de Orçamento
let button = document.getElementById("orcamento");
button.addEventListener("click", () => {
    button.style.backgroundColor = "black";
    button.style.color = "#4db8ff";
})

// Serviços

function card(event, type) {
    event.preventDefault();

    // Todos os IDs dos cartões
    const cards = [
        "card-desktop", 
        "card-web", 
        "card-mobile", 
        "card-ecommerce", 
        "card-design",
        "card-suporte", 
        "card-gestao"
    ];

    // Exibe o cartão correto com base no 'type' e oculta os outros
    cards.forEach(cardId => {
        const cardElement = document.getElementById(cardId);
        cardElement.style.display = (cardId === `card-${type}`) ? "block" : "none";
    });
}

// Adicionando os event listeners de forma genérica
document.querySelectorAll('.list-services').forEach(button => {
    button.addEventListener('click', function(event) {
        const type = this.getAttribute('data-type');
        card(event, type);
    });
});

function devs(event, type){
    event.preventDefault();
    const cards = [
        "card-eddie", 
        "card-felipe", 
        "card-elias", 
        "card-dmitri",
        "card-pedro",
        "card-caio"
    ];
    cards.forEach(cardId => {
        const cardElement = document.getElementById(cardId);
        cardElement.style.display = (cardId === `card-${type}`) ? "flex" : "none";
    });
}

// Adicionando os event listeners de forma genérica
document.querySelectorAll('a[data-type]').forEach(button => {
    button.addEventListener('click', function(event) {
        const type = this.getAttribute('data-type');
        console.log('Clique detectado no botão com tipo: ' + type);
        devs(event, type);
    });
});