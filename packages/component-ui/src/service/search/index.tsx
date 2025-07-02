import {SearchOutlined} from "@ant-design/icons";
import Search from "antd/es/input/Search";
import {
    Element,
    Container,
    useModuleRootContext
} from "@brushes/component-core";
import { Text } from '../../basic';
import { HOCCodeWrapComponent } from '@brushes/core-transform';
import {useNavigateImpl} from "@brushes/component-tool";
import { createStyles } from "antd-style";
import {useLocation, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {noop} from "lodash";
import {Button} from "antd";

const useStyle = createStyles(({token, css}, props:
    any
) => {
    return {
        search: css`
            &:hover{
                .ant-input-search-button{ background: none}
            }
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
const SearchJsx = ({path, isShopSearch, size, placeholder, ...props }: { isShopSearch?: boolean; size: any; placeholder: string; path: string}) => {
    const { navigator } = useNavigateImpl();
    const { pathname } = useLocation();
    const [searchParams] = useSearchParams();
    const { styles } = useStyle(props);
    const [value, setValue] = useState('');
    const searchQuery = useModuleRootContext(s=>s.rootStore.searchQuery) || noop;

    useEffect(() => {
        const value = searchParams.get('searchParam') || '';
        setValue(value);
    }, [searchParams.get('searchParam')]);

    const onSearch = (value:string) => {
        navigator(`${path}?searchParam=${value}`);
        if(pathname === path) {
            searchQuery({
                searchParam: value
            })
        }

    }

    const searchShop = () => {
        searchQuery({
            searchParam: value
        })
    }

    return (
        <>
            <Search
                value={value}
                className={styles.search}
                prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                allowClear
                size={size}
                placeholder={placeholder}
                onChange={(e) => {
                    setValue(e.target.value);
                }}
                suffix={
                    isShopSearch ? <Button style={{marginRight: -6}} onClick={searchShop} type={'primary'} danger>搜本店</Button> : null
                }
                enterButton={<Element canvas is={Container} id={'enterButton'}>
                    <Text width={50} fontSize={14} color={'#fff'} text={'搜索'}/>
                </Element>}
                onSearch={onSearch}
            />
        </>

    )
}

export const SearchComponent = HOCCodeWrapComponent(SearchJsx)