<template>
  <div>
    <ul>
      <li v-for="(value, x) in options" :key="x">
        <a href="#" :class="value.selected ? 'selected' : ''">
          <i class="fa fa-list" :class="value.selected ? 'text-light' : 'text-success'"></i>
          <span class="mg-r">{{value.name}}</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
  @Prop()
  private options!: object[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 100%;
  text-align: left;
}

li a {
  display: block;
  color: #000;
  padding: 8px 16px 8px 0px;
  text-decoration: none;
}

.selected {
  background-color: #555;
  color: white;
}

.mg-r {
  margin-left: 20px;
}
</style>