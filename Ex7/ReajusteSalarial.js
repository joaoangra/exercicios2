function calcularReajuste() {
    let salarioAtual = parseFloat(document.getElementById("salario").value);
    let resultado = document.getElementById("resultado");

  
    if (isNaN(salarioAtual) || salarioAtual <= 0) {
        resultado.textContent = "Por favor, insira um valor de salário válido.";
        resultado.style.color = "red";
        return;
    }

    let salarioNovo;

    if (salarioAtual >= 1500.00 && salarioAtual < 1750.00) {
        salarioNovo = salarioAtual * 1.15;
    } else if (salarioAtual >= 1750.00 && salarioAtual < 2000.00) {
        salarioNovo = salarioAtual * 1.12;
    } else if (salarioAtual >= 2000.00 && salarioAtual < 3000.00) {
        salarioNovo = salarioAtual * 1.09;
    } else if (salarioAtual >= 3000.00) {
        salarioNovo = salarioAtual * 1.06;
    } else {
        resultado.textContent = "Salário inválido. O salário deve ser no mínimo R$ 1.500,00.";
        resultado.style.color = "red";
        return;
    }

    resultado.textContent = `Novo salário com reajuste: R$ ${salarioNovo.toFixed(2)}`;
    resultado.style.color = "green";
}