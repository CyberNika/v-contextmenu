import { computed, defineComponent, ref } from 'vue'

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
      currentExample: ref(EXAMPLES[0].id)
    }
  },

  render() {
    const currentExampleRef = computed(
      () =>
        EXAMPLES.find((item) => item.id === this.currentExample)?.component ||
        EXAMPLES[0].component
    )

    console.log(currentExampleRef.value)

    return (
      <div>
        {/* <header>
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
        </section> */}

        <section class="examples">
          <h3>示例</h3>

          <ul class="examples-list">
            {this.examples.map((item) => (
              <li
                key="item.id"
                class={classnames({
                  'examples-item': true,
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

          <div class="example-container">
            <currentExampleRef.value />
          </div>
        </section>
      </div>
    )
  }
})

export default SiteApp
