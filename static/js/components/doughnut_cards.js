import chart_card from './chart_card.js';

export default {
  props: ["title", "cards_data"],
  data: () => ({
    options: {
      legend: {
        position: "right",
        align: "end"
      },
      legend: {
        display: false
      }
    }
  }),
  template: `
  <div>
    <h5 class="extra-bold">{{ title }}</h5>
    <ul class="row">
      <li v-for="card_data in cards_data" class="col-4">
        <chart_card :cardname=card_data.name :chartdata=card_data.data :options=options></chart_card>
      </li>
    </ul>
  </div>
  `,
  components: {
      'chart_card' : chart_card
    }
};
