function compararNumeros() {
    const num1 = parseInt(document.getElementById("num1").value);
    const num2 = parseInt(document.getElementById("num2").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(num1) || isNaN(num2)) {
        resultado.textContent = "Por favor, insira dois números válidos.";
        return;
    }

    if (num1 === num2) {
        resultado.textContent = "Os números são iguais.";
    } else {
        resultado.textContent = `Maior: ${Math.max(num1, num2)}, Menor: ${Math.min(num1, num2)}`;
    }
}