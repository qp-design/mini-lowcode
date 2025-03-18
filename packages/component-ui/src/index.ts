import * as basic from './components';
import {HOCCodeWrapComponent} from "@brushes/component-core";

let obj: any = {};

Object.entries(basic).forEach(([key, value]) => {
    const id = key + 'Component';
    obj[id] = HOCCodeWrapComponent(value, ['Text', 'Link'].includes(key));
})

export default obj;
