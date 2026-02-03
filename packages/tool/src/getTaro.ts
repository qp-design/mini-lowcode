import Taro from '@tarojs/taro';
import { getEnv } from '@brushes/utils';

const obj = {
    useRouter: () => {
        return {
            params: {} as {[v:string]:any}
        }
    },
    useReachBottom: () => {

    }
}

export const getTaro = () => {
    const env = getEnv();
    if(env) {
        return Taro;
    }
    return obj
}