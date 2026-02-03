export declare function contractTypeFn(key: string): "普通订单" | "积分订单" | "秒杀订单" | "询报价订单" | "--";
export declare function contractPmodeFn(key: string): "--" | "在线支付" | "货到付款" | "线下支付";
export declare function dataStateFn(key: string): "待付款" | "待发货" | "待收货" | "待确认" | "已完成" | "已取消" | "未知状态";
