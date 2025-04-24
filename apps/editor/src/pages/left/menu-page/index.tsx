import React, { useState } from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { useSearchParams } from "react-router-dom";

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
  let [,setSearchParams] = useSearchParams();
  const navigator = (e: any) => {
    setSearchParams({target: e.target.dataset.id})
  }

  return (
    <div data-id={id} onClick={navigator}>{label}</div>
  )
}

const items: MenuItem[] = [
  getItem('low-code模块', 'sub1', [
    getItem(<ItemJsx id={'index'} label={'首页'}/>, '1'),
    getItem(<ItemJsx id={'goodList'} label={'商品列表'}/>, '2'),
    getItem(<ItemJsx id={'goodDetail'} label={'商品详情'}/>, '3'),
    getItem(<ItemJsx id={'cart'} label={'购物车'}/>, '4'),
    getItem(<ItemJsx id={'account'} label={'确定订单页'}/>, '5'),
  ]),
  // getItem('原代码模块', 'sub2', <div></div>, [
  //   getItem(<ItemJsx id={'user'} label={'用户模块'}/>, '111'),
  //   getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  // ])
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2'];

const MenuComponent: React.FC = () => {
  const [openKeys, setOpenKeys] = useState(['sub1']);

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
      items={items}
    />
  );
};

export default MenuComponent;
