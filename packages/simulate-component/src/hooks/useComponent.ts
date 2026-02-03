import { ComponentType } from '../utils/type';
import * as appendComponent from '../components';
import { useLocal } from '../local';
import { isEmpty } from 'lodash';
import { useMemo } from 'react';

type simulateType = ComponentType & typeof appendComponent;

let component = {} as any;
export function useComponent(): simulateType {
  const state = useLocal();
  return useMemo(() => {
    if (isEmpty(component)) {
      component = { ...state, ...appendComponent };
      return component;
    }
    return component;
  }, [state]);
}
