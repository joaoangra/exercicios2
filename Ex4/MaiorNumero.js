function encontrarMaior() {
    let numeros = [
        parseInt(document.getElementById("num1").value),
        parseInt(document.getElementById("num2").value),
        parseInt(document.getElementById("num3").value),
        parseInt(document.getElementById("num4").value),
        parseInt(document.getElementById("num5").value),
        parseInt(document.getElementById("num6").value)
    ];
    
    let maiorNumero = Math.max(...numeros);

    document.getElementById("resultado").innerHTML = `O maior número digitado foi: ${maiorNumero}`;
}