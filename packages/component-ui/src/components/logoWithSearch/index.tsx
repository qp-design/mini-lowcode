import {createStyles} from 'antd-style';
import {fullpath} from "@brushes/component-tool";
import Search from "antd/es/input/Search";
import { SearchOutlined } from '@ant-design/icons';

const useStyle = createStyles(({token, css}) => {
    return {
        headerScoped: css`
            width: 1200px;
            margin: 40px auto 0;
            display: grid;
            grid-column-gap: 32px;
            grid-template-columns: 220px 1fr 120px;

            .logo {
                cursor: pointer
            }
            .ant-input-search .ant-input-affix-wrapper{
                height: 42px;
                line-height: 42px;
                font-size: 14px;
                border: solid 2px ${token.colorPrimary};
                border-radius: 10px 0 0 10px !important
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

            .search-box {
                display: grid;
                position: relative;
                grid-template-columns: 28px 1fr;
                width: 120px;
                height: 42px;
                padding: 10px;
                border-radius: 8px;
                align-items: center;
                box-sizing: border-box;
                border: 1px solid${token.colorPrimary};
                color: ${token.colorPrimary};
                cursor: pointer;
                font-size: 14px;
                font-weight: 500;
                position: relative;

                .tip {
                    position: absolute;
                    right: -10px;
                    top: -10px;
                    background: #FF0C00;
                    width: 27px;
                    height: 18px;
                    text-align: center;
                    color: #fff;
                    border-radius: 10px;
                }
            }

            .menu {
                cursor: pointer;
                font-weight: 500;
                font-size: 18px;
                display: flex;
                justify-content: space-between;
                width: 690px;
                margin-top: 18px;
            }

            .menu-body {
                min-height: 40px;

                ul {
                    margin-bottom: 10px;
                }
            }

            .main-cate {
                margin-top: 22px;
                padding-left: 20px;
                font-size: 18px;
                font-weight: 500;
                display: flex;
                align-items: center
            }
        `
    };
});

export const LogoWithSearch: React.FC<{
    logo: {imgUrl: string};
    car: {imgUrl: string};
    navigator: () => void;
    tel: string;
    loginOut: () => void,
    count: number,
    user: string,
}> =
    ({navigator, tel, loginOut, user, logo = {}, car = {}, count = [], ...restProps}) => {
        console.log(107, logo, restProps);
        const {styles} = useStyle();
        return (
            <div className={styles.headerScoped}>
                <div className="logo">
                    <img onClick={navigator} src={fullpath(logo.imgUrl)} alt="logo" width="219" height="60"/>
                </div>
                <div className="search">
                    {/*<Space.Compact style={{ width: '100%' }}>*/}
                    {/*    <Input defaultValue="Combine input and button" />*/}
                    {/*    <Button type="primary">Submit</Button>*/}
                    {/*</Space.Compact>*/}
                    <Search
                        prefix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="请输入品牌/规格/产地/等关键字"
                        allowClear
                        enterButton="搜索"
                        size="large"
                        onSearch={() => {}}
                    />
                    {/*<el-input*/}
                    {/*    placeholder="请输入品牌/规格/产地/等关键字"*/}
                    {/*    prefix-icon="el-icon-search"*/}
                    {/*@keydown.enter.native="search"*/}
                    {/*v-model="searchValue">*/}
                    {/*<div slot="append" onClick={search}>搜索</div>*/}
                    {/*</el-input>*/}
                    {/*<hot/>*/}
                    {/*<div className="menu-body">*/}
                    {/*    <ul className="menu">*/}
                    {/*        <li onClick={() => navigator(item)} v-for="item in menuList">{item.label}</li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                </div>

                <div className="search-box" onClick={navigator}>
                    <span className="tip">{count}</span>
                    <img src={fullpath(car.imgUrl)} width="18" height="18"/>
                    <span>我的购物车</span>
                </div>
            </div>
        )
    }