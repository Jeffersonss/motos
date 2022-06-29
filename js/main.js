function createObserver(elemento, classe) {
    
    const observer = new IntersectionObserver((entradas) => {
       
        entradas.forEach((entrada) => {
            if (entrada.intersectionRatio > 0) {
                entrada.target.classList.add(classe);
                observer.unobserve(entrada.target);
            } 
        })
    })
    observer.observe(elemento);
}

const tipos = document.querySelectorAll('.tipos li');
tipos.forEach((tipo) => {
    createObserver(tipo, 'item-ativo');
})


