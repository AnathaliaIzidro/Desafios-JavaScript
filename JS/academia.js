document.getElementById('desafio1').addEventListener('click', function() {
    let input = prompt("Informe os números separados por vírgula:");
    let numbers = input.split(',').map(Number);
    
    if (numbers.some(isNaN)) {
        alert("Por favor, insira apenas números.");
        return;
    }

    let media = numbers.reduce((a, b) => a + b, 0) / numbers.length;
    alert("A média é: " + media);
});
