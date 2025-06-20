import {useEffect, useMemo, useState} from "react";
import {post} from "@brushes/request";
import {useModuleContext, useModuleRootContext} from "@brushes/component-core";
import {get, groupBy, isEmpty, noop} from "lodash-es";
import {message} from "antd";
import {useApiParam} from "@brushes/component-tool";

export const useDetail = (api:string, params: Array<any>) => {
    const [loading, setLoading] = useState<boolean>(false);
    const setModuleStore = useModuleContext(s => s.setModuleStore);
    useEffect(() => {
        (async () => {
            if(api) {
                query()
            }
        })()
    }, [api, params]);
    const apiParams = useApiParam(params);

    const query = async () => {
        try {
            setLoading(true);
            const data = await post(api, apiParams);
            setModuleStore({defaultValue: data});
        } catch (err) {

        } finally {
            setLoading(false);
        }

    }

    return {
        loading
    }
}



export const useSku = (dataKey: string, promotionKey: string, couponKey: string) => {
    const [skuListName, setSkuListName] = useState<Array<string>>([]);
    const defaultValue = useModuleContext(s => s.moduleStore.defaultValue) || {};
    const couponQuery = useModuleContext(s => s.moduleStore[couponKey]) || noop;
    const promotionQuery = useModuleContext(s => s.moduleStore[promotionKey]) || noop;
    const setModuleStore = useModuleContext(s => s.setModuleStore);
    const specList = useMemo(() => {
        const list = get(defaultValue, "rsSpecValueDomainList", []);
        const data = groupBy(list, 'specName') || [];
        return Object.keys(data).map((item: string) => ({
            specName: item,
            skuOption: data[item]
        }));
    }, [defaultValue]);

    useEffect(() => {
        const skuList = get(defaultValue, "rsSkuDomainList", []);
        // @ts-ignore
        const selectObj = skuList.find((item) => item[dataKey] === defaultValue[dataKey]) || {};

        const arr = specList.map(item => {
            const { specValueValue } = item.skuOption.find(c => selectObj.skuName.includes(c.specValueValue));
            return specValueValue
        });
        setModuleStore({
            goodNum: selectObj.goodsMinnum || 1,
            _skuInfo: selectObj
        });
        setSkuListName(arr);
    }, [specList]);

    const isTrue = (str:string, list: Array<string>) => {
        return list.every((item) => {
            return str.includes(`/${item}/`) || str.endsWith(item) || str.startsWith(item);
        })
    }

    const onClick = (value: string, index: number) => {
        skuListName[index] = value;
        const skuList = get(defaultValue, "rsSkuDomainList", []);
        const skuObj = skuList.find(item => {
           return isTrue(item.skuName, skuListName)
        }) || {};
        if(isEmpty(skuObj)) {
            message.info('该规格已下架');
        } else {
            couponQuery({
                skuCode: skuObj.skuCode,
                skuNo: skuObj.skuNo,
            });
            promotionQuery({
                skuCode: skuObj.skuCode,
                skuNo: skuObj.skuNo,
            })
        }

        setModuleStore({
            goodNum: 1,
            _skuInfo: skuObj
        });

        setSkuListName(prev => {
            prev[index] = value;
            return [...prev];
        });
    }

    return {
        skuListName,
        specList,
        onClick
    }
}