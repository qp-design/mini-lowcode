import React from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import {HOCCodeWrapComponent} from "@brushes/component-core";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    // {
    //     key: 'sub0',
    //     label: '订单中心',
    //     icon: <MailOutlined />,
    //     children: [
    //         {
    //             key: 'g1',
    //             label: 'Item 1',
    //             type: 'group',
    //             children: [
    //                 { key: '1', label: 'Option 1' },
    //                 { key: '2', label: 'Option 2' },
    //             ],
    //         },
    //         {
    //             key: 'g2',
    //             label: 'Item 2',
    //             type: 'group',
    //             children: [
    //                 { key: '3', label: 'Option 3' },
    //                 { key: '4', label: 'Option 4' },
    //             ],
    //         },
    //     ],
    // },
    {
        key: 'sub1',
        label: '订单中心',
        icon: <AppstoreOutlined />,
        children: [
            { key: '1', label: '我的订单' },
            { key: '2', label: '售后列表' },
        ],
    },
    {
        type: 'divider',
    },
    {
        key: 'sub2',
        label: '用户中心',
        icon: <SettingOutlined />,
        children: [
            { key: '9', label: '收货地址' },
        ],
    },
];

const App: React.FC = () => {
    const onClick: MenuProps['onClick'] = (e) => {
        console.log('click ', e);
    };

    return (
        <Menu
            onClick={onClick}
            style={{ width: '100%' }}
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            items={items}
        />
    );
};

export const MenuComponent = HOCCodeWrapComponent(App)
