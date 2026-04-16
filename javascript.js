
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function (e) {
        if (this.hash !== "") {
            e.preventDefault();
            const alvo = document.querySelector(this.hash);

            if (alvo) {
                alvo.scrollIntoView({
                    behavior: "smooth"
                });
            }
        }
    });
});


function ir() {
    window.location.href = "index.html";
}

function ir2() {
    window.location.href = "Sobre.html";
}

function ir3() {
    window.location.href = "Servicos.html";
}

function ir4() {
    window.location.href = "Novidades.html";
}

function ir5() {
    window.location.href = "Contato.html";
}

function mais() {
    window.location.href = "Sobre.html";
}


const elementos = document.querySelectorAll('.texto');


elementos.forEach(el => {
    el.classList.add('animar');

    
    el.style.opacity = "1";
});

function animarScroll() {
    const topoTela = window.innerHeight * 0.85;

    elementos.forEach(el => {
        const posicao = el.getBoundingClientRect().top;

        if (posicao < topoTela) {
            el.classList.add("ativo");
        }
    });
}

window.addEventListener("scroll", animarScroll);
window.addEventListener("load", animarScroll);