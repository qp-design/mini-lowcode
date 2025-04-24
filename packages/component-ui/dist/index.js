import * as component from './components';
import { HOCCodeWrapComponent } from "@brushes/component-core";
let obj = {};
Object.entries(component).forEach(([key, value]) => {
    const id = key + 'Component';
    obj[id] = HOCCodeWrapComponent(value, ['Text', 'Link'].includes(key));
});
export default obj;
