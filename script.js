document.addEventListener('DOMContentLoaded', function () {

    // 1. Lógica para mudar o fundo do Header ao rolar a página
    const header = document.getElementById('header');
    if (header) {
        function scrollHeader() {
            // Quando a rolagem for maior que 50 pixels, adiciona a classe .scrolled
            if (window.scrollY >= 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        }
        window.addEventListener('scroll', scrollHeader);
    }

    // 2. Lógica do Carrossel de Ofertas (Splide.js)
    const ofertasCarousel = document.getElementById('ofertas-carousel');
    if (ofertasCarousel) {
        new Splide('#ofertas-carousel', {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '1.5rem',
            pagination: false, // Esconde os "pontinhos" de navegação
            autoplay: true,
            interval: 4000,
            pauseOnHover: true,
            breakpoints: {
                992: {
                    perPage: 2, // 2 slides em tablets
                },
                768: {
                    perPage: 1, // 1 slide em celulares
                },
            },
        }).mount();
    }

    // 3. Lógica para animar elementos ao aparecerem na tela (efeito reveal)
    const revealElements = document.querySelectorAll('.reveal');
    if (revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }

});
