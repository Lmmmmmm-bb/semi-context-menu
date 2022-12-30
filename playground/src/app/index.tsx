import { FC } from 'react';
import { Typography } from '@douyinfe/semi-ui';

import './index.css';
import { examplesSource } from './config';
import { Base, WithProps } from '../examples';

const { Text } = Typography;

const App: FC = () => (
  <div className='App'>
    <header>
      <Text link={{ href: examplesSource, target: '_blank' }}>
        <h2>Example Code</h2>
      </Text>
    </header>
    <Base />
    <WithProps />
  </div>
);

export default App;
