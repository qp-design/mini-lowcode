import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {name} from '../package.json';
import Root from './views';
import "./index.scss";
import {FormWithValidate} from '@brushes/form';
import {ModuleRootProvider, useModuleRootContext} from "@brushes/component-core";
import dayjs from 'dayjs';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import {ThemeProvider} from 'antd-style';
import {useEffect} from "react";
import {cacheParams, get} from "@brushes/optimize";
dayjs.locale('zh-cn');

const domNode = document.getElementById("app")!;

const ThemeComponent = () => {
    const setModuleRootStore = useModuleRootContext(s =>s.setModuleRootStore);

    const {colorPrimary, colorBgTextHover} = useModuleRootContext(s => s.rootStore._themeColor) || {};

    useEffect(() => {
        (async () => {
            const data = await get('web/ml/mlogin/getProappinfo.json', cacheParams({}, 10));
            function changeFavicon(newIconUrl: string) {
                const favicon = document.querySelector('link[rel="icon"]');
                favicon!.href = newIconUrl;
            }
            // 使用示例
            changeFavicon(data.proappEnvIconUrl);
            setModuleRootStore({
                _webConfig: {
                    proappEnvIndexc: data.proappEnvIndexc || 'https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/apps_web_src_assets_login.png',
                    proappEnvLogo: data.proappEnvLogo,
                }
            })
        })();
    }, []);
    return (
        <ThemeProvider
            // 可以和 CP 一样直接传入 theme 对象
            theme={{
                components: {
                    Descriptions: {
                        titleMarginBottom: 10
                    },
                },
                token: {
                    colorBgContainerDisabled: '#fafafa',
                    colorTextDisabled: '#444',
                    colorBgTextHover: colorBgTextHover,
                    colorPrimary: colorPrimary || '#1677ff', // 修改为主题颜色
                    colorLink: colorPrimary || '#1677ff', // 修改为主题颜色
                },
            }}
        >
            <Root/>
        </ThemeProvider>
    )
}

ReactDOM.createRoot(domNode).render(<BrowserRouter basename={`/paas/${name}`}>
    <ModuleRootProvider>
        <FormWithValidate>
        <ConfigProvider locale={zhCN}>
            <ThemeComponent />
        </ConfigProvider>
        </FormWithValidate>
    </ModuleRootProvider>
</BrowserRouter>);
