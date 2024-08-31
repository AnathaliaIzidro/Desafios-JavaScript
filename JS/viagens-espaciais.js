document.getElementById('desafio4').addEventListener('click', function() {
    function squareDigits(num) {
        return Number(num.toString().split('').map(function(digit) {
            return Math.pow(parseInt(digit), 2);
        }).join(''));
    }

    let number = parseInt(prompt("Informe um número inteiro:"));
    
    if (isNaN(number)) {
        alert("Por favor, insira um número inteiro.");
        return;
    }

    let result = squareDigits(number);
    alert("Resultado: " + result);
});
