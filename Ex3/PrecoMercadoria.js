function calcularAumento() {
    
    const nome = document.getElementById("productName").value;
    const preco = parseFloat(document.getElementById("productPrice").value);

    
    if (nome === "" || isNaN(preco) || preco <= 0) {
        alert("Por favor, insira o nome e o preço da mercadoria corretamente.");
        return;
    }

   
    let aumento = 0;
    if (preco < 1000) {
        aumento = preco * 0.05; 
    } else {
        aumento = preco * 0.07; 
    }

    
    const novoPreco = preco + aumento;

   
    const resultadoDiv = document.getElementById("result");
    resultadoDiv.innerHTML = `Mercadoria: ${nome}<br>Preço Original: R$ ${preco.toFixed(2)}<br>Aumento: R$ ${aumento.toFixed(2)}<br><strong>Novo Preço: R$ ${novoPreco.toFixed(2)}</strong>`;
}