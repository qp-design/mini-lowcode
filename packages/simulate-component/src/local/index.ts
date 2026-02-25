import { fetchResource } from '@/utils';
import { ComponentType } from '@/utils/type';
import { useState } from 'react';
import { isEmpty } from 'lodash';
const resource = fetchResource();
let isInit = true;
let component = {} as any;
export function useLocal() {
  const [state] = useState<ComponentType>(() => {
    if (isInit) {
      isInit = isEmpty(component);
      component = resource.read();
    }
    return component;
  });
  return state;
}
