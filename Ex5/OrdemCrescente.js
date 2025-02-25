function ordenarNumeros() {
    let numeros = [
        parseInt(document.getElementById("num1").value),
        parseInt(document.getElementById("num2").value),
        parseInt(document.getElementById("num3").value),
        parseInt(document.getElementById("num4").value),
        parseInt(document.getElementById("num5").value)
    ];
    
    let numerosOrdenados = numeros.sort((a, b) => a - b);

    document.getElementById("resultado").innerHTML = 
        `Números em ordem crescente: ${numerosOrdenados.join(', ')}`;
}