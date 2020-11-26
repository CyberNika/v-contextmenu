import { defineComponent } from "vue";

import { Contextmenu, ContextmenuItem, ContextmenuTrigger } from "../src";

const SimpleExample = defineComponent({
  setup() {
    return {};
  },

  render() {
    return (
      <div>
        <Contextmenu ref="contextmenu">
          <div>xx</div>
          <ContextmenuItem>
            <div>xxxxx</div>
          </ContextmenuItem>
        </Contextmenu>

        <ContextmenuTrigger trigger="contextmenu" target="contextmenu">
          <div>click me</div>
        </ContextmenuTrigger>
      </div>
    );
  },
});

export default SimpleExample;
