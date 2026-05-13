import {useEffect} from "react";
import lz from "lzutf8";
import {useEditor} from "@craftjs/core";
import {post, cacheParams} from "@brushes/optimize";
import {useSearchParamHook} from "../../utils";

export const useQueryInitData = (menuOpcode: string) => {
    const {actions} = useEditor();
    const [appmanageCode] = useSearchParamHook(['appmanageCode']);
    useEffect(() => {
        // 平滑滚动到顶部
        // window.scrollTo({
        //     top: 0,
        //     left: 0,
        //     behavior: 'smooth' // 可选：平滑滚动
        // });
        (async () => {
            try {
                const {modelTagvalueJson} = await post(
                    "/web/pfs/pfsmodeltagvalue/getPfsModelTagValueByTginfo.json",
                    cacheParams(
                        {
                            menuOpcode,
                            appmanageCode,
                            isNew: 1,
                        },
                        30,
                    ),
                );
                console.log(30, modelTagvalueJson);
                const json = lz.decompress(
                    lz.decodeBase64(
                        modelTagvalueJson ||
                        "eyJST09UIjp7InR5cGXECHJlc29sdmVkTmFtZSI6IkNvbnRhaW5lcldyYXAifSwiaXNDYW52YXMiOnRydWUsInByb3BzxDl3aWR0aCI6IjEwMCIsImhlaWdodCI6MCwiYmFja2dyb3VuZCI6IiMwxwEiLCJjbGFzc8docm9vdC1jyG0iLCJkYXRhLWN50ht9LCJkaXNwbGF59QCjLCJjdXN0b20iOnt9LCJoaWRkZW4iOmZhbHNlLCJub2RlcyI6WyI5MGc4M2h3SDM2Il0sImxpbmtlZE7GHXt9fSwiU0VKZnlTZzJ1cP8BHOkAlP8BGDoyMDAsIm1hcmdpbsRkLCJwYWRkaW5nxw1vc2l0aW9uVmFsdcRr5AC75wFCImF1dG8i7AFHSW1hZ+QAgM0V5AEpZ2JhKDI1NSzIBDApIiwiZmxleERpcmVjxGDEJm93IiwiYWxpZ25JdGVtcyI6ImNlbnT9AVrvAVZwYXJlbuQAm2hlVzRfYkQ5eV/kAfP2AWz1AWDrAYD6AWBPdXT/AWPnAWNwYXJh5ADJxGzpAoc07QKI/wFG/wFG8gFGY29sdW1u8gEz7QC09wE25QNz/wEw7QEwfQ==",
                    ),
                );
                actions.deserialize(json);
            } catch (err) {
            }
        })();
    }, [menuOpcode]);
};

export const useQueryData = (modelId: string) => {
    const {actions} = useEditor();
    useEffect(() => {
        (async () => {
            try {
                const {modelConfig} = await post(
                    "/web/pfs/pfsmodel/getPfsModel.json",
                    {
                        modelId,
                    },
                );
                const json = lz.decompress(lz.decodeBase64(modelConfig));
                actions.deserialize(json);
            } catch (err) {
            }
        })();
    }, []);
};
