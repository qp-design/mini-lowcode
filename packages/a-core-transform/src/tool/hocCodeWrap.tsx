import { UserComponent } from '@craftjs/core';
import {useComponent} from "@brushes/simulate-component-mini";
import * as lowcodeUi from '@brushes/lowcode-component-ui';


const HOCCodeWrapComponent = (Component: any): UserComponent => {
  console.log(105, Component);
  return (props: any) => {
    const { View } = useComponent()
    return (
      <View>
        <Component {...props}/>
      </View>
    );
  };
};


export let Components: any = {};
Object.entries(lowcodeUi).forEach(([key, value]) => {
  Components[key] = HOCCodeWrapComponent(value);
})