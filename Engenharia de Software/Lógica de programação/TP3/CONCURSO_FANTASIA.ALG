Algoritmo "Concurso_fantasia"
Var
p1, p2, p3, p4, p5 : caractere
n1, n2, n3, n4, n5 : inteiro
Inicio
escreval("Informe o nome do 1º participante: ")
leia (p1)
escreval ("Informe a nota do 1º participante: ")
leia (n1)
se (n1 < 1) ou ( n1 > 10) entao
escreval ("Valor invalido")
fimalgoritmo
senao
escreval("Informe o nome do 2º participante: ")
leia (p2)
escreval ("Informe a nota do 2º participante: ")
leia (n2)
se (n2 < 1) ou ( n2 > 10) entao
escreval ("Valor invalido")
fimalgoritmo
senao
escreval("Informe o nome do 3º participante: ")
leia (p3)
escreval ("Informe a nota do 3º participante: ")
leia (n3)
se (n3 < 1) ou ( n3 > 10) entao
escreval ("Valor invalido")
fimalgoritmo
senao
escreval("Informe o nome do 4º participante: ")
leia (p4)
escreval ("Informe a nota do 4º participante: ")
leia (n4)
se (n4 < 1) ou ( n4 > 10) entao
escreval ("Valor invalido")
fimalgoritmo
senao
escreval("Informe o nome do 5º participante: ")
leia (p5)
escreval ("Informe a nota do 5º participante: ")
leia (n5)
se (n5 < 1) ou ( n5 > 10) entao
escreval ("Valor invalido")
fimalgoritmo
senao
se (n1 > n2) e (n1 > n3) e (n1 > n4) e (n1 > n5) entao
escreval ("O(a)_vencedor(a) foi ", p1, " com nota ", n1)
fimalgoritmo
senao
se (n2 > n1) e (n2 > n3) e (n2 > n4) e (n2 > n5) entao
escreval ("O(a)_vencedor(a) foi ", p2, " com nota ", n2)
fimalgoritmo
senao
se (n3 > n1) e (n3 > n2) e (n3 > n4) e (n3 > n5) entao
escreval ("O(a)_vencedor(a) foi ", p3, " com nota ", n3)
fimalgoritmo
senao
se (n4 > n1) e (n4 > n2) e (n4 > n3) e (n4 > n5) entao
escreval ("O(a)_vencedor(a) foi ", p4, " com nota ", n4)
fimalgoritmo
senao
se (n5 > n1) e (n5 > n2) e (n5 > n3) e (n5 > n4) entao
escreval ("O(a)_vencedor(a) foi ", p5, " com nota ", n5)
fimalgoritmo
senao
escreval ("Houve um empate!")
fimse
fimse
fimse
fimse
fimse
fimse
fimse
fimse
fimse
fimse
fimalgoritmo