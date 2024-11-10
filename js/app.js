let jogosAlugados = 0;

function quantidadeJogosAlugados (){
    console.log (`Total de jogos alugados: ${jogosAlugados}`)
}

function alterarStatus(id){
    let jogoSelecionado = document.getElementById(`game-${id}`);
    let imagemJogo = jogoSelecionado.querySelector('.dashboard__item__img');
    let botao = jogoSelecionado.querySelector('.dashboard__item__button');
    let nomeJogo = jogoSelecionado.querySelector('.dashboard__item__name');
    
    if (botao.classList.contains(`dashboard__item__button--return`)) {
        if(confirm(`Deseja devolver ${nomeJogo.textContent}?`)) {
            botao.classList.remove('dashboard__item__button--return');
            imagemJogo.classList.remove('dashboard__item__img--rented');
            botao.innerHTML = 'Alugar';
            jogosAlugados--;
        }
    } else {
        botao.classList.add('dashboard__item__button--return');
        imagemJogo.classList.add('dashboard__item__img--rented');
        botao.innerHTML = 'Devolver';
        jogosAlugados++;
    }

    quantidadeJogosAlugados();
}

document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});