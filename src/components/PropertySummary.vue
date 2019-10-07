<template>
  <div>
    <div class="card" style>
      <img
        class="card-img-top"
        src="https://maps.googleapis.com/maps/api/streetview?size=400x200&pitch=10&fov=180&location=320%20N%20Canal%20St,%20Chicago,%20IL%2060606&key=AIzaSyApsGVNO-Ms2sIJM4PtmwC5VfeutsZSExo"
        alt="Card image cap"
      />
      <div class="card-body">
        <p class="mb-0">
          <strong>{{property.street}}</strong>
        </p>
        <p class="text-muted mb-0">{{property.cityStateZip}}</p>
        <p
          class="text-muted"
        >{{property.numberUnits ? property.numberUnits : '--'}} Units /{{property.propetyType ? property.propetyType : '--'}} / {{property.yearBuild ? property.yearBuild : '--'}}</p>
        <p class="text-success">{{property.avm ? property.avm : '--' | currency}} AVM</p>

        <LateralNav :options="propertySections" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import LateralNav from './LateralNav.vue';

@Component({
  components: {
    LateralNav
  }
})
export default class NavBar extends Vue {
  @Prop()
  private property!: object;

  private propertySections: object[] = [
    { name: 'Comparables', selected: false, icon: '' },
    { name: 'Operating Expenses', selected: true },
    { name: 'Rent roll / Unit Mix', selected: false },
    { name: 'Amenities', selected: false },
    { name: 'Market', selected: false }
  ];
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>