Algoritmo "Votante"
Var
idade: inteiro
Inicio
escreval ("Qual a sua idade?")
leia (idade)
se idade < 1 entao
escreval ("Valor invalido babaca")
fimalgoritmo
senao
se (idade <= 15) e (idade >= 1) entao
escreval ("Você não tem direito a voto novinho!")
fimalgoritmo
senao
se (idade >= 16) e (idade <= 17) entao
escreval ("Você é eleitor facultativo jovem adolescente!")
senao
se idade >= 70 entao
escreval ("Você é eleitor facultativo velinho! ;)")
se (idade >= 18) e (idade < 70) entao
senao
fimse
fimse
fimse
fimse
fimse
escreval ("Parabéns, você é um jovem adulto e tem o dever de votar!")
Fimalgoritmo