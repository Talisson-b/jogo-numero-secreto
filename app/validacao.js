function verificaSeOChutePossuiUmValorValido(Chute) {
    const numero = +Chute

    if (chuteForInvalido(numero)) {
        elementChute.innerHTML += '<div>Valor inválido</div>'
        return
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementChute.innerHTM += `
        <div> valor invalido: o numero secreto precisa estar entre ${menorValor} e ${maiorValor} </div>
        `
        return
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!!</h2>
            <h3>O numero secreto era ${numeroSecreto} </h3>

            <button  id="jogarNovamente" class="btn-jogar">JOGAR NOVAMENTE</button>
        `
    } else if (numero > numeroSecreto) {
        elementChute.innerHTML += `
        <div>O número secreto é menor <i class="fa-solid fa-arrow-down"></i></div>
        `
    } else {
        elementChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-arrow-up"></i></div>
        `
    }

}

function chuteForInvalido(numero) {
    return Number.isNaN(numero)
}


function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor
}


document.body.addEventListener('click', e => {
    if(e.target.id =='jogarNovamente') {
        window.location.reload ()
    }
})