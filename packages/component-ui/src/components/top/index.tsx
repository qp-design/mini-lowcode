import {createStyles} from 'antd-style';
import { line } from '../../icon'
import {fullpath, useNavigateImpl} from '@brushes/component-tool';

const useStyle = createStyles(({token, css}) => {
    return {
        wrap: css`
            width: 100%;
            height: 34px;
            opacity: 1;
            background: #F4F4F4;
        `,
        container: css`
            display: flex;
            align-items: center;
            font-size: 12px;
            font-weight: normal;
            letter-spacing: 0em;
            height: 34px;
            color: #232323;
            max-width: 1200px;
            margin: 0 auto;
            justify-content: space-between;
        `,
        left: css`
            .logon{ cursor: pointer }
            display: flex;
            span{ padding: 0 5px;}
        `,
        right: css`
                display: flex;
                align-items: center;

                ul {
                    display: flex;
                    list-style: none;
                    li {
                        cursor: pointer;
                        display: flex;
                        align-items: center;
                        :hover {
                            color: #0952E5;
                        }
                        .icon-prev{ padding-right: 9px;}
                        span {
                            padding: 0 20px;
                        }
                    }
                }

                .tel {
                    padding-left: 20px;
                    display: flex;
                    align-items: center;
                    span {
                        padding-left: 9px;
                    }
                }
        `
    };
});

export const Top: React.FC<{ menu: Array<any>; tel: string; user: string}> =
    ({tel, user, menu = [], ...restProps}) => {
    const { navigator } = useNavigateImpl();
    const {styles} = useStyle();

    const loginOut = () => {
        navigator('/login')
    }
    return (
        <div className={styles.wrap}>
            <div className={styles.container}>
                <div className={styles.left}>
                    您好！{user}欢迎来到铁亿 <span>|</span>
                    <div className="logon" onClick={loginOut}>退出
                    </div>
                </div>
                <div className={styles.right}>
                    <ul>
                        {
                            menu.map((item: any, index:number) => (
                                <li key={index}>
                                    <span
                                        onClick={() => navigator(item)}
                                    >{item.imgUrl && <img className="icon-prev" height="14" src={fullpath(item.imgUrl)}/>}{item.title}</span>
                                    { menu.length -1 !== index && <img width="1" height="12" src={line}/> }
                                </li>

                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}