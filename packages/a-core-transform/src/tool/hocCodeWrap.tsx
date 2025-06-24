import { useNode, UserComponent } from "@craftjs/core";
import { ErrorBoundary } from "react-error-boundary";
import {useMemo} from 'react';
import {isUndefined, noop, omit} from 'lodash';
import {changeCode} from '../tool/changeCode';

const ChangeComponent = ({useFunc = noop, useFormConfig = noop, diyUseStyle = noop, Component, ...restProps} : { Component: any; diyUseStyle?:any; useFunc?: any; useFormConfig?:any}) => {
  const callback = useFunc();
  const formConfig = useFormConfig();
  const { styles } = diyUseStyle() || { styles: ''};
  return (
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
        <div
            className={styles.diyClassName}
            style={{...(callback ? {cursor: "pointer"} : {})}}
            {...(callback ? {onClick: callback} : {})}
        >
          <Component {...restProps} {...(formConfig? {formConfig} : {})}/>
        </div>
      </ErrorBoundary>
  )
}

export const HOCCodeWrapComponent = (Component: any, isTrue?: boolean): UserComponent => {
  return (props: any) => {
    const {
      connectors: {connect, drag},
    } = useNode();
    const newProps = useMemo(() => {
      const date = new Date().valueOf();
      let stashProps = props;
      let diyUseStyle = {};
      let useFunc = {};
      let useFormConfig = {};
      let transformDataConfig = {};
      let Children = {};
      if (!isUndefined(stashProps.$$_style)) {
        const v = changeCode(stashProps['$$_style']);
        const func = v.exports.default;
        diyUseStyle = func ? {diyUseStyle: func} : {};
      }
      if (!isUndefined(props.$$_actions)) {
        const v = changeCode(props['$$_actions']);
        const func = v.exports.default;
        useFunc = func ? {useFunc: func} : {};
      }

      if (!isUndefined(props.$$_formConfig1)) {
        const v = changeCode(props['$$_formConfig1']);
        const func = v.exports.default;
        useFormConfig = func ? {useFormConfig: func} : {};
      }

      if (!isUndefined(props.$$_transform)) {
        const v = changeCode(props['$$_transform']);
        const data = v.exports.default;
        transformDataConfig = data ? {transformDataConfig: data} : {};
      }

      if (!isUndefined(props.$$_children)) {
        const v = changeCode(props['$$_children']);
        const children = v.exports.default;
        Children = children ? {Children: children} : {};
      }

      console.log('在线编译耗时=========>', new Date().valueOf() - date);

      return { ...Children, ...useFormConfig, ...transformDataConfig, ...useFunc, ...diyUseStyle, ...omit(props, ['$$_style', '$_style', '$$_formConfig1', '$_formConfig1',  '$$_actions','$_actions', '$$_transform', '$_transform'])}
    }, [props]);

    return (
      <ErrorBoundary fallback={<div>Something went wrong</div>}>
          <div ref={(ref: HTMLDivElement) => connect(drag(ref))} style={isTrue ? {width: '100%'} : {}}>
            <ChangeComponent Component={Component} {...newProps}/>
          </div>
      </ErrorBoundary>
    )
  }
}
