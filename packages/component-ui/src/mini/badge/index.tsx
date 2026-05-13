import {useComponent} from "@brushes/simulate-component-mini";
import {useModuleContext} from "@brushes/component-core-mini";
import { HOCCodeWrapComponent } from '@/tools';
import { get } from 'lodash';

export const BadgeJsx = ({columns, storeKey, max}: {max: string; storeKey: string; columns: Array<{label: string; key: string; defaultValue: string}>}) => {
    const {Badge, Cell} = useComponent();
    const _skuInfo = useModuleContext(s => s.moduleStore[storeKey]) || {};
    return (
        <Cell style={{ justifyContent: 'space-around' }}>
            {
                columns.map((column, index) => (
                    <Badge key={index} value={get(_skuInfo, column.key, column.defaultValue)} max={max} top={0} right={0}>
                        {column.label}
                    </Badge>
                ))
            }
        </Cell>
    )
}


export const BadgeComponent = HOCCodeWrapComponent(BadgeJsx);