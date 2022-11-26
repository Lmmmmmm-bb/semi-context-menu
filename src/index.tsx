import {
  FC,
  MouseEvent as ReactMouseEvent,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
import { Dropdown } from '@douyinfe/semi-ui';

import styles from './index.module.scss';
import { SemiContextMenuProps } from './interface';

export const SemiContextMenu: FC<PropsWithChildren<SemiContextMenuProps>> = (
  props
) => {
  const { children, className, ...dropdownProps } = props;
  const maskRef = useRef<HTMLDivElement | null>(null);
  const [renderKey, setRenderKey] = useState(0);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleContextMenu = useCallback(
    (e: ReactMouseEvent<HTMLDivElement>) => {
      e.preventDefault();
      e.stopPropagation();
      handleContextMenuShow(e as never as MouseEvent);
    },
    []
  );

  const handleContextMenuShow = useCallback((e: MouseEvent) => {
    setVisible(true);
    setPosition({ top: e.clientY, left: e.clientX });
    setRenderKey((preRenderKey) => preRenderKey + 1);
    maskRef.current && document.body.appendChild(maskRef.current);
  }, []);

  const handleContextMenuHide = useCallback((e: Event) => {
    e.preventDefault();
    e.stopPropagation();
    setVisible(false);
    maskRef.current && document.body.removeChild(maskRef.current);
  }, []);

  useEffect(() => {
    maskRef.current = document.createElement('div');
    maskRef.current.className = styles.maskWrapper;

    maskRef.current?.addEventListener(
      'mousedown',
      handleContextMenuHide,
      false
    );
    maskRef.current?.addEventListener(
      'contextmenu',
      handleContextMenuShow,
      false
    );

    return () => {
      maskRef.current?.removeEventListener(
        'mousedown',
        handleContextMenuHide,
        false
      );
      maskRef.current?.removeEventListener(
        'contextmenu',
        handleContextMenuShow,
        false
      );
    };
  }, []);

  return (
    <>
      <div className={className} onContextMenu={handleContextMenu}>
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
