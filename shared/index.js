var heroChart = new Chart(document.getElementById('heroChart').getContext('2d'), {
    type: 'doughnut',
    data: {
      datasets: [{
        label: '# of Votes',
        data: [18,16,14,21,30],
        backgroundColor: ['hsl(48, 100%, 55%)', 'hsl(45, 100%, 55%)', 'hsl(42, 100%, 55%)', 'hsl(39, 100%, 55%)', '#88e3dc'],
        borderWidth: 0,
      }],
      labels: [18,16,14,21,30],
    },
    options: {
      cutoutPercentage: 70,
      layout: {
        padding: {
          left: 0,
          right: 10,
          top: 10,
          bottom: 10,
        }
      },
      legend: {
        display: false,
      }
    }
});
