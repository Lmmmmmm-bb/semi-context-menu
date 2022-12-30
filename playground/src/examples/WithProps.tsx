import { FC } from 'react';
import { Dropdown, Toast } from '@douyinfe/semi-ui';
import { SemiContextMenu } from 'semi-context-menu';
import { IconCopy, IconDelete } from '@douyinfe/semi-icons';

import { renderItem } from './utils';
import Block from '../components/block';

const WithProps: FC = () => {
  const menu = (
    <Dropdown.Menu>
      <Dropdown.Title>With Semi Dropdown Props</Dropdown.Title>
      <Dropdown.Divider />
      <Dropdown.Item
        type='primary'
        icon={<IconCopy />}
        onClick={() => Toast.success('Paste')}
      >
        {renderItem('Paste', 'Ctrl + V')}
      </Dropdown.Item>
      <Dropdown.Item
        type='danger'
        icon={<IconDelete />}
        onClick={() => Toast.success('Delete')}
      >
        {renderItem('Delete', 'Del')}
      </Dropdown.Item>
    </Dropdown.Menu>
  );

  return (
    <SemiContextMenu clickToHide render={menu}>
      <Block color='olive'>With Semi Dropdown Props</Block>
    </SemiContextMenu>
  );
};

export default WithProps;
