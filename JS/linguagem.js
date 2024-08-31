document.getElementById('desafio3').addEventListener('click', function() {
    function invertArray(arr) {
        let inverted = [];
        for (let i = arr.length - 1; i >= 0; i--) {
            inverted.push(arr[i]);
        }
        return inverted;
    }

    let input = prompt("Informe os elementos do array separados por vírgula:");
    let array = input.split(',');

    let result = invertArray(array);
    alert("Array invertido: " + result.join(','));
});
