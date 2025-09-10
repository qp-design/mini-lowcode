import {createStyles} from "antd-style";
import {useModuleContext} from "@brushes/component-core";
import {useRef} from "react";

const useStyle = createStyles(({css, token}) => {
    return {
        container: css`
            margin-bottom: 2px;
            line-height: 40px;
            width: 100%;
            list-style: none;
            background: #fff;
            li {
                list-style: none;
                align-items: center;
                display: flex;
            }
            .actived{
                color: ${token.colorPrimary} !important;
            }
        `
    }
})

export const Sort = ({config = [{
    label: '默认',
    value: ''
},
    {
        label: '上新',
        value: 'skuHdate'
    },
    {
        label: '销量',
        value: 'pricesetNprice'
    }], ...props}: {config: Array<{label: string; value: string}>}) => {
    const sortName = useRef('')
    const activeIndex = useRef(0)
    const {styles} = useStyle();
    const order = useRef('desc');
    const setModuleStore  = useModuleContext(s=>s.setModuleStore);
    const params = useModuleContext(s=>s.moduleStore.params);
    const impl = (item, index) => {
        sortName.current = item.value;
        activeIndex.current = index;
        order.current = order.current === 'desc' ? 'asc' : 'desc';
        setModuleStore({
            params: {
                ...params,
                order: order.current,
                sortField: item.value,
            }
        })
    }

    return (
        <ul className={styles.container}>
            {
                config.map((item, index) => (
                    <li className={item.value === sortName.current && activeIndex.current === index ? 'actived' : ''} style={{
                        float: 'left',
                        cursor: 'pointer',
                        margin: '0 10px 0 20px',
                        ...props
                    }} onClick={() => impl(item, index)} key={index}>{item.label}</li>
                )
)
}
</ul>
)
}

