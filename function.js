function calcularIMC() {
    const pesodapessoa = parseFloat(document.getElementsByName('Peso')[0].value);
    const alturadapessoa = parseFloat(document.getElementsByName('Altura')[0].value);
    const nomedapessoa = document.getElementsByName('Nome')[0].value;

    if (isNaN(pesodapessoa) || isNaN(alturadapessoa)) {
        alert("Deixa de graça e escreve direito");
     
    }

    const imc = pesodapessoa/(alturadapessoa*alturadapessoa);
    const resultado = document.getElementById('Resultado');
    resultado.innerHTML = "Olá " + nomedapessoa + ", seu IMC é: " + imc.toFixed(2);

    switch (true) {
        case (imc < 16):
            resultado.innerHTML += " <br> Você está abaixo do peso (grau III)";
            break;
        case (imc >= 16 && imc < 16.99):
            resultado.innerHTML += " <br> Você está abaixo do peso (grau II)";
            break;
        case (imc >= 17 && imc < 18.49):
            resultado.innerHTML += " <br> Você está abaixo do peso (grau I)";
            break;
        case (imc >= 18.5 && imc < 24.99):
            resultado.innerHTML += " <br> Seu peso é normal";
            break;
        case (imc >= 25 && imc < 29.99):
            resultado.innerHTML += " <br> Você está com sobrepeso";
            break;
        case (imc >= 30 && imc < 34.99):
            resultado.innerHTML += " <br> Você está com obesidade (grau I)";
            break;
        case (imc >= 35 && imc < 39.99):
            resultado.innerHTML += " <br> Você está com obesidade (grau II)";
            break;
        default:
            resultado.innerHTML += " <br> Você está com obesidade mórbida (grau III)";
            break;
    }
}

function mostrarInformacoes() {
    window.location.href = "https://www.tuasaude.com/imc/"; 
}