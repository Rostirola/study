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
escreval ("Voc� n�o tem direito a voto novinho!")
fimalgoritmo
senao
se (idade >= 16) e (idade <= 17) entao
escreval ("Voc� � eleitor facultativo jovem adolescente!")
senao
se idade >= 70 entao
escreval ("Voc� � eleitor facultativo velinho! ;)")
se (idade >= 18) e (idade < 70) entao
senao
fimse
fimse
fimse
fimse
fimse
escreval ("Parab�ns, voc� � um jovem adulto e tem o dever de votar!")
Fimalgoritmo