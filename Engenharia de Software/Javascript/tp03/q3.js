function relatorio() {
 
	class Aluno {

		constructor(numero, Nota) {

			this.numero = numero;
			this.Nota = Nota;

		}

		get nota() {

			return this.Nota;

		}
	}

	let alunos = [];

	for (let i = 1; i <= 20; i++) {

		let notas = new Aluno(i, Math.floor(Math.random() * 100));

		alunos.push(notas);

	}

	function notas(nota) {

		return nota >= 60 ? 'APROVADO' : 'REPROVADO'

	}

	let q1 = document.querySelector("#q3");

	q1.innerHTML = ('Notas dos alunos<br>')

	let aprovados = 0;

	for (let i = 0; i < alunos.length; i++) {

		q1.innerHTML = q1.innerHTML + (`Aluno Nº ${alunos[i].numero} - Nota ${alunos[i].nota} ${notas(alunos[i].nota)}` + "<br>")

		if (notas(alunos[i].nota) == 'APROVADO') {

			aprovados++;

		}
	}

	q1.innerHTML = q1.innerHTML + (`APROVADO ${Math.floor((aprovados / alunos.length) * 100)}% | REPROVADOS ${Math.floor(((alunos.length - aprovados) / alunos.length) * 100)}%` + "<br>")
}