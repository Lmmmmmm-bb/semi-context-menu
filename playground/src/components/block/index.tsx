import { type CSSProperties, type FC, type PropsWithChildren } from 'react';

import './index.css';

interface BlockProps {
  color: CSSProperties['backgroundColor'];
}

const Block: FC<PropsWithChildren<BlockProps>> = props => (
  <div className="block" style={{ backgroundColor: props.color }}>
    {props.children}
  </div>
);

export default Block;
