import {Container, Element, ModuleProvider, useModuleContext} from "@brushes/component-core";
import { HOCCodeWrapComponent } from "@brushes/core-transform";
import {useComponentListData} from "component-store";
import {Empty} from "antd";

const CommmonJsx = ({padding, background, list, margin = {}}:{ item: any; background: string; margin: object; padding: object;list: Array<{name: string; width: number}>}) => {
    return (
        <div style={{...padding, ...margin, background, display: 'flex', alignItems: 'center'}}>
                {
                    list.map((item, i) => (
                        <Element
                            width={item.width}
                            key={item.width + i}
                            alignItems={'center'}
                            flexDirection={'row'}
                            is={Container}
                            id={`${item.width}${i}_common-item`}
                            canvas>
                        </Element>
                    ))
                }
        </div>
    )
}

export const CommmonItem = HOCCodeWrapComponent(CommmonJsx)

const CommonList = ({dataPath, storeKey, num = 1, description, gap = 0, callbackName, key, padding = {}}:any) => {
    const list = useComponentListData(dataPath, storeKey);
    const retry = useModuleContext(s => s.moduleStore[callbackName]);
    if(list.length === 0){
        return <div style={{padding: '5px 0 5px 0'}}>
            <Element canvas is={Container} id={'empty'}><Empty description={description} /></Element>
        </div>;
    }
    return (
        <div style={{
            ...padding,
            display: 'grid',
            gap,
            gridTemplateColumns: `repeat(${num}, 1fr)`
        }}>
            {
                list.map((item, index) => (
                    <ModuleProvider key={item[key] || index} moduleStore={{_skuInfo:item, [callbackName]: retry}}>
                        <Element is={CommmonItem} id={'common-item'} canvas/>
                    </ModuleProvider>
                ))
            }
        </div>
    )
}

export const CommonListComponent = HOCCodeWrapComponent(CommonList)