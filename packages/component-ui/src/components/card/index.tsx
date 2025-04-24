import {createStyles} from "antd-style";
import {ReactNode} from "react";
import {Container, Element, useNode} from "@brushes/component-core";
import {ImageComponent, Text} from "../../basic";


const useStyles = createStyles(({token, css}) => {
    return {
        container: css`
            overflow: hidden;
            border: 1px solid rgba(0,0,0,0);
            &:hover{
                border: 1px solid ${token.colorPrimary};
            }
        `,
    }
})


export const Card = ({ children, padding = {}, ...props }: {padding?: object; children: ReactNode}) => {
    const { styles } = useStyles();
    return (
        <div
            className={styles.container}
            style={{
                ...padding,
                ...props,
            }}
        >
            <Element canvas id="card-top" is={Container}>
                <ImageComponent code={'dataPic'}/>
                <Element
                    canvas
                    is={Container}
                    padding={{
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                    }}
                   >
                    <Text
                        fontSize={14}
                        num={2}
                        fontWeight={700}
                        margin={{
                            marginTop: 5,
                            marginBottom: 10,
                        }}
                        code={'goodsName'}
                    />
                    <Container
                        flexDirection={'row'}
                    >
                        <Text text='SKU编码：'/>
                        <Text code={'goodsShowno'}/>
                    </Container>
                    <Container
                        flexDirection={'row'}
                        padding={{
                            paddingBottom: 5,
                    }}>
                        <Text text='商品规格：'/>
                        <Text num={1} width={120} code={'skuName'}/>
                    </Container>
                    <Container
                        flexDirection={'row'}
                        color={'#f00'}
                        alignItems={'center'}
                    >
                            <Text text='￥' fontSize={12}  color={'#f00'} />
                            <Text code={'pricesetNprice'}  color={'#f00'} fontSize={16} fontWeight={500} />
                            <Text color={'#666'} text=' / ' />
                            <Text code={'partsnameWeightunit'} color={'#666'} />
                            {/*<span style={{color: '#666'}}> / {item.partsnameWeightunit}</span>*/}
                        {/*</div>*/}
                    </Container>
                </Element>
            </Element>
        </div>
    );
};