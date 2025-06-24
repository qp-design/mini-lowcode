import {FieldType} from "@brushes/form";
import {post} from "@brushes/request";
import {get} from "lodash";

export const addressBasicConfig:  FieldType[]  = [
    (form) => {
        return {
            label: '省',
            name: 'provinceCode',
            type: 'select',
            rules: [{required: true}],
            extraProps: {
                onChange(_: string, {label}: {label: string}) {
                    form.setFieldValue('cityCode', '');
                    form.setFieldValue('provinceName', label);
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
    {
        label: '省',
        name: 'provinceName',
        type: 'text',
        style: {
            display: 'none',
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
                onChange: (_:string, {label}: {label: string}) => {
                    form.setFieldValue('cityName', label);
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
    {
        label: '市',
        name: 'cityName',
        type: 'text',
        style: {
            display: 'none',
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
                onChange(value:any, {label}: {label: string}) {
                    form.setFieldValue('areaName', label);
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
        label: '区',
        name: 'areaName',
        type: 'text',
        style: {
            display: 'none',
        }
    },
    {
        label: '详细地址',
        name: 'addressDetail',
        type: 'textarea',
        rules: [{required: true}],
        extraProps: {
            style: {
                height: 100,
            },
        }
    },
]
