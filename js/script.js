const carro = document.querySelector('.carro');

const jump = () => {
    carro.classList.add('jump');

    setTimeout(() => {
        carro.classList.remove('jump');
    }, 500);

 }

 const loop = setInterval(funcao, 10)



document.addEventListener('keydown', jump);