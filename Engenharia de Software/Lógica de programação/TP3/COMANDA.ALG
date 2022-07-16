Algoritmo "Comanda"
Var
conta, gorgeta, pessoas : inteiro
resultado, auxiliar, auxiliar2, auxiliar3: real
Inicio
escreval ("Informe o valor total do consumo: R$")
leia (conta)
se conta < 1 entao
escreval ("Valor invalido")
fimalgoritmo
senao
escreval ("Informe o total de pessoas: ")
leia (pessoas)
se pessoas < 1 entao
escreval ("Valor invalido")
fimalgoritmo
senao
escreval ("Informe o percentual de serviço, entre 0 a 100: ")
leia (gorgeta)
se (gorgeta < 0) ou (gorgeta > 100) entao
escreval ("Valor invalido")
fimalgoritmo
senao
auxiliar <- conta * gorgeta
resultado <- auxiliar /100
auxiliar2 <- conta + resultado
auxiliar3 <- auxiliar2 / pessoas
escreval ("O valor total da conta, com taxa de serviço, será de: R$", auxiliar2)
escreval ("Dividindo a conta por ", pessoas, " pessoa(s), cada pessoa deverá pagar: R$", auxiliar3)
fimse
fimse
fimse
Fimalgoritmo