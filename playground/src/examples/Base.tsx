import { FC } from 'react';
import { Dropdown, Toast } from '@douyinfe/semi-ui';
import { SemiContextMenu } from 'semi-context-menu';
import { IconCopy, IconRefresh } from '@douyinfe/semi-icons';

import { renderItem } from './utils';
import Block from '../components/block';

const Base: FC = () => {
  const menu = (
    <Dropdown.Menu>
      <Dropdown.Title>Base Usage</Dropdown.Title>
      <Dropdown.Divider />
      <Dropdown.Item icon={<IconCopy />} onClick={() => Toast.success('Copy')}>
        {renderItem('Copy', 'Ctrl + C')}
      </Dropdown.Item>
      <Dropdown.Item
        icon={<IconRefresh />}
        onClick={() => Toast.success('Refresh')}
      >
        {renderItem('Refresh', 'Ctrl + R')}
      </Dropdown.Item>
    </Dropdown.Menu>
  );

  return (
    <SemiContextMenu clickToHide render={menu}>
      <Block color='orange'>Base Usage</Block>
    </SemiContextMenu>
  );
};

export default Base;
