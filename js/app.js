//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// Seleciona os elementos do DOM
const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');


// Array para armazenar os nomes
let amigos = [];

function formatarNome(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
}

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const nome = inputAmigo.value.trim(); // Captura o valor do campo de texto
    const nomeNormalizado = nome.toLowerCase();

    if (nome === '') {
        alert('Por favor, digite um nome válido.');
        return; // Impede o processamento se o nome for vazio
    }

    // Verifica se o nome é válido e não foi adicionado antes
    if (!amigos.some(amigo => amigo.normalizado === nomeNormalizado)) {
        amigos.push({ original: nome, normalizado: nomeNormalizado });// Adiciona o nome ao array
        const itemLista = document.createElement('li'); // Cria um novo <li>
        itemLista.textContent = nome; // Define o texto do <li>
        listaAmigos.appendChild(itemLista); // Adiciona o <li> à lista visual

        inputAmigo.value = ''; // Limpa o campo de texto
        alert('Nome adicionado com sucesso!'); // Feedback para o usuário
    } else {
        alert('Este nome já foi adicionado!');
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
    itemResultado.textContent = formatarNome(amigoSorteado.original);
    resultado.appendChild(itemResultado);


    // Remove o nome sorteado da lista de amigos (op)
    amigos.splice(indiceSorteado, 1);
}
