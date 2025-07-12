import Left from './left'
import Right from './right'
import ContainerMonitor from './container';
import {ThemeProvider} from 'antd-style';
import {
    ModuleRootProvider, useModuleRootContext,
} from "@brushes/component-core";
import {FormWithValidate} from '@brushes/form';
import {
    App
} from "antd";
// 在应用入口文件顶部引入 antd 样式
import {WrapContainer} from '@brushes/editor-component';


const EditorMode = () => {
    return (
        <div className={'wrap'}>
            <div className={'left bg-white dark:bg-black'}><Left/></div>
            <div className={'container'}><ContainerMonitor/></div>
            <div className={'right'}><Right/></div>
        </div>
    )
}


const ThemeComponent = () => {
    const {colorPrimary, colorBgTextHover} = useModuleRootContext(s => s.rootStore._themeColor) || {};
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
                    colorBgTextHover,
                    colorPrimary: colorPrimary || '#1677ff', // 修改为主题颜色
                    colorLink: colorPrimary || '#1677ff', // 修改为主题颜色
                },
            }}
        >
            <EditorMode/>
        </ThemeProvider>
    )
}
const Wrap = () => {
    return (
        <App>
            <FormWithValidate>
                <ModuleRootProvider>
                    <WrapContainer enabled={true}>
                        <ThemeComponent/>
                    </WrapContainer>
                </ModuleRootProvider>
            </FormWithValidate>
        </App>
    )
}

export default Wrap;
