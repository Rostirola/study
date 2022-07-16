
let integrantes = [];

function inicializar() {
    integrantes = JSON.parse(localStorage.getItem('integrantes') || '[]');
    exibirintegrantes();
}

function salvarintegrante(event) {
    event.preventDefault();
    console.log('salvar integrante');

    let id     = document.querySelector('#idintegrante').value;
    let nome = document.querySelector('#nome').value;
    let link   = document.querySelector('#link').value;

    if (id) {
        let index = integrantes.findIndex(f => f.id == id);
        integrantes[index].nome = nome;
        integrantes[index].link = link;
    } else {
        let integrante = {
            id: Math.random().toString(36).substring(2),
            nome: nome,
            link: link
        };
    
        integrantes.push(integrante);
    }

    localStorage.setItem('integrantes', JSON.stringify(integrantes));    

    exibirintegrantes();

    document.querySelector('#idintegrante').value = null;
    document.querySelector('#nome').value = null;
    document.querySelector('#link').value = null;
}
 
function exibirintegrantes() {
    let template = '';
    for (let i = 0; i < integrantes.length; i++) {
        template = template + '<div class="integrante">';
        template = template + `<p>${integrantes[i].nome}</p>`;
        template = template + `<img src="${integrantes[i].link}" ></img>`;
        template = template + `<button type="button" onclick="editarintegrante('${integrantes[i].id}')">Editar</button>`;
        template = template + `<button type="button" onclick="excluirintegrante('${integrantes[i].id}')">Excluir</button>`;
        template = template + '</div>';
    }    
    document.querySelector('#listaDeintegrantes').innerHTML = template;
}

function excluirintegrante(id) {
    console.log('id ', id);
    let index = integrantes.findIndex(f => f.id == id);
    integrantes.splice(index, 1);
    localStorage.setItem('integrantes', JSON.stringify(integrantes));  
    exibirintegrantes();
}

function editarintegrante(id) {
    let index = integrantes.findIndex(f => f.id == id);

    document.querySelector('#idintegrante').value = integrantes[index].id;
    document.querySelector('#nome').value = integrantes[index].nome;
    document.querySelector('#link').value = integrantes[index].link;
}







