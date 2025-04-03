// Ajusta o formato de resultado e corta as casas decimais.
function formatarMoeda(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}
  
// conversor de Reais para Platinas.
function converterParaPlatinas () {
      const valorReais = parseFloat(document.getElementById('valorReais').value);
      const taxaConversao = 0.1332; 
  
      const resultado = valorReais / taxaConversao;
      document.getElementById('resultadoPlatinas').innerText = `O valor em Platinas é: ${resultado.toFixed(2)} PLT`;
}

// conversor de quantas Platinas para Reais.
function converterParaReais() {
      const valorPlatinas = parseFloat(document.getElementById('valorPlatinas').value);
      const taxaConversao = 0.1332; 
  
      const resultado = valorPlatinas * taxaConversao;
      document.getElementById('resultadoReais').innerText = `O valor em Reais é: R$ ${resultado.toFixed(2)}`;
    }