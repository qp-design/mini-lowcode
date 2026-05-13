import { useComponent } from '@brushes/simulate-component-mini';
import { getEnv } from '@brushes/utils';
import { Container } from '../container';
import { useModuleRootContext } from '@brushes/context';
import { useMemo } from 'react';
import { Element } from '@craftjs/core';

export const StickyComponent = ({ tabBar, height = 50, padding = {} }: { tabBar?: boolean; height?: number; padding?: object }) => {
  const isMini = getEnv();
  const { View } = useComponent();
  const safe = useModuleRootContext((s) => s.rootStore.safe);
  const bottomSafeHeight = useModuleRootContext((s) => s.rootStore.bottomSafeHeight);
  const num = useMemo(() => {
    return tabBar ? safe : 0;
  }, [tabBar]);

  return (
    <View>
      <View
        style={{
          ...padding,
          backgroundColor: '#fff',
          zIndex: 1000,
          position: isMini ? 'fixed' : 'relative',
          width: `calc(100% - ${padding.paddingLeft || 0}px - ${padding.paddingRight || 0}px)`,
          left: 0,
          paddingBottom: bottomSafeHeight,
          bottom: num
        }}
      >
        <Element canvas id={'sticky'} is={Container}></Element>
      </View>
      <View style={{ height }}></View>
    </View>
  );
};
