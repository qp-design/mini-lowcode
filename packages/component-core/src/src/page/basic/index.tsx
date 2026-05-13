import { useComponent } from '@brushes/simulate-component-mini';
import { useModuleRootContext } from '@brushes/context';
import { Common } from '../common';
import Taro from '@tarojs/taro';
import { useMemo } from 'react';

// menuCode: 有的栏目固定，不需要登录也要展示的菜单
export function Basic({ menuCode, first }: { menuCode?: string; first?: boolean }) {
  const { path, params } = Taro.useRouter();
  const { View } = useComponent();
  const safe = useModuleRootContext((s) => s.rootStore.safe);
  const tabBarData = useModuleRootContext((s) => s.rootStore.tabBarData) || [];

  const code = useMemo(() => {
    if (menuCode) {
      return menuCode;
    }
    const { menuOpcode } = params;
    if (!menuOpcode) {
      const { menuOpcode } = tabBarData.find((item: { pagePath: string }) => '/' + item.pagePath === path) || {};
      return menuOpcode;
    }
    return menuOpcode;
  }, [params, tabBarData, menuCode]);

  if (!code) {
    return;
  }
  return (
    <View style={{ paddingBottom: `${first ? safe : 0}px` }}>
      <Common menuOpcode={code} />
    </View>
  );
}
