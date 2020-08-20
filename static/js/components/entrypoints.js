export default {
  props: ["entrypoints"],
  template: `
  <div>
    <h5 class="extra-bold">Entrypoints</h5>
    <ul class="row">
      <li v-for="entrypoint in entrypoints" class="col-3">
        <b-card
          :key="entrypoint.id"
          class="text-center text-uppercase"
        >
          <b-card-text>{{ entrypoint.name }}</b-card-text>
          <div class="h1 extra-bold">
            :{{ entrypoint.port }}
          </div>
        </b-card>
      </li>
    </ul>
  </div>
  `,
};
