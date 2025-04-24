import {useModuleContext} from "@brushes/component-core";
import {useMemo} from "react";
import {get} from "lodash-es";

export const useComponentListData = (dataPath: string, storeKey: string) => {
    const value = useModuleContext(s => s.moduleStore[storeKey]);
    return useMemo(() => {
        let res = [];
        if (dataPath) {
            res = get(value, dataPath, []);
        } else {
            res = value
        }
        if (Array.isArray(res)) {
            return res
        } else {
            return []
        }
    }, [value, dataPath]);
}
