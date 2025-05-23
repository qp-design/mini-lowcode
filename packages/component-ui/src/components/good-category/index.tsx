import {useGoodCategory} from "component-store";
import { createStyles } from "antd-style";

const useStyle = createStyles(({css, token}) => {
    return {
        container: css`
                margin-bottom: 2px;
                line-height: 40px;
                width: 100%;
                list-style: none;
                background: #fff;
                li{
                    list-style: none;
                }
        `
    }
})
export const GoodCategory = (props = {}) => {
    const { styles } = useStyle();
    const { cateList, implCate } = useGoodCategory();
    return (
        <>
            <ul className={styles.container}>
                    {
                        cateList.map((item, index) => (
                            <li style={{
                                float: 'left',
                                cursor: 'pointer',
                                margin: '0 10px 0 20px',
                                ...props
                            }} onClick={() => implCate(item)} key={index}>{item.goodsClassName}</li>
                        ))
                    }
            </ul>
            {/*<div className={styles.container}>*/}
            {/*    <div className="title">排序</div>*/}
            {/*    <ul>*/}
            {/*        {*/}
            {/*            config.map((item, index) => (*/}
            {/*                <li*/}
            {/*                    className="[{'actived': sortField === item.value}]"*/}
            {/*                    onClick={() => impl(item)}*/}
            {/*                    key={index}*/}
            {/*                >{item.label}</li>*/}
            {/*            ))*/}
            {/*        }*/}
            {/*    </ul>*/}
            {/*</div>*/}
        </>
    )
}

