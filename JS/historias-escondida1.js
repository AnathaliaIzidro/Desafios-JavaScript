document.getElementById('desafio5').addEventListener('click', function() {
    function findLargestLetter(str) {
        return str.split('').reduce(function(max, current) {
            return current > max ? current : max;
        });
    }

    let input = prompt("Informe uma string:");
    let filteredInput = input.replace(/[^a-z]/gi, '').toLowerCase();

    if (!filteredInput) {
        alert("Por favor, insira uma string válida.");
        return;
    }

    let result = findLargestLetter(filteredInput);
    alert("Maior letra: " + result);
});
