import Left from './left'
import Right from './right'
import ContainerMonitor from './container';
import {ThemeProvider} from 'antd-style';
import {
    ModuleRootProvider,
} from "@brushes/component-core";
import {FormWithValidate} from '@brushes/form';
import {App} from "antd";
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

const Wrap = () => {
    return (
        <App>
            <FormWithValidate>
                <ModuleRootProvider>
                    <WrapContainer enabled={true}>
                        <ThemeProvider
                            // 可以和 CP 一样直接传入 theme 对象
                            theme={{
                                components: {
                                    Descriptions: {
                                        titleMarginBottom: 10
                                        /* 这里是你的组件 token */
                                    },
                                },
                                token: {
                                    // colorPrimary: 'green',
                                },
                            }}
                        >

                            <EditorMode/>
                        </ThemeProvider>
                    </WrapContainer>
                </ModuleRootProvider>
            </FormWithValidate>
        </App>
    )
}

export default Wrap;
