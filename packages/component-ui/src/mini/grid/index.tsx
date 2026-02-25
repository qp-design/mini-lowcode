import {useComponent} from "@brushes/simulate-component-mini";
import {Container, Element} from "@brushes/component-core-mini";
import {HOCCodeWrapComponent} from "@/tools";

export const GridJsx = ({columns, gap, total}: {total: number; gap: number, columns: number}) => {
    const {Grid, ConfigProvider} = useComponent();

    return (
            <ConfigProvider theme={{
                '--nutui-grid-item-content-padding': '0 0'
            }}>
                <Grid columns={columns} gap={gap}>
                    {Array.from({ length: total }, (_, index) => (
                        <Grid.Item key={index}>
                            <Element
                                canvas
                                id={index+''}
                                is={Container}
                            >
                            </Element>
                        </Grid.Item>
                    ))}
                </Grid>
            </ConfigProvider>
    )
}

export const GridComponent = HOCCodeWrapComponent(GridJsx);