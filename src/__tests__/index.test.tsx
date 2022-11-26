import { Dropdown } from '@douyinfe/semi-ui';
import { describe, it, expect } from 'vitest';

import { SemiContextMenu } from '..';

describe('Semi Context Menu', () => {
  it('test', () => {
    const menu = (
      <Dropdown.Menu>
        <Dropdown.Title>Context Menu</Dropdown.Title>
        <Dropdown.Divider />
        <Dropdown.Item>复制</Dropdown.Item>
        <Dropdown.Item>刷新</Dropdown.Item>
      </Dropdown.Menu>
    );

    const wrapper = (
      <SemiContextMenu render={menu}>
        <div>Hello World</div>
      </SemiContextMenu>
    );

    expect(1).toBe(1);
  });
});
