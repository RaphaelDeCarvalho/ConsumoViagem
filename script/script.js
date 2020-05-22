// Distância SP-CE = 2830 km de carro usando a rodovia BR-116.
//Média de velocidade do carro vai ser de 80 km/h.
//A autonomia do carro é de 12,5 km por litro.
//O valor dos pedágios entre os estados fica no valor total de R$44,70 segundo o site Em Sampa. www.emsampa.com.br/wwrota1339.htm
distanciaviagem=2830
kmh=110
tempoviagem=38
kml=12.5
ped=44.70
litros=((tempoviagem*kmh)/kml)
valorlitro=prompt('Quanto custa o litro da Gasolina para sabermos o valor total do combustível para viagem de São Paulo até o Ceará?\n Ex.: 4.39')
valortotal=((litros*valorlitro) + ped)
tagtexto.innerHTML='O valor do combustível somado ao valor dos pedágios para realizar a viagem de São Paulo até a cidade de Quixeré no estado de Ceará é de aproximadamente R$ ' + valortotal.toFixed(2).replace(".",",") + '.<br>*O valor dos pedágios entre os estados fica no valor total de R$44,70 segundo o site Em Sampa. www.emsampa.com.br/wwrota1339.htm'