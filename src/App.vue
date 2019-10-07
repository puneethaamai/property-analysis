<template>
  <div id="app">
    <NavBar :userInitials="userInitials" :menuItems="menuItems" />
    <SecondNavBar :property="property" />
    <div class="container-mg">
      <div class="row">
        <div class="col-sm-12 col-lg-3">
          <PropertySummary :property="property" />
        </div>
        <div class="col-md-9">
          <div class="row">
            <div class="col-sm-12 col-lg-6">
              <GPRCard />
            </div>
            <div class="col-sm-12 col-lg-6">
              <OperatingExpensesCard />
            </div>
          </div>
          <div class="row top-btm-buffer">
            <div class="col">
              <HistoricalOperatingExpenses :headers="opexHeaders" :items="opexItems" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';
import NavBar from './components/NavBar.vue';
import SecondNavBar from './components/SecondNavBar.vue';
import PropertySummary from './components/PropertySummary.vue';
import HistoricalOperatingExpenses from './components/HistoricalOperatingExpenses.vue';
import GPRCard from './components/GPRCard.vue';
import OperatingExpensesCard from './components/OperatingExpensesCard.vue';
@Component({
  components: {
    HelloWorld,
    NavBar,
    PropertySummary,
    HistoricalOperatingExpenses,
    SecondNavBar,
    GPRCard,
    OperatingExpensesCard
  }
})
export default class App extends Vue {
  private userInitials: string = 'AP';
  private menuItems: object[] = [
    { name: 'Property Analysis', active: true },
    { name: 'Rent Roll Analyzer', active: false },
    { name: 'Operating Statement Parser', active: false },
    { name: 'Markert Analysis', active: false }
  ];

  private property: object = {
    name: 'West Loop Luxury',
    street: '320 N Canal St',
    cityStateZip: 'Chicago, IL 60606',
    yearBuild: '2010',
    numberUnits: '240',
    propetyType: 'Garden',
    avm: 7403292
  };

  private opexHeaders = ['T12', 'T9', 'T6'];
  private opexItems = [
    {
      name: 'Gross Potential Rent (GPR)',
      values: [-27887, -30447, -32964],
      isTotal: false
    },
    {
      name: 'Less Vacancy Loss',
      values: [-97156, -73531, -89770],
      isTotal: false
    },
    {
      name: 'Less Bad Debt',
      values: [-40569, -50379, -64320],
      isTotal: false
    },
    {
      name: 'Less Concessions',
      values: [-61595, -59964, -71150],
      isTotal: false
    },
    {
      name: 'Net Rentable Income',
      values: [-227207, -214321, -258204],
      isTotal: true
    },
    {
      name: 'Laundry/Vending Income (Net)',
      values: [0, 0, 0],
      isTotal: false
    },
    {
      name: 'Parking Income (Net)',
      values: [0, 0, 0],
      isTotal: false
    },
    {
      name: 'Commercial Income (Net)',
      values: [0, 0, 0],
      isTotal: false
    },
    {
      name: 'RUBS (income line item)',
      values: [71476, 71509, 64466],
      isTotal: false
    },
    {
      name: 'RUBS (expense line item)',
      values: [0, 0, 0],
      isTotal: false
    },
    {
      name: 'Other Income (Allowable)',
      values: [70599, 74488, 65118],
      isTotal: false
    },
    {
      name: 'App Fee',
      values: [5440, 4693, 3320],
      isTotal: false
    },
    {
      name: 'Forfeit Deposits',
      values: [10600, 7771, 7946],
      isTotal: false
    },
    {
      name: 'Late/Early Term Fees',
      values: [39292, 37328, 35122],
      isTotal: false
    },
    {
      name: 'Pet Deposits',
      values: [8371, 7407, 6830],
      isTotal: false
    },
    {
      name: 'Premiums',
      values: [7134, 7881, 8074],
      isTotal: false
    },
    {
      name: 'Corporate Prem.',
      values: [0, 0, 0],
      isTotal: false
    },
    {
      name: 'Medicare/Medicaid',
      values: [0, 0, 0],
      isTotal: false
    },
    {
      name: 'Nursing/Medical Income',
      values: [0, 0, 0],
      isTotal: false
    },
    {
      name: 'Meals Income',
      values: [0, 0, 0],
      isTotal: false
    },
    {
      name: 'Second Res. Income',
      values: [0, 0, 0],
      isTotal: false
    },
    {
      name: 'Unallowable',
      values: [1122, 1421, 2010],
      isTotal: false
    },
    {
      name: 'EGI',
      values: [-13173, -1823, -65318],
      isTotal: true
    }
  ];
}
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  //margin-top: 60px;
  background-color: #f0f0f0;
}

.container-mg {
  margin: 20px 50px;
}
.top-btm-buffer {
  margin: 20px 0px;
  
}

.card-header {
  background-color: white !important;
  font-weight: bold;
}
</style>
