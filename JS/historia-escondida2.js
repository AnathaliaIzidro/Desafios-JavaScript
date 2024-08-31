document.getElementById('desafio6').addEventListener('click', function() {
    function invertWords(str) {
        return str.split(' ').map(function(word) {
            return word.split('').reverse().join('');
        }).join(' ');
    }

    let input = prompt("Informe uma string:");
    let result = invertWords(input.toLowerCase());
    alert("Resultado: " + result);
});
