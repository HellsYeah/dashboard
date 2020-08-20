export default {
  template: `
  <nav>
    <b-navbar toggleable="lg" type="dark" variant="dark">

      <div class="container">
        <b-navbar-brand href="#">Dashboard</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <b-nav-item href="#">Link</b-nav-item>
            <b-nav-item href="#" disabled>Disabled</b-nav-item>
          </b-navbar-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Dropdown" right>
              <b-dropdown-item href="#">Link 1</b-dropdown-item>
              <b-dropdown-item href="#">Link 2</b-dropdown-item>
              <b-dropdown-item href="#">Link 3</b-dropdown-item>
              <b-dropdown-item href="#">Link 4</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </nav>
  `,
};


