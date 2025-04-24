import { FieldType } from '@brushes/form';
import { post } from '@brushes/request';
import {get} from "lodash-es";

export const addressFormField: FieldType[] = [
    (form) => {
        return {
            label: '省',
            name: 'provinceCode',
            type: 'select',
            rules: [{required: true}],
            extraProps: {
                onChange() {
                    form.setFieldValue('cityCode', '');
                    form.setFieldValue('areaCode', '')
                },
                optionsKey: 'provinceCode',
                optionsName: 'provincName',
                options: async () => {
                    const data = await post('web/bs/province/queryProvincePage.json');
                    return get(data, 'list', []);
                }
            }
        }
    },
    (form) => {
      return {
          label: '市',
          name: 'cityCode',
          type: 'select',
          rules: [{required: true}],
          extraProps: {
              dependencies: ['provinceCode'],
              onChange: () => {
                  form.setFieldValue('areaCode', '')
              },
              optionsKey: 'areaCode',
              optionsName: 'areaName',
              options: async () => {
                  const provinceCode = form.getFieldValue('provinceCode');
                  if(provinceCode) {
                      const data = await post('web/bs/area/queryAreaPage.json', {
                          provinceCode
                      });
                      return get(data, 'list', []);
                  }
                  return []
              }
          }
      }
    },
    (form) => {
        return {
            label: '区',
            name: 'areaCode',
            type: 'select',
            rules: [{required: true}],
            extraProps: {
                dependencies: ['cityCode'],
                onChange(value:any) {
                    console.log(46, value);
                    // form.setFieldValue('cityCode', '')
                },
                optionsKey: 'areaCode',
                optionsName: 'areaName',
                options: async () => {
                    const areaParentCode = form.getFieldValue('cityCode');
                    if(areaParentCode) {
                        const data = await post('web/bs/area/queryAreaPage.json', {
                            areaParentCode
                        });
                        return get(data, 'list', []);
                    }
                    return []
                }
            }
        }
    },
    {
        label: '详细地址',
        name: 'addressDetail',
        type: 'text',
        rules: [{required: true}]
    },
    {
        label: '收货人',
        name: 'addressMember',
        type: 'text',
        rules: [{required: true}]
    },
    {
        label: '手机号码',
        name: 'addressPhone',
        type: 'text',
        rules: [{required: true}]
    },
    {
        label: '设为默认',
        name: 'addressDefault',
        type: 'checkbox',
    }
]

