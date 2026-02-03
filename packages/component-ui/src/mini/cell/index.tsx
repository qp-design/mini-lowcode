import {useComponent} from "@brushes/simulate-component-mini";
import {ArrowRight} from '@nutui/icons-react-taro'
import {Container, Element} from "@brushes/component-core";

export const CellComponent = ({columns, divider, title, description}: { title: string; description: string; divider: boolean; columns: Array<{label: string; value: string}>}) => {
    const { Cell } = useComponent();

    return (
        <Cell.Group divider={divider} title={title} description={description}>
            {
                columns.map((column, index) => (
                    <Cell
                        key={index}
                        className="nutui-cell-clickable"
                        title={column.label}
                        align="center"
                        extra={ column.value ? <ArrowRight/> : <Element
                            canvas
                            id={column.label}
                            is={Container}
                        >
                        </Element> }
                    />
                ))
            }
        </Cell.Group>
    )
}
