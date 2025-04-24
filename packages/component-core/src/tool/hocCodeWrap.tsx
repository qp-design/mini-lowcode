import { useNode, UserComponent } from "@craftjs/core";
import { ErrorBoundary } from "react-error-boundary";
import {useMemo} from 'react';
import {has, noop, omit} from 'lodash-es';
import {changeCode} from '../tool/changeCode';

const ChangeComponent = ({useFunc = noop, Component, ...restProps} : { Component: any; useFunc?: any}) => {
  const callback = useFunc();
  return (
      <div
          style={{...(callback ? {cursor: "pointer"} : {})}}
          { ...(callback ? { onClick: callback } : {}) }
      >
        <Component {...restProps }/>
      </div>
  )
}

export const HOCCodeWrapComponent = (Component: any, isTrue?: boolean) : UserComponent => {
  return (props:any) => {
    const {
      connectors: { connect, drag },
    } = useNode();

    const newProps = useMemo(() => {
      if (has(props, '$$_actions')) {
        const date = new Date().valueOf();
        const v = changeCode(props['$$_actions']);
        console.log('在线编译耗时=========>', new Date().valueOf() - date);
        const func = v.exports.default;
        return { ...(func ? {useFunc: func} : {}), ...omit(props, ['$$_actions', '$_actions']) }
      }

      if (has(props, '$$_children')) {
        const date = new Date().valueOf();
        const v = changeCode(props['$$_children']);
        console.log('在线编译耗时=========>', new Date().valueOf() - date);
        return { Children: v.exports.default }
      }

      return props
    }, [props]);
    // console.log(24, newProps);
    return (
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <div ref={(ref: HTMLDivElement) => connect(drag(ref))} style={isTrue ? {width: '100%'} : {}}>
            <ChangeComponent Component={Component} {...newProps}/>
          </div>
      </ErrorBoundary>
    )
  }
}
