//@ts-nocheck
import { useComponent } from '@brushes/simulate-component-mini';
import { useModuleRootContext } from '@brushes/context';
import { Common } from '../common';
import Taro, { getCurrentPages, pageScrollTo } from '@tarojs/taro';
import { useMemo } from 'react';
import { Tabbar } from '../../tabbar';
import { useNavigateImpl } from '@brushes/navigator-tool';

// menuCode: 有的栏目固定，不需要登录也要展示的菜单
export function Basic({ menuCode, first }: { menuCode?: string; first?: boolean }) {
  Taro.useDidShow(() => {
    pageScrollTo({
      scrollTop: 0,
      duration: 300 // 滚动动画时长，单位 ms
    });
  });
  const { NavBar, Image } = useComponent();
  const { navigator } = useNavigateImpl();
  const { path, params } = Taro.useRouter();
  const { View } = useComponent();
  const safe = useModuleRootContext((s) => s.rootStore.safe);
  const routerMap = useModuleRootContext((s) => s.rootStore.routerMap);
  const tabBarData = useModuleRootContext((s) => s.rootStore.tabBarData) || [];

  const isShow = useMemo(() => {
    const isWeb = Taro.getEnv() === 'WEB';
    return isWeb && first;
  }, [first]);

  const isSecond = useMemo(() => {
    const isWeb = Taro.getEnv() === 'WEB';
    return isWeb && !first;
  }, [first]);

  const backHome = useMemo(() => {
    return getCurrentPages().length === 1;
  }, []);

  const code = useMemo(() => {
    if (menuCode) {
      return menuCode;
    }
    const { menuOpcode } = params;
    if (!menuOpcode) {
      const { menuOpcode } =
        tabBarData.find((item: { pagePath: string }) => {
          return ('/' + path).includes(item.pagePath);
        }) || {};
      return menuOpcode;
    }
    return menuOpcode;
  }, [params, tabBarData, menuCode]);

  const title = useMemo(() => {
    const { text } = routerMap[code];
    return text;
  }, [routerMap]);

  return (
    <View style={{ paddingBottom: `${first ? safe : 0}px` }}>
      {isSecond && (
        <NavBar
          title={title}
          back={
            backHome ? (
              <Image src={'https://brushes.oss-cn-shanghai.aliyuncs.com/home.svg'} height={20} />
            ) : (
              <>
                <Image src={'https://brushes.oss-cn-shanghai.aliyuncs.com/back.svg'} height={20} />
              </>
            )
          }
          onBackClick={() => navigator(backHome ? '/pages/index/index' : '1')}
        />
      )}
      {code && <Common menuOpcode={code} />}
      {isShow && (
        <>
          <View
            style={{
              boxSizing: 'border-box',
              zIndex: 1000,
              position: 'fixed',
              width: '100%',
              left: 0,
              bottom: 0
            }}
          >
            <Tabbar />
          </View>
          <View style={{ height: 46 }}></View>
        </>
      )}
    </View>
  );
}
