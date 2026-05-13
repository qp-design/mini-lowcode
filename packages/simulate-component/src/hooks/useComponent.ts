import { ComponentType } from '../utils/type';
import { useLocal } from '../local';
import { isEmpty } from 'lodash';
import { useMemo } from 'react';

type simulateType = ComponentType;

let component = {} as any;
export function useComponent(): simulateType {
  const state = useLocal();
  return useMemo(() => {
    if (isEmpty(component)) {
      component = state;
      return component;
    }
    return component;
  }, [state]);
}
