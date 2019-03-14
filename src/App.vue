<template>
  <div id="app">
    <Contextmenu>
      <div>111111</div>
    </Contextmenu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import { Contextmenu } from "../package/index";

@Component({
  components: {
    Contextmenu,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
</style>
