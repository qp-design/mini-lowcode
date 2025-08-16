
/* 导入对应的模块*/
import {useSearchParams} from "react-router-dom";
function useDiyHook() {
    /* 自定义hook里面导入 */
    const [,setSearchParams] = useSearchParams();

    return () => {
        setSearchParams({
            mode: 'add'
        });
    }
}
export default useDiyHook;

