<template>
  <div class="example container">
    <div v-if="!mirror" class="demo">
      <slot />
    </div>

    <div class="content">
      <div class="title">
        <slot name="title" />
      </div>

      <div class="description">
        <slot name="description" />
      </div>

      <div class="codepen">
        <iframe
          class="codepen-iframe"
          scrolling="no"
          :title="codepenId"
          :src="`https://codepen.io/heynext/embed/${codepenId}?height=265&theme-id=light&default-tab=css,result`"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        />
      </div>
    </div>

    <div v-if="mirror" class="demo">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SiteExample",

  props: {
    codepenId: {
      type: String,
      required: true,
    },
    mirror: Boolean,
  },
});
</script>

<style lang="less" scoped>
.example {
  display: flex;
  padding: 32px 0;

  & + & {
    border-top: 1px solid red;
  }
}

.demo {
  flex: 1;
  border: 3px dashed yellowgreen;
  border-radius: 8px;

  & + .content {
    margin-left: 60px;
  }
}

.content {
  flex: 1;

  & + .demo {
    margin-left: 60px;
  }
}

.title {
  font-size: 20px;
}

.description {
  margin-top: 24px;
}

.codepen {
  margin-top: 24px;
  height: 360px;
  background-color: #eee;

  &-iframe {
    width: 100%;
    height: 100%;
  }
}
</style>
