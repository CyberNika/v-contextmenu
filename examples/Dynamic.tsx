import { defineComponent, reactive } from 'vue';

import TriggerBox from './TriggerBox';
import {
  Contextmenu,
  ContextmenuItem,
  ContextmenuDivider,
  ContextmenuGroup,
  ContextmenuSubmenu,
} from '../src';

const ExampleDynamic = defineComponent({
  name: 'ExampleDynamic',

  setup() {
    const extra = reactive<('item' | 'group' | 'submenu')[]>([]);

    return () => (
      <>
        <div
          v-contextmenu={[null, 'contextmenu']}
          style={{
            height: '100%',
          }}
        >
          <TriggerBox>
            <code>右键点击此区域</code>
          </TriggerBox>
        </div>

        <Contextmenu ref="contextmenu">
          <ContextmenuGroup title="操作">
            <ContextmenuItem
              hideOnClick={false}
              onClick={() => {
                extra.push('item');
              }}
            >
              添加菜单
            </ContextmenuItem>
            <ContextmenuItem
              hideOnClick={false}
              onClick={() => {
                extra.push('group');
              }}
            >
              添加菜单组
            </ContextmenuItem>
            <ContextmenuItem
              hideOnClick={false}
              onClick={() => {
                extra.push('submenu');
              }}
            >
              添加子菜单
            </ContextmenuItem>
            <ContextmenuItem
              hideOnClick={false}
              onClick={() => {
                extra.pop();
              }}
            >
              删除
            </ContextmenuItem>
          </ContextmenuGroup>

          {extra.map((item, index) => {
            const res = [<ContextmenuDivider />];

            if (item === 'group') {
              res.push(
                <ContextmenuGroup title={`菜单组 ${index + 1}`}>
                  <ContextmenuItem>菜单1</ContextmenuItem>
                  <ContextmenuItem>菜单2</ContextmenuItem>
                  <ContextmenuItem>菜单3</ContextmenuItem>
                </ContextmenuGroup>,
              );
            } else if (item === 'submenu') {
              res.push(
                <ContextmenuSubmenu title={`子菜单 ${index + 1}`}>
                  <ContextmenuItem>菜单1</ContextmenuItem>
                  <ContextmenuItem>菜单2</ContextmenuItem>
                  <ContextmenuItem>菜单3</ContextmenuItem>
                </ContextmenuSubmenu>,
              );
            } else {
              res.push(<ContextmenuItem>菜单 {index + 1}</ContextmenuItem>);
            }

            return res;
          })}
        </Contextmenu>
      </>
    );
  },
});

export default ExampleDynamic;
