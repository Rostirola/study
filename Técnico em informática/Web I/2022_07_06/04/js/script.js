
let produtos = [];

function inicializar() {
    produtos = JSON.parse(localStorage.getItem('produtos') || '[]');
    exibirprodutos();
}


function salvarproduto(event) {
    event.preventDefault();
    console.log('salvar produto');

    let id     = document.querySelector('#idproduto').value;
    let nome   = document.querySelector('#nome').value;
    let preco  = document.querySelector('#preco').value;
    let link   = document.querySelector('#link').value;

    if (id) {
        let index = produtos.findIndex(f => f.id == id);
        produtos[index].nome = nome;
        produtos[index].preco = preco;
        produtos[index].link = link;
    } else {
        let produto = {
            id: Math.random().toString(36).substring(2),
            nome: nome,
            preco: preco,
            link: link
        };
    
        produtos.push(produto);
    }

    localStorage.setItem('produtos', JSON.stringify(produtos));    

    exibirprodutos();

    document.querySelector('#idproduto').value = null;
    document.querySelector('#nome').value = null;
    document.querySelector('#preco').value = null;
    document.querySelector('#link').value = null;
}
 
function exibirprodutos() {
    let template = '';
    for (let i = 0; i < produtos.length; i++) {
        template = template + '<div class="produto">';
        template = template + `<p>${produtos[i].nome}</p>`;
        template = template + `<p>${produtos[i].preco}</p>`;
        template = template + `<img src="${produtos[i].link}" ></img>`;
        template = template + `<button type="button" onclick="editarproduto('${produtos[i].id}')">Editar</button>`;
        template = template + `<button type="button" onclick="excluirproduto('${produtos[i].id}')">Excluir</button>`;
        template = template + '</div>';
    }    
    document.querySelector('#listaDeprodutos').innerHTML = template;
}

function excluirproduto(id) {
    console.log('id ', id);
    let index = produtos.findIndex(f => f.id == id);
    localStorage.setItem('produtos', JSON.stringify(produtos));     
    produtos.splice(index, 1);
    exibirprodutos();
}

function editarproduto(id) {
    let index = produtos.findIndex(f => f.id == id);

    document.querySelector('#idproduto').value = produtos[index].id;
    document.querySelector('#nome').value = produtos[index].nome;
    document.querySelector('#preco').value = produtos[index].preco;
    document.querySelector('#link').value = produtos[index].link;
}







