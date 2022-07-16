
let items = [];

function inicializar() {
    items = JSON.parse(localStorage.getItem('items') || '[]');
    exibiritems();
}  

function salvaritem(event) {
    event.preventDefault();
    console.log('salvar item');

    let id     = document.querySelector('#iditem').value;
    let nome = document.querySelector('#nome').value;

    if (id) {
        let index = items.findIndex(f => f.id == id);
        items[index].nome = nome;
    } else {
        let item = {
            id: Math.random().toString(36).substring(2),
            nome: nome,
        };
    
        items.push(item);
    }

    localStorage.setItem('items', JSON.stringify(items));    

    exibiritems();

    document.querySelector('#iditem').value = null;
    document.querySelector('#nome').value = null;
}
 
function exibiritems() {
    let template = '';
    for (let i = 0; i < items.length; i++) {
        template = template + '<div class="item">';
        template = template + '<input type="checkbox">';
        template = template + `<p>${items[i].nome}</p>`;
        template = template + `<button type="button" onclick="editaritem('${items[i].id}')">Editar</button>`;
        template = template + `<button type="button" onclick="excluiritem('${items[i].id}')">Excluir</button>`;
        template = template + '</div>';
    }    
    document.querySelector('#listaDeitems').innerHTML = template;
}

function excluiritem(id) {
    console.log('id ', id,items);
    let index = items.findIndex(f => f.id == id);
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));       
    exibiritems();
}

function editaritem(id) {
    let index = items.findIndex(f => f.id == id);

    document.querySelector('#iditem').value = items[index].id;
    document.querySelector('#nome').value = items[index].nome;
}







