inicio = float(input("Valor do aporte inicial: R$ ").replace("," , "."))
mensal = float(input("Vlor do aporte mensal: R$ ").replace("," , "."))
meses = int(input("Periodo (meses): "))
rendimento = float(input("Média de rendimento no periodo: ").replace("," , "."))

def calculo (inicio, rendimento, mensal):
 return (inicio * (rendimento / 100) + inicio) + mensal

for n in range(meses):
 inicio = calculo(inicio, rendimento, mensal)
 print(f"Após {n+1} períodos(s), o montante será de R${inicio:.2f} ")

