import { FC, PropsWithChildren } from 'react';

import './index.css';

const Block: FC<PropsWithChildren> = (props) => (
  <div className='block'>{props.children}</div>
);

export default Block;
