// Função para converter quilômetros para anos-luz
function converterQuilometrosParaAnosLuz(quilometros, quilometrosPorAnoLuz) {
    return quilometros / quilometrosPorAnoLuz;
}

// Solicita ao usuário a distância em quilômetros e a velocidade da viagem
var distanciaEmQuilometros = parseFloat(prompt("Digite a distância em quilômetros:"));
var velocidadeEmQuilometrosPorAnoLuz = parseFloat(prompt("Digite a velocidade da viagem em quilômetros por ano-luz:"));

// Converte quilômetros para anos-luz usando a função
var distanciaEmAnosLuz = converterQuilometrosParaAnosLuz(distanciaEmQuilometros, velocidadeEmQuilometrosPorAnoLuz);

// Calcula o tempo necessário para viajar em anos
var tempoNecessario = distanciaEmAnosLuz / velocidadeEmQuilometrosPorAnoLuz;

// Exibe o resultado
alert("A distância de " + distanciaEmQuilometros + " quilômetros é equivalente a aproximadamente " + distanciaEmAnosLuz.toFixed(3) + " anos-luz.\n" +
      "Com uma velocidade de " + velocidadeEmQuilometrosPorAnoLuz + " quilômetros por ano-luz, levaria cerca de " + tempoNecessario.toFixed(3) + " anos para viajar.");