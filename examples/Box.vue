<template>
  <div class="box">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ExampleBox",
});
</script>

<style lang="less" scoped>
.box {
  display: inline-flex;
  margin: 24px;
  width: 200px;
  height: 200px;
  border: 1px solid yellowgreen;

  & > * {
    width: 100%;
    height: 100%;
  }
}
</style>
