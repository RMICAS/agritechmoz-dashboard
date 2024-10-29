// Chart cost
var options = {
    chart: {
      type: 'bar',
      height: 350
    },
    series: [{
      name: 'Vendas',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    xaxis: {
      categories: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set']
    }
  };
  
  // Renderizar o gráfico no contêiner com id "chart"
  var chart = new ApexCharts(document.querySelector("#chart-cost"), options);
  chart.render();

  // Sementeira 
  

  // Chart-area-total

  // Dados para o gráfico de barra empilhada horizontal
var options = {
  chart: {
    type: 'bar', // Tipo de gráfico: Barra
    height: 330,
    stacked: true, // Ativa as barras empilhadas
    toolbar: {
      show: false
    }
  },
  series: [{
    name: 'Área Plantada',
    data: [80] // Exemplo: 80 hectares plantados
  }, {
    name: 'Área Não Plantada',
    data: [20] // Exemplo: 20 hectares não plantados
  }],
  xaxis: {
    categories: ['Terreno'], // Categoria do eixo X
  },
  colors: ['#28a745', '#6c757d'], // Verde para plantada, cinza para não plantada
  plotOptions: {
    bar: {
      horizontal: true, // Define o gráfico como horizontal
      barHeight: '50%'  // Altura da barra
    }
  },
  title: {
  },
  dataLabels: {
    enabled: true // Mostrar os valores nas barras
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " hectares"; // Formatação do tooltip
      }
    }
  }
};

// Renderizar o gráfico no contêiner com id "chart"
var chart = new ApexCharts(document.querySelector("#chart-area-total"), options);
chart.render();

// Chart-verificacao-do-solo

// Dados para o gráfico de pizza
var options = {
  chart: {
    type: 'pie', // Tipo de gráfico: Pizza
    height: 338
  },
  series: [70, 30], // Exemplo: 70% do solo verificado, 30% não verificado
  labels: ['Solo Verificado', 'Solo Não Verificado'], // Rótulos para as fatias
  colors: ['#28a745', '#dc3545'], // Verde para verificado, vermelho para não verificado
  title: {
    align: 'center'
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + '%'; // Exibir porcentagens nas fatias
    }
  },
  legend: {
    position: 'bottom'
  }
};

// Renderizar o gráfico no contêiner com id "chart"
var chart = new ApexCharts(document.querySelector("#chart-verificacao-do-solo"), options);
chart.render();

// Chart-agua-aplicada

// Dados para o gráfico de linhas
var options = {
  chart: {
    type: 'line', // Tipo de gráfico: Linha
    height: 325
  },
  series: [{
    name: 'Água Aplicada (Litros)',
    data: [1000, 1500, 1200, 1800, 1300, 1600, 1700, 2000] // Exemplo de litros de água aplicados por semana
  }],
  xaxis: {
    categories: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4', 'Semana 5', 'Semana 6', 'Semana 7', 'Semana 8'], // Semanas no eixo X
    title: {
      text: 'Semanas' // Título do eixo X
    }
  },
  yaxis: {
    title: {
      text: 'Litros de Água' // Título do eixo Y
    },
    labels: {
      formatter: function (val) {
        return val + "L"; // Formatação dos valores do eixo Y
      }
    }
  },
  title: {
    align: 'center'
  },
  stroke: {
    curve: 'smooth' // Linha suavizada
  },
  dataLabels: {
    enabled: true // Exibir os valores diretamente nos pontos
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " litros"; // Tooltip exibindo os litros
      }
    }
  }
};

// Renderizar o gráfico no contêiner com id "chart"
var chart = new ApexCharts(document.querySelector("#chart-agua-aplicada"), options);
chart.render();

// Cresciemento

// Detalhamento de insumos

// Dados para o gráfico de pizza de pesticidas aplicados
var options = {
  chart: {
    type: 'pie', // Tipo de gráfico: Pizza
    height: 330
  },
  series: [30, 20, 15, 25, 10], // Exemplo: porcentagem de aplicação de cada pesticida
  labels: ['Insumo A', 'Insumo B', 'Insumo C', 'Insumo D', 'Insumo E'], // Nomes dos pesticidas
  colors: ['#28a745', '#dc3545', '#ffc107', '#17a2b8', '#6f42c1'], // Cores diferentes para cada pesticida
  title: {
    align: 'center'
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + '%'; // Exibir as porcentagens nas fatias
    }
  },
  legend: {
    position: 'bottom'
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "%"; // Exibir a porcentagem no tooltip
      }
    }
  }
};

// Renderizar o gráfico no contêiner com id "chart"
var chart = new ApexCharts(document.querySelector("#chart-insumos"), options);
chart.render();


// Incidencia de doencas

// Inicializar o mapa no centro do campo agrícola
var map = L.map('map').setView([-25.965, 32.589], 13); // Ponto central com coordenadas de exemplo

// Adicionar o mapa base (usando OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Adicionar círculos representando a incidência de doenças
var incidents = [
    { coords: [-25.960, 32.584], radius: 300, color: 'red', disease: 'Fungo A' },
    { coords: [-25.966, 32.591], radius: 200, color: 'orange', disease: 'Bactéria B' },
    { coords: [-25.970, 32.595], radius: 250, color: 'yellow', disease: 'Vírus C' },
    { coords: [-25.955, 32.580], radius: 350, color: 'green', disease: 'Fungo D' },
    { coords: [-25.960, 32.600], radius: 300, color: 'blue', disease: 'Praga E' }
];

// Iterar sobre as incidências e adicionar os círculos ao mapa
incidents.forEach(function(incident) {
    L.circle(incident.coords, {
        color: incident.color, // Cor do círculo
        fillColor: incident.color,
        fillOpacity: 0.5,
        radius: incident.radius // Tamanho do círculo, baseado na gravidade
    }).addTo(map).bindPopup('<b>Doença:</b> ' + incident.disease); // Popup com o nome da doença
});

// Taxa de germinacao

// Dados para o gráfico de pizza da taxa de germinação
var options = {
  chart: {
    type: 'pie', // Tipo de gráfico: Pizza
    height: 330
  },
  series: [80, 20], // Exemplo: 80% de sementes germinadas e 20% não germinadas
  labels: ['Sementes Germinadas', 'Sementes Não Germinadas'], // Legendas para cada fatia
  colors: ['#28a745', '#dc3545'], // Verde para germinadas e vermelho para não germinadas
  title: {
    align: 'center'
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      return val + '%'; // Exibir as porcentagens nas fatias
    }
  },
  legend: {
    position: 'bottom'
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + "%"; // Exibir a porcentagem no tooltip
      }
    }
  }
};

// Renderizar o gráfico no contêiner com id "germinationChart"
var germinationChart = new ApexCharts(document.querySelector("#germinationChart"), options);
germinationChart.render();

// quantidade total de kilos vendidos

// Dados para o gráfico de linhas de vendas (quilos vendidos ao longo das datas)
var options = {
  chart: {
    type: 'line', // Tipo de gráfico: Linha
    height: 350
  },
  series: [{
    name: 'Quilos Vendidos',
    data: [150, 200, 175, 220, 180, 250] // Exemplo de quilos vendidos em cada data
  }],
  xaxis: {
    categories: ['2024-09-01', '2024-09-05', '2024-09-10', '2024-09-15', '2024-09-20', '2024-09-25'], // Datas das vendas
    title: {
      text: 'Datas'
    }
  },
  yaxis: {
    title: {
      text: 'Quilos Vendidos (kg)'
    }
  },
  title: {
    text: 'Vendas de Quilos ao Longo do Tempo',
    align: 'center'
  },
  stroke: {
    curve: 'smooth' // Curva suavizada para as linhas
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return val + " kg"; // Exibir quilos vendidos no tooltip
      }
    }
  }
};

// Renderizar o gráfico no contêiner com id "salesChart"
var salesChart = new ApexCharts(document.querySelector("#salesChart"), options);
salesChart.render();


// REVENUE CHART

// Dados para o gráfico de barras de receita (estimada vs total)
var options = {
  chart: {
    type: 'bar', // Tipo de gráfico: Barra
    height: 350
  },
  series: [{
    name: 'Receita Estimada',
    data: [3000, 4000, 5000, 6000, 7000] // Exemplo de receita estimada em cada período
  }, {
    name: 'Receita Total',
    data: [2800, 4200, 4700, 5800, 6900] // Exemplo de receita total em cada período
  }],
  xaxis: {
    categories: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'], // Períodos (meses)
    title: {
      text: 'Meses'
    }
  },
  yaxis: {
    title: {
      text: 'Receita (R$)'
    }
  },
  title: {
    text: 'Receita Estimada vs Receita Total',
    align: 'center'
  },
  colors: ['#008FFB', '#00E396'], // Cor azul para receita estimada e verde para receita total
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded' // Formato arredondado nas barras
    }
  },
  dataLabels: {
    enabled: false // Desativar exibição dos valores nas barras
  },
  legend: {
    position: 'top'
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "R$ " + val; // Exibir a receita com o símbolo R$
      }
    }
  }
};

// Renderizar o gráfico no contêiner com id "revenueChart"
var revenueChart = new ApexCharts(document.querySelector("#revenuechart"), options);
revenueChart.render();









