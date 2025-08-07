
/* 导入对应的模块*/
import {TransformType} from '@brushes/form';
import {get} from "lodash"
import { postFormData, post } from "@brushes/request"

const formateImpl = (preValue) => {
    if(typeof preValue !== 'object') {
        return preValue;
    }
    const file = get(preValue, '[0].originFileObj');
    if(file) {
        return postFormData('web/rs/goodsFile/uploadGoodsFiles.json', {file}).then(res =>res.fileUrl)
    }
    return get(preValue, '[0].url');
}

const transformSubmitDataConfig: TransformType[] = [
    {
        from: 'userinfoTaun',
        to: 'userinfoTaun',
        format: async (preValue = []) => {
            try {
                const data = await post('web/um/userservice/queryDutyParagraphCheck.json', { dutyParagraph: preValue });
                return preValue;
            } catch(err) {
                return Promise.reject(err);
            }
        }
    },
    {
        from: 'umUserinfoapplyQuaList',
        to: 'umUserinfoapplyQuaList',
        format: async (preValue = []) => {
            const list = Object.entries(preValue).map(([key, value]) => {
                return {
                    "userinfoapplyQuaKey": key,
                    "userinfoapplyQuaVaule": formateImpl(value)
                }
            })

            const result = await Promise.all(list.map(item => item.userinfoapplyQuaVaule));

            return list.map((item, index) => ({
                "userinfoapplyQuaKey": item.userinfoapplyQuaKey,
                "userinfoapplyQuaVaule": result[index]
            }))
        },
    },
    {
        from: 'dataState',
        to: 'dataState',
        format: async (preValue = []) => {
            return 0
        },
    }
]
export default transformSubmitDataConfig
                