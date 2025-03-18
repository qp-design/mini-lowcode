import {createStyles} from "antd-style";
import {fullpath} from "@brushes/component-tool";

const tabTitle = [
    {
        path: 'car',
        label: "购物车",
        value: "0",
    },
    {
        label: "待发货",
        value: "0",
        status: 1,
    },
    {
        label: "待收货",
        value: "0",
        status: 2,
    },
    {
        label: "交易完成",
        value: "0",
        status: 4,
    },
]

const useStyle = createStyles(({token, css}) => {
    return {
    tipInfo: css`
        width: 100%;
        height: 180px;
        background: linear-gradient(
                148deg,
                rgba(9, 82, 229, 0.1) 1%,
                rgba(9, 82, 229, 0.03) 103%
        );
        box-sizing: border-box;
        border-radius: 10px;
        padding: 10px 10px 12px 10px;
        .er_img {
            margin-top: 30px;
            display: flex;
            justify-content: center;
            .erweima-svg {
                width: 102px;
                height: 102px;
            }
        }
        .text {
            margin-top: 10px;
            font-family: PingFang SC;
            font-size: 14px;
            font-weight: normal;
            line-height: 24px;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0em;
            font-variation-settings: "opsz" auto;
            color: #7c7c7c;
        }
        .bannerImg{ margin-top: 20px;}
    `,
        commonInfo: css`
                .userInfo {
                    height: 55px;
                    margin-top: 10px;
                    display: flex;
                    .userImg {
                        .img {
                            width: 55px;
                            height: 55px;
                            border-radius: 10px;
                        }
                    }
                    .userInfo_Detail {
                        margin-top: 5px;
                        margin-bottom: 5px;
                        margin-left: 10px;
                        width: 90px;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-between;
                        .top {
                            font-family: PingFang SC;
                            font-size: 18px;
                            font-weight: 500;
                            line-height: 22px;
                            letter-spacing: 0em;
                            font-variation-settings: "opsz" auto;
                            color: #232323;
                            white-space: nowrap;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            width: 200px;
                            .name {
                                white-space: nowrap;
                                overflow: hidden;
                                text-overflow: ellipsis;
                            }
                        }
                        .bottom {
                            font-family: PingFang SC;
                            font-size: 12px;
                            font-weight: normal;
                            line-height: 16px;
                            letter-spacing: 0em;
                            font-variation-settings: "opsz" auto;
                            color: #8B8E93;
                            .hover:hover {
                                cursor: pointer;
                                color: ${token.colorPrimary};
                            }
                        }
                    }
                }
                .otherInfo {
                    display: grid;
                    grid-template-columns: repeat(4, 1fr);
                    grid-column-gap: 5px;
                    margin: 30px 0 20px;
                    .box {
                        //width: 37px;
                        text-align: center;
                        cursor: pointer;
                    }
                    .top_num {
                        font-size: 20px;
                        font-weight: 500;
                        margin-bottom: 5px;
                    }
                    .bottom_name {
                        font-size: 12px;
                    }
                }
        `
    }
})
export const UserInfo = ({text, imgUrl, ...restProps}: { text: string; imgUrl: string }) => {
    const {styles} = useStyle();
    return (

        <div>
            <div className={styles.tipInfo}>
                <div className={styles.commonInfo}>
                    <div className="userInfo">
                        <div className="userImg">
                            <img className="img" src={fullpath(imgUrl)} alt=""/>
                        </div>
                        <div className="userInfo_Detail">
                            <div className="top">
                                <span className="name">昵称</span>
                            </div>
                            <div className="bottom">
                        <span className="hover" onClick={() => {
                        }}>切换账号</span>
                                <span style={{padding: '0 5px'}}>|</span>
                                <span className="hover" onClick={() => {
                                }}>退出</span>
                            </div>
                        </div>
                    </div>
                    <div className="otherInfo">
                        {
                            tabTitle.map((item: any, index: number) => (
                                <div onClick={() => {
                                }} className="box navigator" key="item.label">
                                    {index === 0 && <div className="top_num">0</div>}
                                    {index !== 0 && <div className="top_num">{item.value}</div>}
                                    <div className="bottom_name">{item.label}</div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
            {/*<div className="banner">*/}
            {/*    <div className="bannerImg">*/}
            {/*        <Image src={rightOne} width="232"/>*/}
            {/*    </div>*/}
            {/*    <div className="bannerImg">*/}
            {/*        <Image src={rightTwo} width="232"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </div>

    )
}


