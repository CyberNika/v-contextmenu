import { defineComponent } from "vue";
import {
  GithubOutlined,
  GlobalOutlined,
  BugFilled,
  RocketFilled,
} from "@ant-design/icons-vue";

import { Contextmenu, ContextmenuItem } from "../../../src";

import styles from "./index.module.less";

const badges = [
  {
    url:
      "https://img.shields.io/github/stars/heynext/v-contextmenu?logo=github&style=flat",
    link: "https://github.com/heynext/v-contextmenu",
    title: "stars",
  },
  {
    url:
      "https://img.shields.io/github/forks/heynext/v-contextmenu?logo=github&style=flat",
    link: "https://github.com/heynext/v-contextmenu",
    title: "fork",
  },
  {
    url: "https://img.shields.io/npm/dw/v-contextmenu?logo=npm&style=flat",
    link: "https://www.npmjs.com/package/v-contextmenu",
    title: "downloads",
  },
];

const SiteBanner = defineComponent({
  name: "SiteBanner",

  setup() {
    return () => (
      <>
        <header v-contextmenu={[null, "contextmenu"]} class={styles.header}>
          <nav class={[styles.nav, "container"]}>
            <div class={styles.navLeft}>
              <span class={styles.logo}>
                <BugFilled />
              </span>

              <span class={styles.navItem}>
                <a href="https://github.com/heynext/v-contextmenu">文档</a>
              </span>

              <span class={styles.navItem}>
                <a href="https://github.com/heynext/v-contextmenu">API</a>
              </span>

              <span class={styles.navItem}>
                <a href="https://github.com/heynext/v-contextmenu">主题</a>
              </span>

              <span class={styles.navItem}>
                <a href="https://github.com/heynext/v-contextmenu">关于</a>
              </span>
            </div>

            <div class={styles.navRight}>
              <span class={styles.navItem}>
                <a href="https://github.com/heynext/v-contextmenu">
                  <GithubOutlined />
                </a>
              </span>

              <span class={[styles.navItem, styles.navItemDisabled]}>
                <GlobalOutlined />
                &nbsp;简体中文
              </span>
            </div>
          </nav>

          <h1 class={styles.title}>VContextmenu</h1>

          <p class={styles.description}>
            适用于
            <code> Vue 3.0 </code>的<code> Contextmenu </code>
            组件。
          </p>

          <div class={styles.badges}>
            {badges.map((item, index) => (
              <a
                key={index}
                href={item.link}
                title={item.title}
                class={styles.badge}
              >
                <img
                  class={styles.badgeImage}
                  src={item.url}
                  alt={item.title}
                />
              </a>
            ))}
          </div>

          <div class={styles.setups}>
            <div class={styles.setup}>
              <button class={styles.setupButton}>
                文档
                <span class={styles.setupButtonDocIcon}>
                  <RocketFilled />
                </span>
              </button>
            </div>

            <div class={styles.setup}>
              <code>
                <span class={styles.setupLabel}>NPM</span>
                <span class={styles.setupContent}>
                  npm i v-contextmenu@next
                </span>
              </code>
            </div>

            <div class={styles.setup}>
              <code>
                <span class={styles.setupLabel}>CDN</span>
                <span class={styles.setupContent}>
                  https://unpkg.com/v-contextmenu@next
                </span>
              </code>
            </div>
          </div>
        </header>

        <Contextmenu ref="contextmenu">
          <ContextmenuItem>GitHub</ContextmenuItem>
          <ContextmenuItem>NPM</ContextmenuItem>
          <ContextmenuItem>Document</ContextmenuItem>
        </Contextmenu>
      </>
    );
  },
});

export default SiteBanner;
