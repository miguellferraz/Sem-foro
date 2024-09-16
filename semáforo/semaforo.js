function controlarSemaforo() {
    const vermelho = document.querySelector('.vermelho');
    const amarelo = document.querySelector('.amarelo');
    const verde = document.querySelector('.verde');

    let etapa = 0;

    function alterarLuzes() {
        if (etapa === 0) {
            vermelho.classList.add('acesso');
            vermelho.classList.remove('apagado');
            verde.classList.add('apagado');
            amarelo.classList.add('apagado');
            etapa = 1;
        } else if (etapa === 1) {
            verde.classList.add('acesso');
            verde.classList.remove('apagado');
            vermelho.classList.add('apagado');
            amarelo.classList.add('apagado');
            etapa = 2;
        } else if (etapa === 2) {
            amarelo.classList.add('acesso');
            amarelo.classList.remove('apagado');
            vermelho.classList.add('apagado');
            verde.classList.add('apagado');
            etapa = 0;
        }
    }

    setInterval(alterarLuzes, 1000);
}

document.addEventListener('DOMContentLoaded', controlarSemaforo);
