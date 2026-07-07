import { useComponent } from '@brushes/simulate-component-mini';
import { Container } from '../container';
import { useModuleContext, useModuleRootContext } from '@brushes/context';
import { useMemo } from 'react';
import { Element } from '@craftjs/core';
import { getEnv } from '@brushes/utils';

export const PopupComponent = ({
  position = 'bottom',
  title = '',
  height,
  tabBar,
  code,
  backgroundColor = '#fff',
  ...restProps
}: {
  backgroundColor?: string;
  tabBar?: boolean;
  title: string;
  code: string;
  height: number;
  position: 'top' | 'bottom' | 'left' | 'right' | 'center';
}) => {
  const isMini = getEnv();

  const { Popup, View } = useComponent();
  const storeTitle = useModuleContext((s) => s.moduleStore.title);
  const setModuleStore = useModuleContext((s) => s.setModuleStore);
  const open = useModuleContext((s) => s.moduleStore[code]);

  const safe = useModuleRootContext((s) => s.rootStore.safe);
  const bottomSafeHeight = useModuleRootContext((s) => s.rootStore.bottomSafeHeight);
  const num = useMemo(() => {
    return tabBar ? safe : 0;
  }, [tabBar]);

  const resultTitle = useMemo(() => {
    if (storeTitle) {
      return storeTitle;
    }
    return title;
  }, [storeTitle, title]);

  const onClose = () => {
    if (!isMini) {
      return;
    }
    setModuleStore({
      [code]: false
    });
  };

  return (
    <View id={'root-container'} style={{ position: 'relative' }}>
      <Popup
        portal={document.getElementById('root-container')}
        visible={!isMini || open}
        title={resultTitle}
        position={position}
        lockScroll
        style={{
          backgroundColor,
          height: `${height}px`,
          position: !isMini ? 'relative' : 'fixed',
          ...(isMini ? { bottom: num } : {}),
          paddingBottom: bottomSafeHeight
        }}
        overlay={isMini}
        onClose={onClose}
        {...restProps}
        closeable={isMini}
      >
        <View style={{ ...(['bottom', 'top'].includes(position) ? { overflowY: 'auto', paddingBottom: bottomSafeHeight } : { overflowX: 'auto' }), height: `${height}px` }}>
          <Element canvas id={'popup'} is={Container}></Element>
        </View>
      </Popup>
    </View>
  );
};
