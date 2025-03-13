import { atom } from 'jotai'
import {FieldType} from '@brushes/form';
import {Space} from 'antd';
import {isEmpty} from 'lodash-es';
import {ColumnGroupType, ColumnType} from 'antd/es/table/interface';
// import React, {useMemo} from 'react';
// import {OperateJsx} from 'component-ui';
// import {OperateJsx} from 'component-ui';
export type atomTypes = 'good' | 'order';

// function tag(value) {
//   //返回一个字符串
//   console.log(111113, eval(value[0]));
//   return eval(value[0])
// }
interface DiyColumn {
  type: string
}
export const store: {
  [k in atomTypes]: {
    formConfig: FieldType[];
    tableConfig?: (ColumnGroupType<any> | ColumnType<any> | DiyColumn)[]
  }
} = {
  good: {
    formConfig: [
      {
        label: '商品名称',
        name: 'goodsName',
        type: 'text',
      },
      {
        label: '商品编码',
        name: 'skuNo',
        type: 'text',
      },
      {
        label: '',
        name: 'skuNoDiy',
        type: 'slot',
      },
      {
        label: '品牌',
        name: 'brandCode',
        type: 'select',
        extraProps: {
          allowClear: 'true',
          options: [
            {
              value: 20,
              label: '圆角'
            },
            {
              value: 0,
              label: '直角'
            }
          ]
        }
      }
    ],
    tableConfig: [
      {
        title: '商品名称',
        dataIndex: 'goodsName',
        key: 'goodsName',
      },
      {
        title: '商品编码',
        dataIndex: 'skuNo',
        key: 'skuNo',
      },
      {
        title: '可售库存',
        dataIndex: 'goodsSupplynum',
        key: 'goodsSupplynum',
      },
      {
        title: '销售库存',
        dataIndex: 'goodsNum',
        key: 'goodsNum',
      },
      {
        title: '金额(元)',
        dataIndex: 'pricesetNprice',
        key: 'pricesetNprice',
      },
      {
        title: '类型',
        dataIndex: 'goodsType',
        key: 'goodsType',
      },
      {
        title: '是否上架',
        dataIndex: 'dataOpbillstate',
        key: 'dataOpbillstate',
        type: 'slot'
      },
      {
        title: '操作',
        dataIndex: 'dataActions',
        key: 'dataActions',
        type: 'slot'
      }
    ],
  },
  order: {
    formConfig: [
      {
        label: '订单号',
        name: 'contractBillcode',
        type: 'text',
        extraProps: {
          placeholder: '请输入订单号'
        }
      },
      {
        label: '收货人',
        name: 'goodsReceiptMem',
        type: 'text',
        extraProps: {
          placeholder: '请输入收货人'
        }
      },
      {
        label: '手机号',
        name: 'goodsReceiptPhone',
        type: 'text',
        extraProps: {
          placeholder: '请输入手机号'
        }
      },
      {
        label: '用户',
        name: 'memberBcode',
        type: 'text',
        extraProps: {
          placeholder: '请选择用户'
        }
      },
      {
        label: '下单时间',
        name: 'date',
        type: 'range',
        extraProps: {
          placeholder: '请输入手机号'
        }
      },
      {
        label: '订单类型',
        name: 'contractType',
        type: 'select',
        extraProps: {
          placeholder: "请选择订单类型",
          options: [
            {
              value: '00',
              label: '实物订单'
            },
            {
              value: '06',
              label: '积分订单'
            },
            {
              value: '26',
              label: '秒杀订单'
            }
          ]
        }
      },
      {
        label: '支付方式',
        name: 'contractPmode',
        type: 'select',
        extraProps: {
          options: [
            {
              value: '',
              label: '全部'
            },
            {
              value: 0,
              label: '线上支付'
            },
            {
              value: 3,
              label: '货到付款'
            }
          ]
        }
      },
    ],

    tableConfig: [
      {
        title: '订单号',
        dataIndex: 'contractBillcode',
        key: 'contractBillcode',
      },
      {
        title: '商品名称',
        dataIndex: 'goodsList',
        key: 'goodsList',
        render(items = []) {
          if(isEmpty(items)) {
            return null
          }
          return (
            <>
              {
                items.map((item:any) => (
                  <Space>
                    <img src={item.dataPic} width={40}/>
                    <div>
                      <p>{item.goodsName}</p>
                      <p>{item.contractGoodsPrice} X {item.goodsNum}</p>
                    </div>
                  </Space>
                ))
              }
            </>
          )
        }
      },
      // {
      //   title: '商品信息',
      //   dataIndex: 'money',
      //   key: 'money',
      // },
      // {
      //   title: '用户信息',
      //   dataIndex: 'packageList',
      //   key: 'packageList',
      // },
      // {
      //   title: '订单信息',
      //   dataIndex: 'orderInfo',
      //   key: 'orderInfo',
      // },
      {
        title: '订单状态',
        dataIndex: 'dataState',
        key: 'dataState',
      },
    ]
  }
}

export const storeForm = atom(store);

export const formStoreConfigAtom = atom([])
export const tableStoreConfigAtom = atom([])
