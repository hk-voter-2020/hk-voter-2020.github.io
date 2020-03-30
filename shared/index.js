var heroChart = new Chart(document.getElementById('heroChart').getContext('2d'), {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [20,20,20,20,20],
            backgroundColor: ['hsl(48, 100%, 55%)', 'hsl(45, 100%, 55%)', 'hsl(42, 100%, 55%)', 'hsl(39, 100%, 55%)', 'hsl(36, 100%, 55%)'],
            borderWidth: 0,
        }]
    },
    options: {
            cutoutPercentage: 70,
            layout: {
                    padding: {
                        left: 0,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                }
    }
});
var cardChartInvited = new Chart(document.getElementById('cardChartInvited').getContext('2d'), {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#FFD31A', 'rgba(0, 0, 0, 0)'],
            borderWidth: 0,
        }]
    },
    options: {
            cutoutPercentage: 70,
            layout: {
                    padding: {
                        left: 0,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                }
    }
});
var cardChartHki = new Chart(document.getElementById('cardChartHki').getContext('2d'), {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#FFD31A', 'rgba(0, 0, 0, 0)'],
            borderWidth: 0,
        }]
    },
    options: {
            cutoutPercentage: 70,
            layout: {
                    padding: {
                        left: 0,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                }
    }
});
var cardChartKle = new Chart(document.getElementById('cardChartKle').getContext('2d'), {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#FFD31A', 'rgba(0, 0, 0, 0)'],
            borderWidth: 0,
        }]
    },
    options: {
            cutoutPercentage: 70,
            layout: {
                    padding: {
                        left: 0,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                }
    }
});
var cardChartKlw = new Chart(document.getElementById('cardChartKlw').getContext('2d'), {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#FFD31A', 'rgba(0, 0, 0, 0)'],
            borderWidth: 0,
        }]
    },
    options: {
            cutoutPercentage: 70,
            layout: {
                    padding: {
                        left: 0,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                }
    }
});
var cardChartNte = new Chart(document.getElementById('cardChartNte').getContext('2d'), {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#FFD31A', 'rgba(0, 0, 0, 0)'],
            borderWidth: 0,
        }]
    },
    options: {
            cutoutPercentage: 70,
            layout: {
                    padding: {
                        left: 0,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                }
    }
});
var cardChartNtw = new Chart(document.getElementById('cardChartNtw').getContext('2d'), {
    type: 'doughnut',
    data: {
        datasets: [{
            data: [70, 30],
            backgroundColor: ['#FFD31A', 'rgba(0, 0, 0, 0)'],
            borderWidth: 0,
        }]
    },
    options: {
            cutoutPercentage: 70,
            layout: {
                    padding: {
                        left: 0,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                }
    }
});
