
const calcular = document.getElementById('calcular');

function imc() {
    //alert ('test click');
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        resultado.textContent = valorIMC;

        let clasificacion = "";

        if (valorIMC < 18.5) {
            clasificacion = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            clasificacion = 'com peso ideal. Parabens!!!';
        } else if (valorIMC < 30) {
            clasificacion = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            clasificacion = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            clasificacion = 'com obesidade grau II.';
        } else {
            clasificacion = 'com obesidade grau III. Cuidado!!!.';
        }

        resultado.textContent = `${nome} seu IMC é ${valorIMC} e voce está ${clasificacion}`;

    } else {
        resultado.textContent = 'Prencha todos os campos'
    }

}
calcular.addEventListener('click', imc);
