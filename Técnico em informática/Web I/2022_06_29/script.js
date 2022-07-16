
let filmes = [];

function inicializar() {
    filmes = JSON.parse(localStorage.getItem('filmes') || '[]');
    exibirFilmes();
}


function salvarFilme(event) {
    event.preventDefault();
    console.log('salvar filme');

    let id = document.querySelector('#idFilme').value;
    let titulo = document.querySelector('#titulo').value;
    let link = document.querySelector('#link').value;

    if (id) {
        let index = filmes.findIndex(f => f.id == id);
        filmes[index].titulo = titulo;
        filmes[index].link = link;
    } else {
        let filme = {
            id: Math.random().toString(36).substring(2),
            titulo: titulo,
            link: link
        };
    
        filmes.push(filme);
    }

    localStorage.setItem('filmes', JSON.stringify(filmes));    

    exibirFilmes();

    document.querySelector('#idFilme').value = null;
    document.querySelector('#titulo').value = null;
    document.querySelector('#link').value = null;
}

function exibirFilmes() {
    let template = '';
    for (let i = 0; i < filmes.length; i++) {
        template = template + '<div class="filme">';
        template = template + `<p>${filmes[i].titulo}</p>`;
        template = template + `<img src="${filmes[i].link}" ></img>`;
        template = template + `<button type="button" onclick="editarFilme('${filmes[i].id}')">Editar</button>`;
        template = template + `<button type="button" onclick="excluirFilme('${filmes[i].id}')">Excluir</button>`;
        template = template + '</div>';
    }    
    document.querySelector('#listaDeFilmes').innerHTML = template;
}

function excluirFilme(id) {
    console.log('id ', id);
    let index = filmes.findIndex(f => f.id == id);
    filmes.splice(index, 1);
    exibirFilmes();
}

function editarFilme(id) {
    let index = filmes.findIndex(f => f.id == id);

    document.querySelector('#idFilme').value = filmes[index].id;
    document.querySelector('#titulo').value = filmes[index].titulo;
    document.querySelector('#link').value = filmes[index].link;
}







