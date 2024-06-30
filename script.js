document.getElementById('calcularBtn').addEventListener('click', function() {
    // Obter os valores dos campos de entrada
    var homens = parseInt(document.getElementById('homens').value);
    var mulheres = parseInt(document.getElementById('mulheres').value);
    var criancas = parseInt(document.getElementById('criancas').value);
  
    // Calcular as quantidades necessárias
    var carneBovina = homens * 0.5 + mulheres * 0.3 + criancas * 0.2;
    var frango = homens * 0.2 + mulheres * 0.2 + criancas * 0.1;
    var linguica = homens * 0.2 + mulheres * 0.2 + criancas * 0.2;
    var refrigerante = homens * 0.3 + mulheres * 0.4 + criancas * 0.2;
    var cerveja = homens * 0.8 + mulheres * 0.5;
  
    // Exibir os resultados formatados
    var resultadoHTML = `
      <h2>Quantidades necessárias:</h2>
      <p>Carne bovina: ${carneBovina.toFixed(2)} kg</p>
      <p>Frango: ${frango.toFixed(2)} kg</p>
      <p>Linguiça: ${linguica.toFixed(2)} kg</p>
      <p>Refrigerante: ${refrigerante.toFixed(2)} litros</p>
      <p>Cerveja: ${cerveja.toFixed(2)} litros</p>
    `;
  
    document.getElementById('resultado').innerHTML = resultadoHTML;
  });
  