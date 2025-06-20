import React, {useEffect, useState} from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {useSearchParams} from "react-router-dom";
import { post } from '@brushes/request';
import { get } from 'lodash-es';
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
  const [token, loginName] = useSearchParamHook(['token', 'phone'])
  useEffect(() => {
    (async () => {
      if(token) {
        const {dataObj} = await post('web/ml/mlogin/loginByToken.json', {
          oauthTokenToken: token,
          loginName,
        });
        sessionStorage.setItem('saas-token', JSON.stringify(dataObj.ticketTokenid));
        setModuleRootStore({
          _userInfo: dataObj
        })

        const {list} = await post('/web/pfs/pfsmmodel/queryPfsMmodelPage.json')

        const { list: listMenu } = await post('/web/pfs/pfsmodel/queryPfsModelPage.json', {
          mmodelCode: get(list || [], '[0].mmodelCode', '')
        })

        const menu = listMenu.filter(item => [0, 1, -1].includes(item.isColumn));
        const children = (listMenu || []).filter(item => [0, 2].includes(item.isColumn));
        setModuleRootStore({
          _menuChildren: children
        })

        setMenu([getItem('low-code模块', 'sub1', (menu || []).map(item => {
          return getItem(<ItemJsx id={item.modelId} label={item.modelName}/>, item.modelId)
        }))])

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
