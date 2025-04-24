import { useNavigate } from 'react-router-dom'
import { message } from 'antd';

export const useNavigateImpl = (enabled?: boolean) => {
    const toPath = useNavigate();
    const navigator = (path:string) => {
        if(enabled) {
            message.info('编辑模式不能跳转');
            return;
        }
        console.log(7, path);
        toPath(path)
    }

    return {
        navigator
    }
}


