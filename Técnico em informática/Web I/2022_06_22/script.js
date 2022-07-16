const filmes = []

function salvarFilme(event) {
    event.preventDefault();
    console.log(`salvar filme`)
    let titulo = document.querySelector(`#titulo`).value;
    let link = document.querySelector(`#link`).value;
    let filme = {
        titulo: titulo,
        link: link
    }
    filmes.push(filme);
    console.log(filmes);
    exibirFilmes();
} function exibirFilmes() {
    let template = `<div>`;
    for(let i = 0; i < filmes.length; i++) {
        template = template + `<p class="inline">${filmes[i].titulo}</p>`;
        template = template + `<img class="imagem6" src="${filmes[i].link}"/>`;
    }
    template += `</div>`;
    document.querySelector(`#listaDeFilmes`).innerHTML = template;
}