import {useComponent} from "@brushes/simulate-component-mini";
import {useMemo, useState} from "react";
import {useSearchParamHook} from "@brushes/component-store-web";
import {Container, Element} from "@brushes/component-core-mini";

export const TabsComponent =
    ({columns, direction, activeType, padding = {}, ...props} :
        { activeType: string; padding: object; columns: any; direction: 'horizontal' | 'vertical' }) => {
        const {Tabs} = useComponent()
        const [tabvalue, setTabvalue] = useState<string | number>('0')
        const [title] = useSearchParamHook(['label']);
        // const defaultActiveKey = useRef();
        const defaultValue = useMemo(() => {
            if (title) {
                return columns.findIndex((item: any) => {
                    item.label = title;
                })
            }
            return '0'
        }, [title]);

        console.log('eventType', props);
        return (
            <Tabs
                direction={direction}
                defaultValue={defaultValue}
                value={tabvalue}
                activeType={activeType}
                onChange={(value: string) => {
                    console.log(1111, value);
                    setTabvalue(value)
                }}
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
