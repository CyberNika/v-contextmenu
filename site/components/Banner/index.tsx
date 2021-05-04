import { defineComponent } from "vue";
import { GithubOutlined, RocketFilled } from "@ant-design/icons-vue";

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
                <a
                  href="https://github.com/heynext/v-contextmenu"
                  target="__blank"
                >
                  <GithubOutlined />
                </a>
              </span>
            </div>

            <div class={styles.navRight}>
              <span class={styles.navItem}>
                <a href="v2" target="__blank">
                  2.x 文档
                </a>
              </span>

              <span class={styles.navItem}>
                <a href="https://heynext.xyz" target="__blank">
                  关于
                </a>
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
              <a
                href="https://github.com/heynext/v-contextmenu/blob/main/docs/usage.md"
                target="__blank"
              >
                <button class={styles.setupButton}>
                  文档&nbsp;
                  <span class={styles.setupButtonDocIcon}>
                    <RocketFilled />
                  </span>
                </button>
              </a>
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
          <ContextmenuItem
            onClick={() => {
              window.open("https://github.com/heynext/v-contextmenu");
            }}
          >
            GitHub
          </ContextmenuItem>
          <ContextmenuItem
            onClick={() => {
              window.open("https://www.npmjs.com/package/v-contextmenu");
            }}
          >
            NPM
          </ContextmenuItem>
          <ContextmenuItem
            onClick={() => {
              window.open(
                "https://github.com/heynext/v-contextmenu/blob/main/docs/usage.md",
              );
            }}
          >
            Document
          </ContextmenuItem>
        </Contextmenu>
      </>
    );
  },
});

export default SiteBanner;
