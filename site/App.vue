<template>
  <site-banner />

  <main class="main">
    <example codepens="KEzEYd">
      <template #title>基本使用</template>
      <template #description>菜单、分割线、子菜单和禁用</template>

      <example-simple />
    </example>

    <example mirror codepens="KEzEYd">
      <template #title>按钮组</template>
      <template #description>按钮组按钮组按钮组按钮组按钮组</template>

      <example-group />
    </example>

    <example codepens="KEzEYd">
      <template #title>动态菜单</template>
      <template #description>
        动态菜单动态菜单动态菜单动态菜单动态菜单动态菜单
      </template>

      <example-dynamic />
    </example>

    <example mirror codepens="KEzEYd">
      <template #title>多实例和触发区域</template>
      <template #description> 多实例和触发区域多实例和触发区域 </template>

      <example-group />
    </example>

    <example codepens="KEzEYd">
      <template #title>自定义事件</template>
      <template #description>自定义事件</template>

      <example-group />
    </example>

    <example mirror codepens="KEzEYd">
      <template #title>手动显示和隐藏</template>
      <template #description>
        手动显示和隐藏手动显示和隐藏手动显示和隐藏手动显示和隐藏
      </template>

      <example-group />
    </example>

    <example hide-demo :codepens="['KEzEYd', 'KEzEYd', 'KEzEYd', 'KEzEYd']">
      <template #title>多主题</template>
      <template #description>
        内置三种主题：默认、亮色和暗色，你也可以自定义你自己的样式
      </template>
    </example>
  </main>

  <site-footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";

import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";
import Example from "./components/Example.vue";

import {
  Simple as ExampleSimple,
  Group as ExampleGroup,
  Dynamic as ExampleDynamic,
} from "../examples";

export default defineComponent({
  name: "Site",

  components: {
    SiteBanner: Banner,
    SiteFooter: Footer,
    Example,
    ExampleSimple,
    ExampleGroup,
    ExampleDynamic,
  },
});
</script>

<style lang="less" scoped>
.main {
  margin-top: 20px;
}
</style>
