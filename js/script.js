const carro = document.querySelector('.carro');
const pipe = document.querySelector('.pipe');

const jump = () => {
    carro.classList.add('jump');

    setTimeout(() => {
        carro.classList.remove('jump');
    }, 500);

 }

 const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const carroPosition = +window.getComputedStyle(carro).bottom.replace('px', '');

    if (pipePosition <= 160 && pipePosition > 0 && carroPosition < 70) {

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        carro.style.animation = 'none';
        carro.style.bottom = `${carroPosition}px`;

        carro.src = './images/game-over.png';


        clearInterval(loop);

    }

 }, 10)


 document.addEventListener('keydown', (event) => {
    if (event.keyCode === 32) { // pular somente com o espaço
      jump();
    }
  });