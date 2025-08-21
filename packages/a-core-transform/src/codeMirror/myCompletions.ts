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
import {debounce} from "lodash";
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
                label: "diyAction",
                type: "表单提交 | diyActions",
                detail: "表单提交",
                apply: `      
/* 导入对应的模块*/
import React from "react";
import {Form, Button} from "antd"
import {useFormImpl, TransformType} from "@brushes/form";
let text = '我已确认当前商品';

const SaveOperate = ({transformDataConfig = []} : {
      transformDataConfig?: Array<TransformType>
}) => {
    const form = Form.useFormInstance();
    const {
        handlerSubmit,
        inProgressStatus
    } = useFormImpl(form, () => {}, transformDataConfig);

    const onSubmit = async (cb:() => void, value: any) => {
        try {
          console.log(1111, value);             
        } catch (err) {

        } finally {
        }
    }

    return (
        <Button
          type='primary'
          style={{width: 160, height: 46, fontSize: 15}}
          loading={inProgressStatus[text]} 
          onClick={() => handlerSubmit(text, true, onSubmit)
          }>{text}</Button>
    );
};

export default SaveOperate;
                `
            },
            {
                label: "transform",
                type: "数据转化 | trans",
                detail: "数据转化",
                apply: `      
/* 导入对应的模块*/
import {TransformType} from '@brushes/form';
import { post } from '@brushes/request';
const transformSubmitDataConfig: TransformType[] = [
  {
    from: 'activeCustom',
    to: 'activeCustom',
    format: () => {},
    isDelete: true,
  },
  {
    from: 'fileUrl',
    to: 'fileUrl',
    format: async (preValue = []) => {
      const file = get(preValue, '[0].originFileObj');
      if(file) {
        try {
          const data = await post('XXXXXXXXXX', {file});
          return data.dataObj.fileUrl;
        } catch (err:any) {
          throw new Error(err);
        }
      }
      return get(preValue, '[0].url');
    },
  },
]
export default transformSubmitDataConfig;
                `
            },
            {
                label: "searchParams",
                type: "打开 | searchParams | query",
                detail: "添加query",
                apply: `      
/* 导入对应的store*/
import { useModuleContext } from "@brushes/component-core";
import {useSearchParams} from "react-router-dom";

function useDiyHook() {
   const skuInfo = useModuleContext(s=> s.moduleStore._skuInfo);
    const [,setSearchParams] = useSearchParams();

    /* @param 路由地址  '/path?a=b&c=d' */
    return () => {
      setSearchParams({
        shoppingGoodsId: skuInfo.shoppingGoodsId
      });
    }
}
export default useDiyHook;
                `
            },
            {
                label: "图库生成 | antv",
                type: "图库生成 | antv",
                detail: "图库",
                apply: `
/* 导入对应的store*/
import React, { useEffect, useRef } from 'react';
import { Chart } from '@antv/g2';

const BasicChart = () => {
  const containerRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!chartRef.current) {
      // 创建图表实例
      chartRef.current = new Chart({
        container: containerRef.current,
        autoFit: true,
        height: 400,
      });
    }

    // 加载数据
    const data = [
      { time: '10:10', call: 4, waiting: 2, people: 2 },
      { time: '10:15', call: 2, waiting: 6, people: 3 },
      { time: '10:20', call: 13, waiting: 2, people: 5 },
      { time: '10:25', call: 9, waiting: 9, people: 1 },
      { time: '10:30', call: 5, waiting: 2, people: 3 },
      { time: '10:35', call: 8, waiting: 2, people: 1 },
      { time: '10:40', call: 13, waiting: 1, people: 2 },
    ];

    // 配置图表
    chartRef.current.data(data);
    chartRef.current
      .interval()
      .encode('x', 'time')
      .encode('y', 'waiting')
      .encode('color', () => 'waiting')
      .encode('series', () => 'waiting')
      .axis('y', { title: 'Waiting' });
    
    chartRef.current
      .interval()
      .encode('x', 'time')
      .encode('y', 'people')
      .encode('color', () => 'people')
      .encode('series', () => 'people')
      .scale('y', { independent: true })
      .axis('y', { position: 'right', grid: null, title: 'People' });

    // 渲染图表
    chartRef.current.render();

    // 组件卸载时销毁图表
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  return <div ref={containerRef} />;
};

export default BasicChart;
                `
            },
            {
                label: "路由跳转 | navigator",
                type: "路由跳转 | navi",
                detail: "路由跳转",
                apply: `
/* 导入对应的store*/
import { useModuleContext } from "@brushes/component-core";
import { useNavigateImpl } from "@brushes/component-tool";

function useDiyHook() {
   const skuInfo = useModuleContext(s=> s.moduleStore._skuInfo)
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
                label: "配置 | formConfig | form配置项",
                type: "form",
                detail: "form配置项",
                apply: `
import {FieldType, FormInstance} from '@brushes/form';
import {last} from "lodash"
import { Form } from "antd"

import { post } from "@brushes/request"

function useFormConfig() {
  const form = Form.useFormInstance();
  return [
      {
        label: '选择分类',
        name: 'classtreeCode',
        type: 'cascaderComplex',
        rules: [{required: true, message: '必填项'}],
        extraProps: {
          options: async() => {
            return await post('web/rs/classtree/queryClasstreePageForAt.json');
          },
          onChange(e, option) {
              const s = last(option) || {};
              form.setFieldValue('classtreeCode', s.classtreeCode)
              form.setFieldValue('classtreeName', s.classtreeName)
          },
          multiple: false,
          fieldNames: {
            label: "classtreeName",
            value: "classtreeCode",
            children: "childList"
          },
        }
      },
      {
          name: 'classtreeName',
          type: 'text',
          style: {display: 'none'}
      },
      {
        label: '联系人电话',
        name: 'memberContactPhone',
        type: 'number',  
        extraProps: {
          style: { width: '100%'},
        },
        rules: [{ required: true, pattern: /^1[3-9]\\d{9}$/, message: '请输入正确手机号码'}],
      },
    ];
}

export default useFormConfig
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
