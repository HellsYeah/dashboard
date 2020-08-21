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
  data: () => ({
    entrypoints: null,
    http_data: null,
    tcp_data: null,
    features: null}),
  components: {
    navbar,
    entrypoints,
    doughnut,
    doughnut_cards,
    features,
  },

  created() {
    self = this;
    axios
      .get('http://127.0.0.1:8080/api/entrypoints/')
      .then(function(response) {
          self.entrypoints = response.data;
        });
    axios
      .get('http://127.0.0.1:8080/api/http_data/')
      .then(function(response) {
          self.http_data = response.data;
        });
    axios
      .get('http://127.0.0.1:8080/api/tcp_data/')
      .then(function(response) {
          self.tcp_data = response.data;
        });
    axios
      .get('http://127.0.0.1:8080/api/features/')
      .then(function(response) {
          self.features = response.data;
        });
      }
  }
)



