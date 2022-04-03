'use strict'


//variaveis
let btn = document.getElementById('btn');
let btnCalcular = document.getElementById('calcular');
let btnLimpar = document.getElementById('limpar');

//eventos
btnCalcular.addEventListener('click', imc, false);
btnLimpar.addEventListener('click', limpeza, false);
btn.addEventListener('click',theme,false);

//funções

function theme(e){
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if (className == 'light-theme') {
        this.textContent = 'Pink';
    } else {
        this.textContent = 'light-theme';
    }
    console.log('Current class name:' +className);
}





function imc(e) {
    let altura = document.getElementById('altura').value;
    let peso = document.getElementById('peso').value;

    if (altura === 0 || peso === 0) {
        alert("por favor preencha todos os campos!");
    }
    else {
        let alt = altura.replace(',', '.');
        let pes = peso.replace(',', '.');
        let imc = pes/ Math.pow(alt, 2).toFixed(1);
        document.getElementById('res').innerHTML = imc;
    }
}

function limpeza(e) {
    document.getElementById('altura').value = "";
    document.getElementById('peso').value = "";
    document.getElementById('res').innerHTML = "";
}

