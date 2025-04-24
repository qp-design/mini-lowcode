import React, {useMemo} from 'react';
import { Breadcrumb as Breadcrumb2 } from 'antd';
import {useModuleContext} from "@brushes/component-core";
import {useNavigateImpl} from "@brushes/component-tool";

export const Breadcrumb: React.FC = (props) => {
    const {navigator} = useNavigateImpl();
    const setModuleStore = useModuleContext((s) => s.setModuleStore);
    const breadList = useModuleContext(s => s.moduleStore.breadList) || [];
    const list = useMemo(() => {
        return [{label: '首页'}].concat(breadList)
    }, [breadList]);

    const onChange = (item: any, ind: number) => {
        if(ind === 0) {
            navigator('/home');
        } else {
            setModuleStore({
                breadList: breadList.slice(0, ind),
                params: item.params,
                cateList: item.cateList
            })
        }
    }

    return (
        <Breadcrumb2
            separator=">"
            items={
                list.map((item: {label: string}, ind) => (
                    {
                        title: ind !== list.length - 1 ?
                            <a style={props} key={ind} onClick={() => onChange(item, ind)}>{item.label}</a> : <span style={props} key={ind}>{item.label}</span>
                    }
                ))
            }
        />
    )
}