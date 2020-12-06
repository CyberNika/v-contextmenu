<template>
  <div class="example container">
    <div v-if="!hideDemo && !mirror" class="demo">
      <slot />
    </div>

    <div class="content">
      <div class="title">
        <slot name="title" />
      </div>

      <div class="description">
        <slot name="description" />
      </div>

      <div class="codepens">
        <iframe
          v-for="item of codepenIds"
          :key="item"
          class="codepen-iframe"
          scrolling="no"
          :title="item"
          :src="`https://codepen.io/heynext/embed/${item}?height=265&theme-id=light&default-tab=html,result`"
          frameborder="no"
          loading="lazy"
          allowtransparency="true"
          allowfullscreen="true"
        />
      </div>
    </div>

    <div v-if="!hideDemo && mirror" class="demo">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "SiteExample",

  props: {
    codepens: {
      type: [String, Array],
      required: true,
    },
    hideDemo: Boolean,
    mirror: Boolean,
  },

  setup(props) {
    const codepenIds = computed(() =>
      Array.isArray(props.codepens) ? props.codepens : [props.codepens],
    );

    return {
      codepenIds,
    };
  },
});
</script>

<style lang="less" scoped>
.example {
  position: relative;
  display: flex;
  padding-top: 60px;
  padding-bottom: $padding-top;

  & + & {
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 24px;
      width: calc(100% - 48px);
      height: 0;
      border-bottom: 2px dotted rgba(#5aa7a4, 0.4);
    }
  }
}

.demo {
  flex: 3;
  border: 3px dashed rgba(#5aa7a4, 0.9);
  border-radius: 8px;
  background-color: rgba(#5aa7a4, 0.2);

  & + .content {
    margin-left: 74px;
  }
}

.content {
  flex: 5;

  & + .demo {
    margin-left: 74px;
  }
}

.title {
  font-size: 30px;
  font-weight: 600;
}

.description {
  margin-top: 18px;
}

.codepen {
  &s {
    display: flex;
    margin-top: 24px;
    height: 360px;
    overflow-x: auto;
  }

  &-iframe {
    width: 100%;
    height: 100%;
    background-color: #eee;

    & + & {
      margin-left: 24px;
    }
  }
}
</style>
