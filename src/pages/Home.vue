<template>
  <b-container>
    <b-row>
      <b-col>
        <h1>Province of British Columbia</h1>
      </b-col>
    </b-row>
    <b-row class="d-flex align-items-center">
      <b-col id="selectLocationContainer" cols="4">
        <label for="selectLocation">Select aquifer location:</label>
        <b-form-select
          id="selectLocation"
          v-model="selectedLocation"
          :options="aquiferLocations"
          v-on:change="locationChangeHandler"
        ></b-form-select>
      </b-col>
      <b-col
        id="selectedLocationContainer"
        v-if="selectedLocation == 'Please select a location'"
      >
        Selected location:<br />
        <b-alert show
          ><strong>{{ selectedLocation }}</strong></b-alert
        >
      </b-col>
      <b-col id="selectedLocationDetail" v-else>
        <b-table striped hover :items="items" :fields="fields"></b-table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import AQUIFERS from "@/data/aquifers.json";
const SELECTPLACEHOLDER = "Please select a location";

export default {
  components: {},
  data() {
    return {
      selectedLocation: SELECTPLACEHOLDER,
      items: [],
      fields: ["aquifer_id", "mapping_year", "name", "area", "vulnerability"],
      aquifers: AQUIFERS.results, // TODO: import aquifers from an API
    };
  },
  methods: {
    locationChangeHandler(eve) {
      this.items = [];
      this.items = this.aquifers.filter((x) => x.location == eve);
    },
  },
  computed: {
    aquiferLocations() {
      let locations = this.aquifers
        // Remove null or whitespace locations (must do before sort)
        .filter((item) => item.location)
        // Get only locations
        .map(function (item) {
          let x = item.location.trim();
          return { value: x, text: x };
        })
        // Sort alphabetical by location
        // BUG: lowercase items go to bottom of list
        .sort(function (a, b) {
          if (a.value < b.value) {
            return -1;
          }
          if (a.value > b.value) {
            return 1;
          }
          return 0;
        })
        // Return unique values (must do after sort, refactor if performance issue)
        .filter(function (el, idx, arr) {
          return !idx || el.value != arr[idx - 1].value;
        });
      // Insert item
      locations.unshift({
        value: SELECTPLACEHOLDER,
        text: SELECTPLACEHOLDER,
        disabled: true,
      });
      return locations;
    },
  },
};
</script>
<style scoped>
#selectLocation {
  width: 100%;
}
</style>
