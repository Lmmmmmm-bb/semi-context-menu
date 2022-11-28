import {
  FC,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { Dropdown } from '@douyinfe/semi-ui';

import styles from './index.module.scss';
import { MouseEventType, SemiContextMenuProps } from './interface';

export const SemiContextMenu: FC<PropsWithChildren<SemiContextMenuProps>> = (
  props
) => {
  const { children, className, ...dropdownProps } = props;
  // context menu mask dom ref
  const maskRef = useRef<HTMLDivElement | null>(null);
  // position key to force update of context menu
  const [renderKey, setRenderKey] = useState(0);
  const [visible, setVisible] = useState(false);
  // context menu position
  const [position, setPosition] = useState({ top: 0, left: 0 });

  // prevent default context menu and stop propagation
  const preventDefault = useCallback((e: MouseEventType) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleShowContextMenu = useCallback((e: MouseEventType) => {
    preventDefault(e);
    setVisible(true);
    setPosition({ top: e.clientY, left: e.clientX });
    // force update context menu position
    setRenderKey((preRenderKey) => preRenderKey + 1);
    maskRef.current && document.body.appendChild(maskRef.current);
  }, []);

  const handleHideContextMenu = useCallback((e: MouseEventType) => {
    preventDefault(e);
    setVisible(false);
    maskRef.current && document.body.removeChild(maskRef.current);
  }, []);

  // mask dom event listener
  useEffect(() => {
    maskRef.current = document.createElement('div');
    maskRef.current.className = styles.maskWrapper;

    maskRef.current?.addEventListener(
      'mousedown',
      handleHideContextMenu,
      false
    );

    // remove event listener when unmount
    return () => {
      maskRef.current?.removeEventListener(
        'mousedown',
        handleHideContextMenu,
        false
      );
    };
  }, []);

  return (
    <>
      <div className={className} onContextMenu={handleShowContextMenu}>
        {children}
      </div>
      <Dropdown
        trigger='custom'
        position='bottomLeft'
        rePosKey={renderKey}
        visible={visible}
        {...dropdownProps}
      >
        <span style={{ position: 'fixed', ...position }} />
      </Dropdown>
    </>
  );
};
