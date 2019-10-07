<template>
  <div>
    <div class="card">
      <div class="card-header">Historical operating Expenses</div>
      <div class="card-body">
        <table class="table table-sm w-75">
          <tr>
            <th></th>
            <th v-for="header in headers" :key="header">{{header}}</th>
          </tr>
          <tr v-for="(row, i) in items" :key="i">
            <td>{{row.name}}</td>
            <td v-for="(value, x) in row.values" :key="x">{{value | currency}}</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class NavBar extends Vue {
  @Prop()
  private headers!: string[];

  @Prop()
  private items!: object[];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table tr:nth-child(1) th {
  border-top-color: transparent;
}

table tr:last-child {
  font-style: italic;
  font-weight: bold;
}
</style>