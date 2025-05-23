
// 订单类型
export function contractTypeFn(key:string) {
    switch (String(key)) {
        case '00':
            return '普通订单'
        case '06':
            return '积分订单'
        case '26':
            return '秒杀订单'
        case '36':
            return '询报价订单'
        default:
            return '--'
    }
}

// 付款类型
export function contractPmodeFn(key: string) {
    switch (String(key)) {
        case '0':
            return '在线支付'
        case '3':
            return '货到付款'
        case '1':
            return '线下支付'
        default:
            return '--'
    }
}

// 订单状态
export function dataStateFn(key:string) {
    switch (String(key)) {
        case '1':
            return '待付款'
        case '19':
            return '待付款'
        case '2':
            return '待发货'
        case '3':
            return '待收货'
        case '30':
            return '待确认'
        case '4':
            return '已完成'
        case '-1':
            return '已取消'
        default:
            return '未知状态'
    }
}
