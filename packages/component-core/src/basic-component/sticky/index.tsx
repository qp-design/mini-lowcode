import { useComponent } from '@brushes/simulate-component-mini';
import { getEnv } from '@brushes/utils';
import { Container } from '../container';
import { useModuleRootContext } from '@brushes/context';
import { useMemo } from 'react';
import { Element } from '@craftjs/core';

export const StickyComponent = ({ tabBar, backgroundColor = '#fff', height = 60, padding = {} }: { backgroundColor: string; tabBar?: boolean; height?: number; padding?: object }) => {
  const isMini = getEnv();
  const { View } = useComponent();
  const safe = useModuleRootContext((s) => s.rootStore.safe);
  const bottomSafeHeight = useModuleRootContext((s) => s.rootStore._bottomSafeHeight);
  const num = useMemo(() => {
    return tabBar ? safe : 0;
  }, [tabBar]);
  return (
    <View>
      <View
        style={{
          boxSizing: 'border-box',
          backgroundColor,
          zIndex: 1000,
          position: isMini ? 'fixed' : 'relative',
          width: '100%',
          left: 0,
          ...padding,
          bottom: num,
          paddingBottom: bottomSafeHeight
        }}
      >
        <Element canvas id={'sticky'} is={Container}></Element>
      </View>
      <View style={{ height }}></View>
    </View>
  );
};
