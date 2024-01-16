const form = document.getElementById('form-agenda');
const nomes = [];
const numeros = [];

let linhas = '';

form.addEventListener('submit', function(e) { 
    e.preventDefault();
    adicionaLinha();
    atualizaTabela()
})

function adicionaLinha() {
    const inputNomes = document.getElementById('nome-contato');
    const inputNumeros = document.getElementById('numero-contato');

    if (nomes.includes(inputNomes.value)) {
        alert(`O nome: ${inputNomes.value} já foi inserido!`)
    } 
    else if(numeros.includes(inputNumeros.value)) {
        alert(`O número: ${inputNumeros.value} já foi inserido!`)
    }
    else {  
        nomes.push(inputNomes.value);
        numeros.push(inputNumeros.value);

        let linha = '<tr>';
        linha += `<td>${inputNomes.value}</td>`;
        linha += `<td>${inputNumeros.value}</td>`;
        linha += `<td><img src="./images/contato.png"> </td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomes.value = '';
    inputNumeros.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
};
