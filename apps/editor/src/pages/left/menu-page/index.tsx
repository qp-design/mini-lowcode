import React, {useEffect, useState} from 'react';
import {MenuProps, message} from 'antd';
import { Menu } from 'antd';
import {useSearchParams} from "react-router-dom";
import { post } from '@brushes/request';
import { get } from 'lodash';
import {useSearchParamHook} from "component-store";
import {useModuleRootContext} from "@brushes/component-core";
type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  // icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    // icon,
    children,
    label,
    type,
  } as MenuItem;
}

const ItemJsx = ({label, id}: {label:string; id: string}) => {
  let [params, setSearchParams] = useSearchParams();
  const navigator = (e: any) => {
    setSearchParams({
      target: e.target.dataset.id,
      token: params.get('token') as string,
      phone: params.get('phone') as string
    })
  }

  return (
    <div data-id={id} onClick={navigator}>{label}</div>
  )
}

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2'];

const MenuComponent: React.FC = () => {
  const setModuleRootStore = useModuleRootContext(s=>s.setModuleRootStore);
  const [openKeys, setOpenKeys] = useState(['sub1']);
  const [menu, setMenu] = React.useState<MenuItem[]>([]);
  const [token, loginName, proappCode] = useSearchParamHook(['token', 'phone', 'proappCode'])
  useEffect(() => {
    (async () => {
      if(token) {
        try {
          const {dataObj} = await post('web/ml/mlogin/loginByToken.json', {
            oauthTokenToken: token,
            proappCode,
            loginName,
          });
          sessionStorage.setItem('saas-token', JSON.stringify(dataObj.ticketTokenid));

          const {list} = await post('/web/pfs/pfsmmodel/queryPfsMmodelPage.json')

          const {themeColor, subColor} = JSON.parse(get(list, '[0].mmodelConfig'));
          setModuleRootStore({
            _userInfo: dataObj,
            _themeColor: {
              colorBgTextHover: subColor,
              colorPrimary:themeColor
            }
          })

          const { list: listMenu } = await post('/web/pfs/pfsmodel/queryPfsModelPage.json', {
            mmodelCode: get(list || [], '[0].mmodelCode', '')
          })

          // 栏目为2的装修不需要装修
          const menu = listMenu.filter(item => item.isColumn !== 2);

          // 栏目0是子页面 2是为了组装栏目树
          const children = (listMenu || []).filter(item => [0, 2].includes(item.isColumn));
          setModuleRootStore({
            _menuChildren: children
          })

          setMenu([getItem('low-code模块', 'sub1', (menu || []).map(item => {
            return getItem(<ItemJsx id={item.modelId} label={item.modelName}/>, item.modelId)
          }))])
        } catch (err) {
          message.error(err || '');
        }

      }
    })()
  }, []);
  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      mode="inline"
      openKeys={openKeys}
      inlineIndent={12}
      onOpenChange={onOpenChange}
      style={{ width: '100%' }}
      items={menu}
    />
  );
};

export default MenuComponent;
