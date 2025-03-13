import { jsx as _jsx } from "react/jsx-runtime";
//@ts-nocheck
import React from 'react';
import * as antd from 'antd';
import { transform } from '@babel/standalone';
import { SlotEmpty } from '../basic-component/empty';
import { isEqual } from 'lodash-es';
export function transformCode(source) {
    return transform(source, {
        presets: ['react', 'es2015']
    }).code;
}
export function changeCode(transformedSource) {
    try {
        const exports = {};
        function require(name) {
            console.log(40, name);
            if (name == 'react')
                return React;
            if (name == 'antd')
                return antd;
            else
                throw `You can't use modules other than "react" in remote component.`;
        }
        eval(transformedSource);
        const result = exports.__esModule ? exports.default : exports;
        if (isEqual(result, {})) {
            throw new Error('组件有问题，检查下是否正确');
        }
        else {
            return result;
        }
        // return exports.__esModule ? exports.default : exports
    }
    catch (err) {
        return () => _jsx(SlotEmpty, { borderColor: '#f00', children: '\u7EC4\u4EF6\u6709\u95EE\u9898\uFF0C\u68C0\u67E5\u4E0B\u4EE3\u7801\u662F\u5426\u6B63\u786E' });
    }
}
