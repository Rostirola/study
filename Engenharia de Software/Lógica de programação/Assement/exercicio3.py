def imprimirGasto(tipo, percentualMaximo, gasto, renda):
    percentual=calcularPercentual(gasto, renda)
    if percentual > percentualMaximo:
        print(
            f'Seus gastos totais com {tipo} comprometem {percentual}% de sua renda total. O máximo recomendado é de {percentualMaximo}%. Portanto, idealmente, o máximo de sua renda comprometida com {tipo} deveria ser de R$ {calcularValorMaximo(renda, percentualMaximo)}')
    else:
        print(
            f'Seus gastos com {tipo} foi de R${gasto}. Este valor está dentro da margem recomendada que é de {percentualMaximo}% sobre sua renda mensal.')

def calcularPercentual(gasto, renda):
    return gasto * 100 / renda

def calcularValorMaximo(renda, percentualMaximo):
    return renda * percentualMaximo / 100

percentualMaximoMoradia = 30
percentualMaximoEducacao = 20
percentualMaximoTransporte = 15

rendaMensal=float(input("Renda mensal total: R$ ").replace("," , "."))
gastoMoradia=float(input("Gastos totais com moradia: R$ ").replace("," , "."))
gastoEducacao=float(input("Gastos totais com educação: R$").replace("," , "."))
gastoTransporte=float(input("Gastos totais com transporte: R$").replace("," , "."))

print("Diagnóstico:")
imprimirGasto("Moradia", percentualMaximoMoradia, gastoMoradia, rendaMensal)
imprimirGasto("Educacao", percentualMaximoEducacao, gastoEducacao, rendaMensal)
imprimirGasto("Transporte", percentualMaximoTransporte, gastoTransporte, rendaMensal)
