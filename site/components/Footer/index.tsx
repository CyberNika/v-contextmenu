import { defineComponent } from 'vue';

import styles from './index.module.less';

const SiteFooter = defineComponent({
  name: 'SiteFooter',

  setup() {
    return () => (
      <footer class={styles.footer}>
        <span>Created with ❤ by </span>
        <a class={styles.link} href="https://github.com/CyberNika">
          @CyberNika
        </a>
        <span>&nbsp; ⦙ &nbsp; © 2020 - present MIT License</span>
      </footer>
    );
  },
});

export default SiteFooter;
