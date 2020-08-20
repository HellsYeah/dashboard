import doughnut from './doughnut.js';

export default {
  name: "chart_card",
  props: ["cardname", "chartdata", "options"],
  template: `
    <b-card
      :key="cardname.id"
    >
      <h5>{{ cardname }} <a href="#" class="float-right"><small>Explore 🡪</small></a></h5>
      <div class="row">
        <doughnut :chartdata=chartdata :options=options class="col-6"></doughnut>
        <table class="legend">
          <tr v-for="(value, index) in chartdata.datasets[0].data">
            <td v-bind:style="{ color: chartdata.datasets[0].backgroundColor[index]}">⬤</td>
            <td>{{ chartdata.labels[index] }}</td>
            <td class="text-right"><b>{{value}}</b></td>
          </tr>

        </table>
      </div>
    </b-card>
  `,
  components: {
      'doughnut': doughnut
    }
};
