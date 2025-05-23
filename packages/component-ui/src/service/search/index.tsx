import {SearchOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import {HOCCodeWrapComponent, Element, Container} from "@brushes/component-core";
import { Text } from '../../basic';
import {useNavigateImpl} from "@brushes/component-tool";
import { createStyles } from "antd-style";

const useStyle = createStyles(({token, css}, props:
    any
) => {
    return {
        search: css`
            .ant-input-affix-wrapper{
                height: ${props.height}px;
                line-height: ${props.height}px;
                font-size: ${props.size}px;
                border: solid ${props.borderSize}px ${props.borderColor || token.colorPrimary};
                border-radius: ${props.borderRadius}px 0 0 ${props.borderRadius}px !important
            }
            .ant-input-group-addon {
                background: ${token.colorPrimary};
                border: solid 2px ${token.colorPrimary};
                color: #fff;
                border-radius: 0 10px 10px 0;
                padding: 0;
                width: 80px;
                text-align: center;
                cursor: pointer;
                button{
                    font-size: 14px;
                    font-weight: 500;
                    letter-spacing: 0em;
                }
            }
        `
    }
})
const SearchJsx = ({path, size, placeholder, ...props }: { size: any; placeholder: string; path: string}) => {
    const { navigator } = useNavigateImpl();
    const { styles } = useStyle(props);
    return (
        <Search
            className={styles.search}
            prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
            allowClear
            size={size}
            placeholder={placeholder}
            enterButton={<Element canvas is={Container} id={'enterButton'}>
                <Text width={50} fontSize={14} color={'#fff'} text={'搜索'}/>
            </Element>}
            onSearch={() => navigator(path)}
        />
    )
}

export const SearchComponent = HOCCodeWrapComponent(SearchJsx)