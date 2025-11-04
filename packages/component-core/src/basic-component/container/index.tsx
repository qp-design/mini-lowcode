import { ReactNode, useMemo } from 'react';
import { DefaultJsx } from '../default';
import { fullpath } from '../../tool';
import { createStyles } from 'antd-style';
import { useEditor, useNode } from '@craftjs/core';
import { ModuleProvider, useModuleContext, useModuleRootContext } from '../../store';
import { useSearchParams } from 'react-router-dom';
import { isEmpty, isUndefined, get } from 'lodash';

const useStyles = createStyles(({ token, css }) => {
  return {
    category: css`
      &:hover {
        box-shadow: 0 1px 5px 1px rgba(0, 0, 0, 0.1);
      }
    `,
    width_100: css`
      width: 100%;
    `
  };
});
export const Inner = ({ children, enabled, root, text }: { text?: string; root?: boolean; enabled: boolean; children: ReactNode }) => {
  return <>{children ? children : enabled ? <DefaultJsx text={text} root={root} /> : ''}</>;
};
export const IsShowContainer = ({
  moduleShowValue,
  rootKey = '',
  isRevert = false,
  children,
  routerIsShowValue,
  routerIsShow,
  moduleIsShow = '',
  padding,
  storeKey = '',
  margin
}: {
  isRevert?: boolean;
  routerIsShowValue?: string;
  rootKey?: string;
  moduleShowValue?: string;
  moduleIsShow?: string;
  routerIsShow?: string;
  storeKey: string;
  padding: object;
  margin: object;
  children?: ReactNode;
}) => {
  const store = useModuleContext((s) => s.moduleStore[storeKey]);
  const rootStore = useModuleRootContext((s) => s.rootStore[rootKey]);

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }));

  const {
    connectors: { connect, drag }
  } = useNode();

  let [searchParams] = useSearchParams();

  const nValue = useMemo(() => {
    if (storeKey && store) {
      if (typeof store[moduleIsShow] === 'number') {
        return get(store, moduleIsShow) + '';
      }
      return get(store, moduleIsShow);
    }
  }, [store, storeKey, moduleIsShow]);

  const rnValue = useMemo(() => {
    if (rootKey && rootStore) {
      if (typeof rootStore[moduleIsShow] === 'number') {
        return get(rootStore, moduleIsShow) + '';
      }
      return get(rootStore, moduleIsShow);
    }
  }, [rootStore, rootKey, moduleIsShow]);

  /**
   *  1: 路由是否包含
   *  2: 路由是否包含 值是否匹配
   *  3: store显示条件Key和value都为空， store是否为空
   *  4: store显示条件Key不为空 store显示条件value为空， store里面的key的值是否空
   *  5: store显示条件Key和store显示条件value都不为空， store里面的key的值和 显示条件value是否匹配
   *  6: 全局Store显示条件Key和value都为空， 全局Store是否为空
   *  7: 全局Store显示条件Key和显示条件value都不为空， 全局Store里面的key的值和 显示条件value是否匹配
   *  8: 全局store显示条件Key不为空 store显示条件value为空， 全局store里面的key的值是否空
   */
  const conditionType = useMemo(() => {
    const condition =
      (routerIsShow && searchParams.has(routerIsShow) && !routerIsShowValue) || // 1
      (routerIsShow && searchParams.has(routerIsShow) && routerIsShowValue && routerIsShowValue.split(',').includes(searchParams.get(routerIsShow) || '')) || // 2
      (storeKey && !moduleShowValue && !moduleIsShow && !isUndefined(store) && !isEmpty(store)) || // 3
      (moduleIsShow && storeKey && !moduleShowValue && !isUndefined(nValue) && !isEmpty(nValue)) || // 4
      (moduleShowValue && storeKey && moduleIsShow && moduleShowValue.split(',').includes(nValue + '')) || // 5
      (rootKey && !moduleShowValue && !moduleIsShow && !isUndefined(rootStore) && !isEmpty(rootStore)) || // 6
      (moduleIsShow && rootKey && !moduleShowValue && !isUndefined(rnValue) && !isEmpty(rnValue)) || // 7
      (moduleShowValue && rootKey && moduleIsShow && moduleShowValue.split(',').includes(rnValue + '')); // 8

    return isRevert ? !condition : condition;
  }, [searchParams, routerIsShow, routerIsShowValue, store, storeKey, moduleShowValue, moduleIsShow, nValue, rootKey, rootStore, rnValue]);

  if (conditionType || enabled) {
    return (
      <div
        style={{
          ...margin,
          ...padding
        }}
        ref={(ref: HTMLDivElement) => connect(drag(ref))}
      >
        <Inner enabled={enabled}>{children}</Inner>
      </div>
    );
  }
};

export const Container = ({ width, text, children, background, margin = {}, positionValue = {}, padding = {}, backgroundImage, position, $$_actions, $_actions, borderColor, ...props }: any) => {
  // @ts-ignore
  const { styles } = useStyles();
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }));
  //为了右边贴边位置特殊处理
  const positionNewValue = useMemo(() => {
    if (position === 'fixed' && positionValue.right === 0 && enabled) {
      return {
        ...positionValue,
        right: 412
      };
    }
    if (position === 'fixed' && positionValue.left === 0 && enabled) {
      return {
        ...positionValue,
        left: 172
      };
    }
    return positionValue;
  }, [positionValue, position]);
  const {
    connectors: { connect, drag }
  } = useNode();

  return (
    <div
      className={enabled ? styles.category : ''}
      ref={(ref: HTMLDivElement) => connect(drag(ref))}
      style={{
        ...margin,
        display: 'flex',
        boxSizing: 'border-box',
        position,
        border: `solid 1px ${borderColor}`,
        ...padding,
        ...props,
        ...positionNewValue,
        background: backgroundImage ? `url(${fullpath(backgroundImage)}) repeat-x center 0` : background,
        width: (width + '').includes('%') ? width : `${width}px`
      }}
    >
      <Inner text={text} enabled={enabled}>
        {children}
      </Inner>
    </div>
  );
};

export const OutContainerComponent = ({ width, api, params, children, background, padding = {}, backgroundImage, ...props }: any) => {
  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }));

  const {
    connectors: { connect, drag }
  } = useNode();

  const { styles } = useStyles();
  return (
    <div
      ref={(ref: HTMLDivElement) => connect(drag(ref))}
      className={enabled ? styles.category : ''}
      style={{
        margin: '0 auto',
        display: 'flex',
        boxSizing: 'border-box',
        ...padding,
        ...props,
        background: backgroundImage ? `url(${fullpath(backgroundImage)}) repeat-x center 0` : background,
        width: (width + '').includes('%') ? width : `${width}px`
      }}
    >
      <Inner enabled={enabled}>{children}</Inner>
    </div>
  );
};

export const OutContainer = (props: any) => {
  return (
    <ModuleProvider>
      <OutContainerComponent {...props} />
    </ModuleProvider>
  );
};
export const ContainerWrap = ({ width, background, children, backgroundImage, height, $$_style = '', $_style = '', ...props }: any) => {
  const {
    connectors: { connect, drag }
  } = useNode();

  const { enabled } = useEditor((state) => ({
    enabled: state.options.enabled
  }));
  return (
    <div
      {...props}
      ref={(ref: HTMLDivElement) => connect(drag(ref))}
      style={{
        width,
        paddingBottom: 5,
        background: backgroundImage ? `url(${fullpath(backgroundImage)}) repeat-x center 0` : background,
        minHeight: `calc(${height}vh - 110px)`
      }}
    >
      <Inner root={true} enabled={enabled}>
        {children}
      </Inner>
    </div>
  );
};
