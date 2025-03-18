import {useNode, UserComponent} from "@craftjs/core";
import { ErrorBoundary } from "react-error-boundary";
import {useMemo} from 'react';
import { clone, has, omit } from 'lodash-es';
import { changeCode } from '../tool/changeCode';


export const HOCCodeWrapComponent = (Component: any, isTrue?: boolean) : UserComponent => {
  console.log(9, isTrue);
  return (props:any) => {
    const {
      connectors: { connect, drag },
    } = useNode();

    const newProps = useMemo(() => {
      if (has(props, '$_children')) {
        const date = new Date().valueOf()
        const propsClone = clone(props);
        propsClone.Children = changeCode(propsClone['$_children'])
        console.log('在线编译耗时=========>', new Date().valueOf() - date);
        return omit(propsClone, ['$_actions', '$_children'])
      }
      return props
    }, [props]);
    return (
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <div style={ isTrue? {} : {width: '100%'}} ref={(ref: HTMLDivElement) => connect(drag(ref))}>
          <Component {...newProps} />
        </div>
      </ErrorBoundary>
    )
  }
}
