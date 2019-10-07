<template>
  <div>
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link text-muted text-small" href="#">Property Analysis</a>
      </li>
      <li class="nav-item">
        <a class="nav-link text-muted" href="#">{{property.name ? property.name : property.address}}</a>
      </li>
      <form class="form-inline my-2 my-lg-0 ml-auto">
        <button class="btn btn-outline-success btn-sm my-sm-2" type="submit">Share</button>
        <button class="btn btn-success btn-sm ml-2 my-sm-0" type="submit">Export</button>
      </form>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class SecondNavBar extends Vue {
  @Prop()
  private property!: object;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  background-color: white;
}
</style>