import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {name} from '../package.json';
import Root from './views';
import "./index.scss";
import {FormWithValidate} from '@brushes/form';
import {ModuleRootProvider} from "@brushes/component-core";
import dayjs from 'dayjs';
import {ConfigProvider} from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';

dayjs.locale('zh-cn');

const domNode = document.getElementById("app")!;
ReactDOM.createRoot(domNode).render(<BrowserRouter basename={`/paas/${name}`}>
    <ModuleRootProvider>
        <ConfigProvider locale={zhCN}>
            <FormWithValidate>
                <Root/>
            </FormWithValidate>
        </ConfigProvider>
    </ModuleRootProvider>
</BrowserRouter>);
