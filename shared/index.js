Chart.pluginService.register({
    beforeDraw: function (chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#000";
        var text = chart.config.options.elements.center.title,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
        ctx.fillText(text, textX, textY);

        var fontSize = (height / 300).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
        ctx.fillStyle = "#999";
        var text = chart.config.options.elements.center.text,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2 + (14* height / 114);
        ctx.fillText(text, textX, textY);

        ctx.save();
    }
});

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
      },
      elements: {
        center: {
          title: '1,000',
          text: '參與人數',
        }
      },
    }
});
