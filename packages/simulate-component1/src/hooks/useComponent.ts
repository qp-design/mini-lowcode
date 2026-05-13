import * as nuiComponent from '@nutui/nutui-react-taro';
import { View, Text } from '@tarojs/components';

import { isEmpty } from 'lodash';
import { useMemo } from 'react';

type simulateType = typeof nuiComponent & typeof View & typeof Text;

let component = {} as any;
export function useComponent(): simulateType {
  return useMemo(() => {
    if (isEmpty(component)) {
      component = { ...nuiComponent, View, Text };
      return component;
    }
    return component;
  }, []);
}
