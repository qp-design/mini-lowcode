import Taro from '@tarojs/taro';
export declare const getTaro: () => Taro.TaroStatic | {
    useRouter: () => {
        params: {
            [v: string]: any;
        };
    };
    useReachBottom: () => void;
};
