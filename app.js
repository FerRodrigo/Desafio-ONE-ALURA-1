//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Seleciona os elementos do DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

// Array para armazenar os nomes
let amigos = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nome = inputAmigo.value.trim(); // Captura o valor do campo de texto

    // Verifica se o nome é válido e não foi adicionado antes
    if (nome !== '' && !amigos.includes(nome)) {
        amigos.push(nome); // Adiciona o nome ao array
        const itemLista = document.createElement('li'); // Cria um novo <li>
        itemLista.textContent = nome; // Define o texto do <li>
        listaAmigos.appendChild(itemLista); // Adiciona o <li> à lista visual
        inputAmigo.value = ''; // Limpa o campo de texto
    } else if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
    } else {
        alert('Por favor, digite um nome válido.');
    }
}

// Função para limpar a lista de nomes
function limparLista() {
    amigos = []; // Limpa o array de amigos
    listaAmigos.innerHTML = ''; // Limpa a lista visual de nomes
    resultado.innerHTML = ''; // Limpa o resultado do sorteio (opcional)
    alert('Lista de nomes limpa com sucesso!'); // Feedback para o usuário
}

// Função para sortear um amigo
function sortearAmigo() {
    // Verifica se há pelo menos 2 nomes na lista
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear!');
        return; // Interrompe a função
    }

    // Escolhe um nome aleatório da lista
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    // Exibe o nome sorteado na lista de resultados
    resultado.innerHTML = ''; // Limpa o resultado anterior
    const itemResultado = document.createElement('li');
    itemResultado.textContent = amigoSorteado;
    resultado.appendChild(itemResultado);

    // Remove o nome sorteado da lista de amigos (opcional)
    amigos.splice(indiceSorteado, 1);
}
