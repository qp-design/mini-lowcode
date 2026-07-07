import { useEffect } from 'react';
import { getBaseUrl, taroMessage } from '@brushes/utils';
import { isEmpty } from 'lodash';
import { useModuleRootContext } from '@brushes/context';
import { request, getEnv, getWindowInfo } from '@tarojs/taro';

const tabBarDefault = [
  {
    pagePath: 'pages/index/index',
    text: '首页'
  },
  {
    pagePath: 'pages/classify/index',
    text: '分类'
  },
  {
    pagePath: 'pages/shopping/index',
    text: '购物车'
  },
  {
    pagePath: 'pages/my/index',
    text: '我的'
  },
  {
    pagePath: 'pages/dynamicTab/index',
    text: '自定义页面'
  }
];

const fetchMenuIo = () => {
  let baseUrl = getBaseUrl();
  return new Promise((resolve, reject) => {
    request({
      url: `${baseUrl}web/cms/tginfoMenu/queryNewTginfoMenuTree.json`,
      header: {
        'saas-Agent': getEnv() === 'WEAPP' ? 'qj-wemini' : 'qj-wap',
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        dataState: 2
      },
      success: function (res) {
        resolve(res.data);
      },
      fail: function (res) {
        reject(res);
      }
    });
  });
};

export async function useInit() {
  const setModuleRootStore = useModuleRootContext((s) => s.setModuleRootStore);
  const taroMenu = useModuleRootContext((s) => s.rootStore.taroMenu) || {};
  const menuImg = useModuleRootContext((s) => s.rootStore.menuImg) || [];

  useEffect(() => {
    (async () => {
      try {
        const env = getEnv();
        let safe = 0;
        let _bottomSafeHeight = 0;

        if (env !== 'WEB') {
          const sysInfo = getWindowInfo();
          const { windowWidth, safeArea, screenHeight } = sysInfo;
          _bottomSafeHeight = screenHeight - safeArea.bottom;
          safe = Math.floor((windowWidth / 375) * 46);
        }

        const { list: result } = !isEmpty(taroMenu) ? taroMenu : await fetchMenuIo();

        // 重新弄一套组装pagePath
        const tabBarData = fetchTabBarPath(result, menuImg);
        // 初始化routerMap
        const { routerMap } = routerMapInit(result);
        // //设置页面刷新信息
        if ([[], undefined, null, ''].includes(tabBarData)) {
          taroMessage('租户菜单配置不正确', 'error');
          return;
        }

        //设置路由信息
        setModuleRootStore({
          routerMap,
          taroMenu: { list: result },
          tabBarData,
          safe,
          _bottomSafeHeight
        });
      } catch (err) {
        console.log(111, err);
      }
    })();
  }, []);
}

const routerMapInit = (list: Array<any>) => {
  const routerMap = {};
  const tabBar = Object.assign([], tabBarDefault);
  list.forEach((item: any) => {
    routerMap[item.menuOpcode] = computedMenuPath(item, tabBar);
  });

  // h5环境特殊处理
  // 支付回调地址页面 约定写死
  // result 支付结果页特别处理
  // routerMap['result'] = { ...routerMap['result'], pagePath: 'subpackage/result/index' };
  return {
    routerMap
  };
};

const computedMenuPath = ({ menuOpcode, isColumn, tginfoMenuName }: { isColumn: number; menuOpcode: string; tginfoMenuName: string }, tabBar: Array<any>) => {
  return {
    menuOpcode,
    text: tginfoMenuName,
    level: isColumn === 1 ? 1 : 2,
    pagePath: isColumn !== 1 ? '' : tabBar.shift().pagePath
  };
};

// 底部菜单
const fetchTabBarPath = (list: Array<any>, menuImg: Array<{ selectedIconPath: string; iconPath: string }>) => {
  const tabBarData = list.filter((item: any) => item.isColumn === 1);

  return tabBarData.map((item, indx) => ({
    ...menuImg[indx],
    ...tabBarDefault[indx],
    level: 1,
    menuOpcode: item.menuOpcode,
    text: item.tginfoMenuName
  }));
};
