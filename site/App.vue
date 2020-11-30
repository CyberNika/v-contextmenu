<template>
  <section class="examples">
    <div class="example-container">
      <component :is="currentExample" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

import Simple from "../examples/Simple.vue";

const EXAMPLES = [
  { id: "Simple", label: "基础" },
  { id: "Divider", label: "分割线" },
];

export default defineComponent({
  name: "ExampleApp",

  components: {
    Simple,
  },

  setup() {
    const currentExample = ref(EXAMPLES[0].id);

    return {
      currentExample,
    };
  },
});
</script>
