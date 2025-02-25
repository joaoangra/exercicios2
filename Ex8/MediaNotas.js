document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        alert('Por favor, insira todas as notas corretamente!');
        return;
    }

    
    const media = (nota1 + nota2 + nota3) / 3;

   
    let situacao = '';

    if (media >= 6) {
        situacao = 'Aprovado';
    } else if (media >= 4) {
        situacao = 'Recuperação';
    } else {
        situacao = 'Reprovado';
    }

    
    document.getElementById('resultado').innerText = `Média: ${media.toFixed(2)} - Status: ${situacao}`;
});