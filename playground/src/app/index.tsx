import { FC } from 'react';
import { Dropdown, Toast } from '@douyinfe/semi-ui';
import { SemiContextMenu } from 'lm-react-lib-starter';
import { IconCopy, IconRefresh } from '@douyinfe/semi-icons';

import './index.css';
import Block from '../components/block';

const App: FC = () => {
  const renderItem = (left: string, right: string) => (
    <div className='item'>
      <div className='left'>{left}</div>
      <div className='right'>{right}</div>
    </div>
  );

  const menu = (
    <Dropdown.Menu>
      <Dropdown.Title>Context Menu</Dropdown.Title>
      <Dropdown.Divider />
      <Dropdown.Item icon={<IconCopy />} onClick={() => Toast.success('Copy')}>
        {renderItem('复制', 'Ctrl + C')}
      </Dropdown.Item>
      <Dropdown.Item
        icon={<IconRefresh />}
        onClick={() => Toast.success('Refresh')}
      >
        {renderItem('刷新', 'Ctrl + R')}
      </Dropdown.Item>
    </Dropdown.Menu>
  );

  return (
    <div className='App'>
      <SemiContextMenu clickToHide render={menu}>
        <Block>Context Menu Operable Area</Block>
      </SemiContextMenu>
    </div>
  );
};

export default App;
