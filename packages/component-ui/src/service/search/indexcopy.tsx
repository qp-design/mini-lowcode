import Search from "antd/es/input/Search";
import {
    Element,
    Container,
    useModuleRootContext
} from "@brushes/component-core";
import {AutoComplete, Flex, Button, Select} from 'antd';
import { Text } from '../../basic';
import { HOCCodeWrapComponent } from '@brushes/core-transform';
import {useNavigateImpl} from "@brushes/component-tool";
import { createStyles } from "antd-style";
import {useLocation, useSearchParams} from "react-router-dom";
import {useEffect, useMemo, useState, startTransition} from "react";
import {noop, get, isEmpty} from "lodash";

const useStyle = createStyles(({token, css}, props:
    any
) => {
    return {
        wrapSearch: css`
            //display: flex;
            // .none-wrap{
            //     height: ${props.height}px;
            //     line-height: ${props.height}px;
            //     font-size: ${props.size}px;
            //     padding: 4px;
            //     border: solid ${props.borderSize}px ${props.borderColor || token.colorPrimary};
            //     border-radius: ${props.borderRadius}px 0 0 ${props.borderRadius}px !important;
            //     //border-right: none;
            //     .ant-select-selector{
            //         border: 0 !important;
            //         box-shadow: none !important;
            //     }
            // }
            .ant-select-selection-search{
                position: absolute !important;
            }
        `,
        search: css`
            margin-left: -5px;
            &:hover{
                .ant-input-search-button{ background: none}
                .ant-select-selector{
                    border: 0 !important;
                    background: none;
                    box-shadow: none !important;
                }
            }
            .ant-input-affix-wrapper{
                height: ${props.height}px;
                line-height: ${props.height}px;
                font-size: ${props.size}px;
                padding: 4px;
                border: solid ${props.borderSize}px ${props.borderColor || token.colorPrimary};
                //border-radius: 0 0 0 0 !important;
                //border-left: none;
            }
            .ant-select-selector{
                border: 0 !important;
                box-shadow: none !important;
            }
            .ant-select-selection-item{ color: ${token.colorPrimary}}
            button{ background: ${token.colorPrimary};}
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

const Title: React.FC<Readonly<{ title?: string, deleteImpl: () => void }>> = (props) => {

    return (
        <Flex align="center" justify="space-between">
            {props.title}
            <Button style={{padding: 0, margin: 0}} type={'link'} onClick={() => props.deleteImpl()}>全部删除</Button>
        </Flex>
    )
}

const SearchJsx = ({isShopSearch, options, size, placeholder, ...props }: { options: Array<any>; isShopSearch?: boolean; size: any; placeholder: string;}) => {
    const { navigator } = useNavigateImpl();
    const { pathname } = useLocation();
    const [open, setOpen] = useState(false);
    const [searchParams] = useSearchParams();
    const { styles } = useStyle(props);
    // const [value, setValue] = useState('');
    const setModuleRootStore = useModuleRootContext(s=>s.setModuleRootStore);
    const searchQuery = useModuleRootContext(s=>s.rootStore.searchQuery) || noop;
    const historyList = useModuleRootContext(s=>s.rootStore._historyList);
    const [path, setPath] = useState('');

    const historyItems = useMemo(() => {
        const renderItem = (title: string) => ({
            value: title,
            label: (
                <Flex align="center" justify="space-between">
                    {title}
                    <Button style={{padding: 0, margin: 0, fontSize: 12}} type={'link'} onClick={() => deleteImpl(title)}>删除</Button>
                </Flex>
            ),
        });

        const deleteImpl = (value?: string) => {
            if(value) {
                setModuleRootStore({
                    _historyList: historyList.filter((item) => item !== value)
                })
            } else {
                setModuleRootStore({
                    _historyList: []
                })
            }

        }
        if(isEmpty(historyList)) {
            return []
        }
        return [{
            label: <Title title="历史记录" deleteImpl={deleteImpl}/>,
            options: (historyList || []).reverse().slice(0, 10).map((item:string) => renderItem(item)),
        }]
    }, [historyList]);

    const defaultValue = useMemo(() => {
        return get(options, '[0].value', '')
    }, [options]);

    useEffect(() => {
        const value = searchParams.get('searchParam') || '';
        if(value) {
            console.log(1111, value);
            startTransition(() => {
                const isExister = (historyList || []).includes(value)
                setModuleRootStore({
                    _historyList: !isExister ? (historyList || []).concat(value) : historyList,
                })
                // setValue(value);
            })
        }
    }, [searchParams.get('searchParam')]);

    const onSearch = (value:string) => {
        startTransition(() => {
            setOpen(false);
        })
        if(value) {
            const isExister = (historyList || []).includes(value);
            startTransition(() => {
                setModuleRootStore({
                    _historyList: !isExister ? (historyList || []).concat(value) : historyList,
                })
            })
        }
        navigator(`${path || defaultValue}?searchParam=${value}`);
        if(pathname === (path || defaultValue)) {
            startTransition(() => {
                searchQuery({
                    searchParam: value
                })
            })
        }
    }
    const searchShop = () => {
        startTransition(() => {
            setOpen(false);
            searchQuery({
                searchParam: value
            })
        })
    }
    const onChange = (e: string) => {
        setOpen(false);
        setPath(e);
    }

    return (
            <AutoComplete
                // value={value}
                open={open}
                onBlur={()=> setOpen(false)}
                className={styles.wrapSearch}
                style={{ width: '100%' }}
                // onChange={setValue}
                options={ historyItems }
            >
                <Search
                    className={styles.search}
                    // value={value}
                    onFocus={() => setOpen(true)}
                    prefix={<Select onChange={onChange} className={'none-wrap'} onClick={(e) => e.stopPropagation()} defaultValue={defaultValue} options={options} /> }
                    allowClear
                    size={size}
                    placeholder={placeholder}
                    // onChange={(e) => {
                    //     setValue(e.target.value);
                    // }}
                    suffix={
                        isShopSearch ? <Button style={{marginRight: -6}} onClick={searchShop} danger>搜本店</Button> : null
                    }
                    enterButton={<Element canvas is={Container} id={'enterButton'}>
                        <Text width={50} fontSize={14} color={'#fff'} text={'搜索'}/>
                    </Element>}
                    onSearch={(value) => startTransition(() => onSearch(value))}
                />
            </AutoComplete>

    )
}

export const SearchComponent = HOCCodeWrapComponent(SearchJsx)