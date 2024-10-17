const containerInicio = document.getElementById('container-inicio');
const containerFinal = document.getElementById('container-final');
const marcadorTentativas = document.getElementById('marcador-tentativas');
const inputTentativas = document.getElementById('tentativas');
const inputPalpite = document.getElementById('palpite');
const resultadoFinal = document.getElementById('resultado');
const botao = document.getElementById('btn');

let numeroSecreto;
let tentativas;
let cont = 0;

function gerarNumeroSecreto() {
    return Math.floor(Math.random() * 26);
}

function comecar() {
    tentativas = Number(inputTentativas.value);
    if (tentativas > 0) {
        numeroSecreto = gerarNumeroSecreto();
        cont = 0;
        marcadorTentativas.textContent = tentativas;
        resultadoFinal.textContent = '';

        containerInicio.style.display = 'none';
        containerFinal.style.display = 'block';
        containerFinal.style.display = 'flex';
        containerFinal.style.flexDirection = 'column';
        containerFinal.style.gap = '1rem'
    } else {
        alert('Por favor, insira um número válido de tentativas.');
    };
};

function verificar() {
    const palpite = Number(inputPalpite.value);

    if (palpite < 0 || palpite > 25) {
        resultadoFinal.innerHTML += "Por favor, insira um número entre 0 e 25. <br>";
        return;
    };

    cont++;

    if (palpite < numeroSecreto) {
        resultadoFinal.innerHTML += `<span class='errou'>Errou! O número secreto é maior que ${palpite}. <br></span>`;
    } else if (palpite > numeroSecreto) {
        resultadoFinal.innerHTML += `<span class='errou'>Errou! O número secreto é menor que ${palpite}. <br></span>`;
    } else {
        resultadoFinal.innerHTML += `<span class='acertou'>Parabéns! Você acertou o número ${numeroSecreto} em ${cont} tentativas. <br> <span class='fim'>Fim de jogo!</span></span>`;
        inputPalpite.style.display = 'none';
        botao.style.display = 'none';
        return;
    };

    marcadorTentativas.innerHTML = tentativas - cont;

    if (cont >= tentativas) {
        resultadoFinal.innerHTML += `Perdeu! <br> Você não tem mais tentativas. O número secreto era ${numeroSecreto}. Fim de jogo!`;
        inputPalpite.style.display = 'none';
        botao.style.display = 'none';
    };

    inputPalpite.focus();
    inputPalpite.value = ' ';
};