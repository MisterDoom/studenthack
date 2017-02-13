/**
 * Created by andre on 12/02/2017.
 */
$(function () {
    var chartItems = {
        labels: [
            "University of Manchester",
            "University of Edinburgh",
            "University of Salford",
            "Manchester Metropolitan University",
            "University of Birmingham",
            "City University of London",
            "University of Sussex"
        ],
        barHeights: [191, 41, 21, 11, 9, 8, 8],
        colours: [
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)',
            'rgba(255, 255, 255, 1)'
        ],
        chartColor: "#FFFFFF"
    };
    var chartCanvasDesktop = $("#barchart-desktop");
    var chartCanvasMobile = $("#barchart-mobile");
    var chartDesktop = new Chart(chartCanvasDesktop, {
        type: 'bar',
        data: {
            labels: chartItems.labels,
            datasets: [
                {
                    data: chartItems.barHeights,
                    backgroundColor: chartItems.colours,
                }
            ]
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    color: chartItems.chartColor,
                    gridLines: {
                        zeroLineColor: chartItems.chartColor,
                        color: "rgba(255,255,255,0)"
                    },
                    ticks: {
                        fontColor: chartItems.chartColor
                    }
                }],
                yAxes: [{
                    color: chartItems.chartColor,
                    gridLines:{
                        zeroLineColor: chartItems.chartColor,
                        color: "rgba(255,255,255,0)"
                    },
                    ticks: {
                        fontColor: chartItems.chartColor,
                        beginAtZero: true
                    }
                }]
            }
        }
    });
    var chartMobile = new Chart(chartCanvasMobile, {
        type: 'horizontalBar',
        data: {
            labels: chartItems.labels,
            datasets: [
                {
                    data: chartItems.barHeights,
                    backgroundColor: chartItems.colours,
                }
            ]
        },
        options: {
            responsive: true,
            legend: {
                display: false
            },
            scales: {
                xAxes: [{
                    color: chartItems.chartColor,
                    gridLines: {
                        zeroLineColor: chartItems.chartColor,
                        color: "rgba(255,255,255,0)"
                    },
                    ticks: {
                        fontColor: chartItems.chartColor
                    }
                }],
                yAxes: [{
                    color: chartItems.chartColor,
                    gridLines:{
                        zeroLineColor: chartItems.chartColor,
                        color: "rgba(255,255,255,0)"
                    },
                    ticks: {
                        fontColor: chartItems.chartColor,
                        beginAtZero: true
                    }
                }]
            }
        }
    });
});