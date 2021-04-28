import { defineComponent } from "vue";

import { Banner, Footer, Example } from "./components";

import { Simple, Group, Dynamic } from "../examples";

const SiteApp = defineComponent({
  name: "SiteApp",

  render() {
    return (
      <>
        <Banner />

        <main class="main">
          <Example
            title="基本使用"
            description="菜单、分割线、子菜单和禁用"
            codepens="yLaeBeE"
          >
            <Simple />
          </Example>

          <Example
            title="按钮组"
            description="按钮组按钮组按钮组按钮组按钮组"
            codepens="yLaeBeE"
            mirror
          >
            <Group />
          </Example>

          <Example
            title="动态菜单"
            description="动态菜单动态菜单动态菜单动态菜单动态菜单动态菜单"
            codepens="yLaeBeE"
          >
            <Dynamic />
          </Example>

          <Example
            title="多实例和触发区域"
            description="多实例和触发区域多实例和触发区域"
            codepens="yLaeBeE"
            mirror
          >
            <Simple />
          </Example>

          <Example
            title="自定义事件"
            description="自定义事件"
            codepens="yLaeBeE"
          >
            <Group />
          </Example>

          <Example
            title="手动显示和隐藏"
            description="手动显示和隐藏手动显示和隐藏手动显示和隐藏手动显示和隐藏"
            codepens="yLaeBeE"
            mirror
          >
            <Group />
          </Example>

          <Example
            title="多主题"
            description="内置三种主题：默认、亮色和暗色，你也可以自定义你自己的样式"
            codepens={["yLaeBeE", "KEzEYd", "KEzEYd", "KEzEYd"]}
          >
            <Group />
          </Example>
        </main>

        <Footer />
      </>
    );
  },
});

export default SiteApp;
