<template>
  <div>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
      <a class="navbar-brand" href="#">Logo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li
            class="nav-item"
            v-for="item in menuItems"
            :key="item.name"
            :class="item.active ? 'active' : ''"
          >
            <a class="nav-link" href="#">{{item.name}}</a>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li>
            <a class="nav-link" href="#">Go To Platform</a>
          </li>
          <li>
            <a class="nav-link" href="#">{{userInitials}}</a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
  @Prop()
  private userInitials!: string;

  @Prop()
  private menuItems!: object[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>