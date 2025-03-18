const inputAmigo = document.getElementById('amigo');
const listaAmigos = document.getElementById('listaAmigos');
const resultado = document.getElementById('resultado');

let amigos = [];

function formatarNome(nome) {
    return nome.charAt(0).toUpperCase() + nome.slice(1).toLowerCase();
}

function adicionarAmigo() {
    const nome = inputAmigo.value.trim(); 
    const nomeNormalizado = nome.toLowerCase();

    if (nome === '') {
        alert('Por favor, digite um nome válido!');
        return; 
    }

    if (!amigos.some(amigo => amigo.normalizado === nomeNormalizado)) {
        amigos.push({ original: nome, normalizado: nomeNormalizado });
        const itemLista = document.createElement('li');
        itemLista.textContent = nome;
        listaAmigos.appendChild(itemLista); 

        inputAmigo.value = '';
        alert('Nome adicionado com sucesso!');
    } else {
        alert('Este nome já foi adicionado!');
    }
}

function limparLista() {
    amigos = []; 
    listaAmigos.innerHTML = ''; 
    resultado.innerHTML = '';
    alert('Lista de nomes limpa com sucesso!');
}


function sortearAmigo() {
    
    if (amigos.length < 2) {
        alert('Adicione pelo menos 2 amigos para sortear!');
        return; 
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    resultado.innerHTML = ''; 
    const itemResultado = document.createElement('li');
    itemResultado.textContent = formatarNome(amigoSorteado.original);
    resultado.appendChild(itemResultado);

    amigos.splice(indiceSorteado, 1);
}
