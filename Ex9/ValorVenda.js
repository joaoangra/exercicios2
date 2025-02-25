document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const produto = document.getElementById('produto').value;
    const preco = parseFloat(document.getElementById('preco').value);

    
    if (!produto || isNaN(preco) || preco <= 0) {
        alert('Por favor, selecione um produto e insira um preço válido!');
        return;
    }

   
    let desconto = 0;
    let descricaoDesconto = '';

    
    switch (produto) {
        case 'camisa':
            desconto = 0.20; 
            descricaoDesconto = '20% de desconto';
            break;
        case 'bermuda':
            desconto = 0.10; 
            descricaoDesconto = '10% de desconto';
            break;
        case 'calca':
            desconto = 0.15; 
            descricaoDesconto = '15% de desconto';
            break;
    }

   
    const valorDesconto = preco * desconto;
    const valorFinal = preco - valorDesconto;

   
    document.getElementById('resultado').innerHTML = `
        Produto: ${produto.charAt(0).toUpperCase() + produto.slice(1)} <br>
        Preço Original: R$ ${preco.toFixed(2)} <br>
        Desconto: ${descricaoDesconto} <br>
        Valor com Desconto: R$ ${valorFinal.toFixed(2)}
    `;
});