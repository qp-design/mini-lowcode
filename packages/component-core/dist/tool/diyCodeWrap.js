import { jsx as _jsx } from "react/jsx-runtime";
import { useNode } from "@craftjs/core";
import { ErrorBoundary } from "react-error-boundary";
import { useApplicationContext } from '../context';
import { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { transform } from '@babel/standalone';
export const DiyCodeWrapComponent = (Component) => {
    return (props) => {
        const { connectors: { connect, drag }, } = useNode();
        const record = useApplicationContext();
        useEffect(() => {
            const code = transform(`
    function DiyComponent() {
    return (
        <> 
        <h1>title</h1>   
        <div>123</div>
        </>
    )
}`, {
                presets: ['react']
            }).code;
            console.log(26, new Function(`
      return ${code}
    `)()());
            console.log(34, dom.current);
            ReactDOM.createRoot(dom.current).render(new Function(`return ${code}`)()());
        }, []);
        // console.log(16, props);
        // const newProps = useMemo(() => {
        //   // console.log(15, props);
        //   // return createElement('div', {}, '<span>1</span><span>2</span>')
        //   const propsClone = clone(props);
        //   if (has(propsClone, '$_actions')) {
        //     const code = transform(propsClone.$_actions, {
        //       presets: ['react']
        //     }).code;
        //
        //     propsClone.children = React.cloneElement(new Function(`return ${code}`)())
        //   }
        //   return omit(propsClone, '$_actions')
        // }, [props, record]);
        // console.log(25, newProps);
        return (_jsx(ErrorBoundary, { fallback: _jsx("div", { children: "Something went wrong" }), children: _jsx(Component, Object.assign({ record: record }, props, { ref: (ref) => connect(drag(ref)) })) }));
    };
};
