import {CompletionContext} from "@codemirror/autocomplete";

export function myCompletions(context: CompletionContext) {
    let word = context.matchBefore(/\w*/) as any
    if (word.from == word.to && !context.explicit)
        return null
    return {
        from: word.from,
        to: context.pos,
        validFor: /^\w*$/,
        options: [
            {
                label: "deleteCart",
                type: "cart | delete",
                detail: "购物车商品删除",
                apply: `
/* 导入对应的模块*/
import { useModuleContext } from "@brushes/component-core";
import { useState } from "react";
import {debounce} from "lodash-es";
import {post} from "@brushes/request";
import {message} from "antd";

function useDiyHook() {
    const [loading, setLoading] = useState(false);
    const retry = useModuleContext(s=> s.moduleStore.retry);
    const { shoppingGoodsId } = useModuleContext(s => s.moduleStore._skuInfo) || { shoppingGoodsId: ''};

    return debounce(async () => {
        setLoading(true);
        const {msg} = await post('web/oc/shopping/deleteShoppingGoods.json', {
            shoppingGoodsId
        })
        message.success(msg);
        retry();
        setLoading(false);
    }, 500)

}
export default useDiyHook;
                `
            },
            {
                label: "路由跳转 | navigator",
                type: "路由跳转 | navi",
                detail: "路由跳转",
                apply: `
/* 导入对应的模块*/
import { useNavigateImpl } from "@brushes/component-tool";

function useDiyHook() {
    /* 自定义hook里面导入 */
    const { navigator } = useNavigateImpl();
    /* @param 路由地址  '/path?a=b&c=d' */
    return () => {
        navigator('/path?a=b&c=d');
    }
}
export default useDiyHook;
                `
            },
            {
                label: "css样式 | css",
                type: "css样式 | css",
                detail: "css样式",
                apply: `
/* 导入对应的模块*/
import { createStyles } from "antd-style";
const useStyle = createStyles(({token, css}, props:any) => {
    return {
        diyClassName: css\`
            
        \`
    }
})
export default useStyle;

                `
            },
            {
                label: "moduleStore",
                type: "store",
                detail: "当前模块的所有状态",
                apply: `
/* 导入对应的模块*/
import { useModuleContext } from "@brushes/component-core";

function useDiyHook() {
    /* 自定义hook里面导入 */
    const moduleStore = useModuleContext(s=> s.moduleStore)
    
    return () => {
        
    }
}
export default useDiyHook;
                `
            },
            {
                label: "moduleStore.defaultValue",
                type: "defaultValue",
                info: "当前模块的默认值",
                apply: `
/* 导入对应的模块*/
import { useModuleContext } from "@brushes/component-core";

function useDiyHook() {
    /* 自定义hook里面导入 */
    const defaultValue = useModuleContext(s=> s.moduleStore.defaultValue)
    
    return () => {
        
    }
}
export default useDiyHook;
                `
            },
            {
                label: "moduleStore.goodNum",
                type: "goodNum",
                info: "当前模块的选择商品数量",
                apply: `
/* 导入对应的模块*/
import { useModuleContext } from "@brushes/component-core";

function useDiyHook() {
    /* 自定义hook里面导入 */
    const goodNum = useModuleContext(s=> s.moduleStore.goodNum)
    
    return () => {
        
    }
}
export default useDiyHook;
                `
            },
            {
                label: "moduleStore._skuInfo",
                type: "_skuInfo",
                info: "当前模块的sku商品数据",
                apply: `
/* 导入对应的模块*/
import { useModuleContext } from "@brushes/component-core";

function useDiyHook() {
    /* 自定义hook里面导入 */
    const _skuInfo = useModuleContext(s=> s.moduleStore._skuInfo)
    
    return () => {
        
    }
}
export default useDiyHook;
                `
            },
            {
                label: "moduleStore.params",
                type: "params",
                info: "每个模块的请求参数",
                apply: "const params = useModuleContext(s=> s.moduleStore.params)"
            },
            {
                label: "moduleStore.breadList",
                type: "breadList",
                info: "每个模块的面包屑",
                apply: "const breadList = useModuleContext(s=> s.moduleStore.breadList)"
            },
            {
                label: "useModuleContext",
                type: "context",
                detail: "获取当前模块的context",
                apply: "import { useModuleContext } from '@brushes/component-core'"
            }
        ]
    }
}
