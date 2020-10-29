import { defineComponent, ref } from 'vue'

import { classnames } from '../src/utils'
import { Simple, Divider } from '../examples'

const GITHUB_STAR_LINK =
  'https://ghbtns.com/github-btn.html?user=heynext&repo=v-contextmenu&type=star&count=true'

const USAGE_LINK =
  'https://github.com/heynext/v-contextmenu/blob/master/README.md'

const EXAMPLES = [
  { id: 'Simple', label: '基础', component: Simple },
  { id: 'Divider', label: '分割线', component: Divider }
]

const SiteApp = defineComponent({
  name: 'SiteApp',

  setup() {
    return {
      examples: ref(EXAMPLES),
      currentExample: ref(0)
    }
  },

  render() {
    return (
      <div>
        <header>
          <h1>v-contextmenu</h1>

          <p class="description">
            <span>适用于 Vue 2.0 的 ContextMenu 组件。</span>
            <iframe
              class="gh-star"
              scrolling="0"
              width="170px"
              height="20px"
              src={GITHUB_STAR_LINK}
              frameborder="0"
            ></iframe>
          </p>
        </header>

        <section class="usage">
          <h3>用法</h3>

          <a class="usage-link" href={USAGE_LINK}>
            安装 & 使用 <i class="v-contextmenu-iconfont usage-icon"></i>
          </a>
        </section>

        <nav>
          <ul class="nav-list">
            {this.examples.map((item) => (
              <li
                key="item.id"
                class={classnames({
                  'nav-item': true,
                  active: item.id === this.currentExample
                })}
                onClick={() => {
                  this.currentExample = item.id
                }}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    )
  }
})

export default SiteApp
