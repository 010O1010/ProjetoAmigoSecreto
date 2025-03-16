// Array global para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar um amigo ao array
function adicionarAmigo() {
    const entradaAmigo = document.getElementById('amigo');
    const nome = entradaAmigo.value.trim(); // Remove espaços em branco nos nomes na entrada

    // Verifica se o usuário adicionou algum nome
    if (!nome) {
        alert('Por favor, digite um nome.');
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nome);

    // Limpa o campo de entrada
    entradaAmigo.value = '';

    // Atualiza a lista de amigos na tela
    atualizarListaAmigos();
}

// Atualiza a lista de amigos na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada nome à lista
    amigos.forEach((amigo, index) => {
        const li = document.createElement('li');
        li.textContent = `${index + 1}. ${amigo}`;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear os amigos
function sortearAmigo() {
    // Verifica se há pelo menos dois amigos no array
    if (amigos.length < 2) {
        alert('Você precisa adicionar pelo menos dois amigos para realizar o sorteio.');
        return;
    }

    // Embaralha a lista de amigos
    const amigosEmbaralhados = embaralharArray([...amigos]);

    // Cria os pares de Amigo Secreto
    const resultado = [];
    for (let i = 0; i < amigosEmbaralhados.length; i++) {
        const amigoAtual = amigosEmbaralhados[i];
        const amigoSecreto = amigosEmbaralhados[(i + 1) % amigosEmbaralhados.length];
        resultado.push(`${amigoAtual} tirou ${amigoSecreto}`);
    }

    // Exibe o resultado na lista de resultados
    exibirResultado(resultado);
}

// Embaralhar um array usando o algoritmo Fisher-Yates
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca os elementos
    }
    return array;
}

// Exibe o resultado na tela
function exibirResultado(resultado) {
    const listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ''; // Limpa a lista de resultados

    // Adiciona cada par à lista de resultados
    resultado.forEach(par => {
        const li = document.createElement('li');
        li.textContent = par;
        listaResultado.appendChild(li);
    });
}