import {useEffect} from "react";
import { post } from '@brushes/request'
import {useModuleContext} from "@brushes/component-core";

export const useGoodCategory = (label: string) => {
    const setModuleStore = useModuleContext(s => s.setModuleStore);
    const cateList = useModuleContext(s => s.moduleStore.cateList) || [];
    const breadList = useModuleContext(s => s.moduleStore.breadList) || [];

    useEffect(() => {
        classTreeCodeImpl();
    }, [label]);

    const implCate = (item:any) => {
        if (item.childList && item.childList.length > 0) {
                // 处理面包屑;
                setModuleStore({
                    breadList: breadList.concat({
                        label: item.goodsClassName,
                        params: {
                            goodsClassParentcode: item.goodsClassCode || -1
                        },
                        cateList: item.childList
                    }),
                    params: { goodsClassParentcode: item.goodsClassCode },
                    cateList: item.childList
                })
            } else {
                //最多三级分类
                if(breadList.length > 3) {
                    return;
                }
                setModuleStore({
                    breadList: breadList.concat({
                        label: item.goodsClassName,
                        params: {
                            classtreeCode: item.classtreeCode
                        },
                        cateList: item.childList
                    }),
                    params: { classtreeCode: item.classtreeCode },
                    cateList: [item]
                })
            }
    };

    const classTreeCodeImpl = async () => {
        try {
            const initArr = await post('/web/rs/rsGoodsClass/queryGoodsClassTreeForBusStr.json');
            setModuleStore({
                breadList: [{
                    label,
                    cateList: initArr
                }],
                // params: {},
                cateList: initArr
            })
        } catch (err) {
        }
    }

    return {
        cateList,
        implCate
    }
}