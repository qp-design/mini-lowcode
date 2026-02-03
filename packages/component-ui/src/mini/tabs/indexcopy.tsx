import {useComponent} from "@brushes/simulate-component-mini";
import {useMemo, useState} from "react";
import {useSearchParamHook} from "@brushes/component-store-web";
import {Container, Element} from "@brushes/component-core";

export const TabsComponent =
    ({columns, direction, padding = {}, ...props} : { padding: object; columns: any; direction: 'horizontal' | 'vertical'}) => {
    const {Tabs} = useComponent()
    const [tabvalue, setTabvalue] = useState<string | number>('0')
    const [title] = useSearchParamHook(['label']);
    // const defaultActiveKey = useRef();
    const defaultValue = useMemo(() => {
        if(title) {
            return columns.findIndex((item:any) => {
                item.label = title;
            })
        }
        return '0'
    }, [title]);
    // const newColumns = useMemo(() => {
    //     return columns.map(({label, key, code}: any, ind: number) => {
    //         if (title === label) {
    //             defaultActiveKey.current = key
    //         }
    //         return {
    //             key: key || label,
    //             label: badge ?
    //                 <BadgeJsx code={code} label={label} padding={padding} props={props}/> :
    //                 <div style={{...padding, ...props}}>{label}</div>,
    //             children: (
    //                 <Element
    //                     canvas
    //                     id={key || label}
    //                     is={Container}
    //                 >
    //                 </Element>
    //             )
    //         }
    //     })
    // }, [columns, badge])
    console.log('eventType', props);
    return (
            <Tabs
                direction={direction}
                defaultValue={defaultValue}
                value={tabvalue}
                onChange={(value: string) => {
                    console.log(1111, value);
                    setTabvalue(value)
                }}
                {...props}
            >
                {columns.map((item: any) => (
                    <Tabs.TabPane key={item.label} title={item.label}>
                         <Element
                            canvas
                            id={item.label}
                            is={Container}
                         >
                        </Element>
                    </Tabs.TabPane>
                ))}
            </Tabs>
    )
}
