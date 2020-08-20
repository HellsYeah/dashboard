export default {
  props: ["features"],
  template: `
  <div>
    <h5 class="extra-bold">Features</h5>
    <ul class="features row">
      <li v-for="feature in features" class="col-3">
        <b-card
          :key="feature.id"
          class="text-center"
        >
          <b-card-text class="text-uppercase">{{ feature.name }}</b-card-text>

          <div>
            <span class="value" v-bind:class="{ active: feature.active }" >
              {{ feature.value }}
            </span>
          </div>

        </b-card>
      </li>
    </ul>
  </div>
  `,
};
