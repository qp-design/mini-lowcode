import {createStyles} from "antd-style";
import {fullpath} from "@brushes/component-tool";
import {useEffect, useMemo, useState} from "react";
import {queryOcContractToCensus} from "component-api";
import {LogoutComponent} from "../../operate";
import {DividerComponent, Text} from "../../basic";
import {Element} from "@craftjs/core";
import {Container} from "@brushes/component-core";

const useStyle = createStyles(({token, css}) => {
    return {
    tipInfo: css`
        width: 100%;
        height: 190px;
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
export const UserInfo = ({text, imgUrl, config, ...restProps}: { config: Array<{label: string; code: string}>; text: string; imgUrl: string }) => {
    const {styles} = useStyle();
    const [values, setValues] = useState({});
    useEffect(() => {
        (async () => {
           const data = await queryOcContractToCensus();
           setValues(data);
        })()
    }, []);


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
                                <Text module={'rootStore'} storeKey={'_userInfo'} text='用户名' code={'userName'}></Text>
                            </div>
                            <div className="bottom">
                                <Element padding={{paddingTop: 8}} height={20} alignItems={'center'} flexDirection={'row'} is={Container} id={'info-bottom'}>
                                    <Text module={'rootStore'} storeKey={'_userInfo'} text='昵称' code={'userNickname'}></Text>
                                    <DividerComponent type="vertical" margin={{marginLeft: 5, marginRight: 5}}/>
                                    <LogoutComponent text={'退出'} fontSize={12} type={'link'}
                                                     padding={{paddingLeft: 0, paddingRight: 0}}/>
                                </Element>
                            </div>
                        </div>
                    </div>
                    <div className="otherInfo">
                        {
                            config.map((item: any, index: number) => (
                                <div key={index} onClick={() => {
                                }} className="box navigator">
                                    <div className="top_num">{values[item.code]}</div>
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


