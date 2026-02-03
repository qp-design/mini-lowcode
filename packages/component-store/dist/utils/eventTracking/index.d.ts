/**
 * @param type
 * 积分规则匹配字段：  pointsRuleApi
 * 订单积分          oc.contractEngine.sendContractNext
 * 注册获取积分       Register
 * 评价获取积分       ResEvaluate
 * 首次下单获取积分    FirstOcContract
 * 分享获得积分       Share
 * 绑定微信获取积分    BindingWX
 * 签到获取积分：      CheckIn
 */
export declare const eventTracking: (type: string, dataObj: string) => any;
