import navbar from './components/navbar.js';
import entrypoints from './components/entrypoints.js';
import doughnut from './components/doughnut.js';
import doughnut_cards from './components/doughnut_cards.js';
import features from './components/features.js';

const hoverBackgroundColor = ["#5AD3D1", "#FFC870", "#FF5A5E"];
const backgroundColor = ["#46BFBD", "#FDB45C", "#F7464A"];
const labels = ["Success", "Warnings", "Errors"];

new Vue({
  el: '#app',
  data: {
    entrypoints: [
      {
        name: "web",
        port: 80
      },
      {
        name: "web-secured",
        port: 443
      },
      {
        name: "elite",
        port: 31337
      },
    ],
    http_data: [
      {
        name: "Routers",
        data: {
          labels: labels,
          datasets: [
            {
              data: [70, 20, 10],
              backgroundColor: backgroundColor,
              hoverBackgroundColor: hoverBackgroundColor
            }
          ]
        },
      },
      {
        name: "Services",
        data: {
          labels: labels,
          datasets: [
            {
              data: [90, 3, 7],
              backgroundColor: backgroundColor,
              hoverBackgroundColor: hoverBackgroundColor
            }
          ]
        },
      },
      {
        name: "Middlewares",
        data: {
          labels: labels,
          datasets: [
            {
              data: [80, 15, 5],
              backgroundColor: backgroundColor,
              hoverBackgroundColor: hoverBackgroundColor
            }
          ]
        },
      },
    ],
    tcp_data: [
      {
        name: "Routers",
        data: {
          labels: labels,
          datasets: [
            {
              data: [70, 30, 154],
              backgroundColor: backgroundColor,
              hoverBackgroundColor: hoverBackgroundColor
            }
          ]
        },
      },
      {
        name: "Services",
        data: {
          labels: labels,
          datasets: [
            {
              data: [180, 32, 17],
              backgroundColor: backgroundColor,
              hoverBackgroundColor: hoverBackgroundColor
            }
          ]
        },
      },
    ],
    features: [
      {
        name: 'tracing',
        value: 'Zipkin',
        active: false,
      },
      {
        name: 'metrics',
        value: 'Prometheus',
        active: false,
      },
      {
        name: 'accesslog',
        value: 'ON',
        active: true,
      },
    ]
  },
  components: {
    navbar,
    entrypoints,
    doughnut,
    doughnut_cards,
    features,
  }
})

