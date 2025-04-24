import Title from './title';
import Layout from './layout';
import {basic, layout, extend, service, Cart} from '../dataSource-component';
import {Collapse} from "antd";
import type { CollapseProps } from 'antd';

const items: CollapseProps['items'] = [
    {
        key: '1',
        label: <Title title={'布局组件'}/>,
        children: <Layout componentList={layout}/>,
    },
    {
        key: '2',
        label: <Title title={'基础组件'}/>,
        children: <Layout componentList={basic}/>,
    },
    {
        key: '3',
        label: <Title title={'业务组件'}/>,
        children: <Layout componentList={service}/>,
    },
    {
        key: '4',
        label: <Title title={'购物车组件'}/>,
        children: <Layout componentList={Cart}/>,
    },
    {
        key: '5',
        label: <Title title={'扩展组件'}/>,
        children: <Layout componentList={extend}/>,
    },
];

const Components = () => {
    return (
        <>
            <Collapse size={'small'} ghost expandIconPosition={'end'} items={items} defaultActiveKey={['1']} />
            {/*<Title title={'布局组件'}/>*/}
            {/*<Layout componentList={layout}/>*/}
            {/*<Title title={'基础组件'}/>*/}
            {/*<Layout componentList={basic}/>*/}
            {/*<Title title={'业务组件'}/>*/}
            {/*<Layout componentList={service}/>*/}
            {/*<Title title={'扩展组件'}/>*/}
            {/*<Layout componentList={extend}/>*/}
        </>
    )
}


export default Components
