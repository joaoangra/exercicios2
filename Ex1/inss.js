function calcularDesconto() {
    const salario = Number(document.getElementById('salario').value);
    const tetoINSS = 7087.22;
    
    let desconto = 0;
    let salarioFinal = salario;

    if (salario <= 1212) {
        desconto = salario * 0.075;
    } else if (salario <= 2427.35) {
        desconto = salario * 0.09;
    } else if (salario <= 3641.03) {
        desconto = salario * 0.12;
    } else if (salario <= 7087.22) {
        desconto = salario * 0.14;
    } else {
        desconto = tetoINSS * 0.14;
    }

    salarioFinal = salario - desconto;

    document.getElementById('desconto').innerText = `Desconto do INSS: R$ ${desconto.toFixed(2)}`;
    document.getElementById('salarioFinal').innerText = `Salário final: R$ ${salarioFinal.toFixed(2)}`;
}