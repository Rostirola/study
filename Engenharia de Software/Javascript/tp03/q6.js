function logado() {
 
  return window.localStorage.getItem("login");

}

function deslogar() {

  let NlogadoElement = document.getElementById("Nlogado"),
      logadoElement  = document.getElementById("logado");

      window.localStorage.removeItem("login");
      NlogadoElement.style.visibility = "visible";
      logadoElement.style.visibility  = "hidden";
      
}

function logar() {
  
  let NlogadoElement = document.getElementById("Nlogado"),
      logadoElement  = document.getElementById("logado"),
      usuario        = document.getElementById("usuario").value,
      senha          = document.getElementById("senha").value,
      usuarios       = [];

  if (window.localStorage.getItem("usuarios")) {

    usuarios = JSON.parse(window.localStorage.getItem("usuarios"));

  }

  for (let i = 0; i < usuarios.length; i++) {

    if (usuarios[i].usuario == usuario && usuarios[i].senha == senha) {

      window.localStorage.setItem(
       "login",
        document.getElementById("usuario").value
      );

      NlogadoElement.style.visibility = "hidden";
      logadoElement.style.visibility  = "visible";
      break;
    }
  }
}

function criarNovoUsuario() {
  
  let usuario  = document.getElementById("novoUsuario").value,
      senha    = document.getElementById("novaSenha").value,
      mensagem = document.getElementById("mensagem"),
      usuarios = [];

  if (window.localStorage.getItem("usuarios")) {

    usuarios = JSON.parse(window.localStorage.getItem("usuarios"));

  }

  usuarios.push({ usuario: usuario, senha: senha });
  window.localStorage.setItem("usuarios", JSON.stringify(usuarios));
  alert(`Usuario criado com sucesso!`)
}