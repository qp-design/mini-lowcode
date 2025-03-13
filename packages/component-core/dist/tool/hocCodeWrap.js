import { jsx as _jsx } from "react/jsx-runtime";
import { useNode } from "@craftjs/core";
import { ErrorBoundary } from "react-error-boundary";
import { useMemo } from 'react';
import { clone, has, omit } from 'lodash-es';
import { changeCode } from '../tool/changeCode';
export const HOCCodeWrapComponent = (Component) => {
    return (props) => {
        const { connectors: { connect, drag }, } = useNode();
        const newProps = useMemo(() => {
            if (has(props, '$_children')) {
                const date = new Date().valueOf();
                const propsClone = clone(props);
                propsClone.Children = changeCode(propsClone['$_children']);
                console.log('在线编译耗时=========>', new Date().valueOf() - date);
                return omit(propsClone, ['$_actions', '$_children']);
            }
            return props;
        }, [props]);
        return (_jsx(ErrorBoundary, { fallback: _jsx("div", { children: "Something went wrong" }), children: _jsx(Component, Object.assign({}, newProps, { ref: (ref) => connect(drag(ref)) })) }));
    };
};
