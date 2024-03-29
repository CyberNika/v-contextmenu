import { defineComponent } from 'vue';

import { Banner, Footer, Example } from './components';

import {
  Simple,
  Group,
  Dynamic,
  Multiple,
  CustomTrigger,
  CustomShow,
} from '../examples';

const SiteApp = defineComponent({
  name: 'SiteApp',

  render() {
    return (
      <>
        <Banner />

        <main class="main">
          <Example
            title="基本使用"
            description="菜单、分割线、子菜单和禁用"
            codepens="xxgejzQ"
          >
            <Simple />
          </Example>

          <Example
            mirror
            title="按钮组"
            description="按钮可以成组展示"
            codepens="vYgwmmL"
          >
            <Group />
          </Example>

          <Example
            title="动态菜单"
            description="动态删减菜单"
            codepens="yLgWXre"
          >
            <Dynamic />
          </Example>

          <Example
            mirror
            title="多实例和触发区域"
            description="多个 Contextmenu 实例和触发区域"
            codepens="rNjgJRg"
          >
            <Multiple />
          </Example>

          <Example
            title="自定义事件"
            description="自定义触发的事件"
            codepens="OJWYvpE"
          >
            <CustomTrigger />
          </Example>

          <Example
            mirror
            title="手动显示和隐藏"
            description="手动控制显示和隐藏"
            codepens="eYgwmwy"
          >
            <CustomShow />
          </Example>

          <Example
            hideDemo
            title="多主题"
            codepenDefaultTab={['result']}
            description="内置三种主题：默认、亮色和暗色，你也可以自定义你自己的样式"
            codepens={['BapeePd', 'gOgJJqW', 'XWpwwOw', 'ExZBagv']}
          />
        </main>

        <Footer />
      </>
    );
  },
});

export default SiteApp;
