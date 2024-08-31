document.getElementById('desafio2').addEventListener('click', function() {
    function createChunks(n) {
        if (n <= 1) return "chunk";
        return "chunk-" + createChunks(n - 1);
    }

    let number = parseInt(prompt("Informe um número:"));
    
    if (isNaN(number) || number <= 0) {
        alert("Por favor, insira um número inteiro positivo.");
        return;
    }

    let result = createChunks(number);
    alert(result);
});
