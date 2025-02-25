function classificarTriangulo() {
    const ladoA = parseFloat(document.getElementById('ladoA').value);
    const ladoB = parseFloat(document.getElementById('ladoB').value);
    const ladoC = parseFloat(document.getElementById('ladoC').value);

 
    if (isNaN(ladoA) || isNaN(ladoB) || isNaN(ladoC) || ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
        alert("Por favor, insira valores válidos e positivos para os lados.");
        return;
    }

    let tipo = '';

   
    if (ladoA === ladoB && ladoB === ladoC) {
        tipo = 'Equilátero';
    } else if (ladoA === ladoB || ladoB === ladoC || ladoA === ladoC) {
        tipo = 'Isósceles';
    } else {
        tipo = 'Escaleno';
    }


    document.getElementById('tipoTriangulo').innerText = `Tipo do Triângulo: ${tipo}`;
}