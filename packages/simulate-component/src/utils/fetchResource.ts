import { View, Text } from '../components';
import { getEnv } from '@brushes/utils';
import { View as TaroView, Text as TaroText } from '@tarojs/components';
import * as component from '@nutui/nutui-react-taro';

const gModelMap = new Map(); // 存储组件

function wrapPromise(promise: Promise<any>) {
  let status = 'pending';
  let result: any;
  let suspender = promise.then(
    (r) => {
      status = 'success';
      result = r;
    },
    (e) => {
      status = 'error';
      result = e;
    }
  );
  return {
    read() {
      if (status === 'pending') {
        throw suspender;
      } else if (status === 'error') {
        throw result;
      } else if (status === 'success') {
        return result;
      }
    }
  };
}

function dynamicLoadComponent() {
  const existedComponent = gModelMap.get('component');
  return new Promise((resolve) => {
    if (!existedComponent) {
      (async () => {
        const flag = getEnv();
        console.log('401=====> b编辑模式', flag);
        let comp = {} as any;
        if (flag) {
          comp = { ...component, View: TaroView, Text: TaroText };
        } else {
          const antdComp = await import('@nutui/nutui-react');
          comp = { ...antdComp, View, Text };
        }
        gModelMap.set('component', comp);
        resolve(comp);
      })();
    } else {
      resolve(existedComponent);
    }
  });
}

export function fetchResource() {
  let componentPromise = dynamicLoadComponent();
  return wrapPromise(componentPromise);
}
