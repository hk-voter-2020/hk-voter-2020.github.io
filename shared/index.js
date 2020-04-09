/* Chart */

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
      legend: { display: false },
      tooltips: { enabled: false },
      elements: {
        center: {
          title: '0 人',
          text: '已登記',
        }
      },
    }
});



/* calculate counter */
function updateCount() {
  var count = {
    "hki": {
      "startOfDay": 0,
      "endOfDay": 60,
      "current": 0
    },
    "nte": {
      "startOfDay": 0,
      "endOfDay": 33,
      "current": 0
    },
    "ntw": {
      "startOfDay": 0,
      "endOfDay": 27,
      "current": 0
    },
    "kle": {
      "startOfDay": 0,
      "endOfDay": 55,
      "current": 0
    },
    "klw": {
      "startOfDay": 0,
      "endOfDay": 110,
      "current": 0
    },
    "total": {
      "current": 0
    },
  };
  var dt = new Date();
  var portionOfDay = (dt.getSeconds() + (60 * dt.getMinutes()) + (60 * 60 * dt.getHours()))/86400;

  count.hki.current = Math.floor(count.hki.startOfDay + ((count.hki.endOfDay - count.hki.startOfDay) * portionOfDay));
  count.kle.current = Math.floor(count.kle.startOfDay + ((count.kle.endOfDay - count.kle.startOfDay) * portionOfDay));
  count.klw.current = Math.floor(count.klw.startOfDay + ((count.klw.endOfDay - count.klw.startOfDay) * portionOfDay));
  count.nte.current = Math.floor(count.nte.startOfDay + ((count.nte.endOfDay - count.nte.startOfDay) * portionOfDay));
  count.ntw.current = Math.floor(count.ntw.startOfDay + ((count.ntw.endOfDay - count.ntw.startOfDay) * portionOfDay));

  count.total.current = count.hki.current+count.kle.current+count.klw.current+count.nte.current+count.ntw.current

  window.heroChart.data.datasets[0].data = [count.hki.current, count.kle.current, count.klw.current, count.nte.current, count.ntw.current]
  heroChart.options.elements.center.title = count.total.current+" 人";
  window.heroChart.update();
  document.querySelector('.count-card-hki').innerText = count.hki.current;
  document.querySelector('.count-card-kle').innerText = count.kle.current;
  document.querySelector('.count-card-klw').innerText = count.klw.current;
  document.querySelector('.count-card-nte').innerText = count.nte.current;
  document.querySelector('.count-card-ntw').innerText = count.ntw.current;

}
var intervalID = window.setInterval(updateCount, 1000);


document.querySelector(".card-"+window.location.pathname.substring(1,4)).classList.add('bg-primary')
