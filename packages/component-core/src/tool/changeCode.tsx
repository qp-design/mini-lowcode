//@ts-nocheck
import React from 'react';
import dayjs from 'dayjs';
import * as antd from 'antd';
import * as componentTool from '@brushes/component-tool';
import * as reactRouterDom from 'react-router-dom';
import * as componentCore from '@brushes/component-core'
import * as componentStore from 'component-store'
import * as lodash2 from 'lodash-es'
import * as request from '@brushes/request'
import * as antdStyle from 'antd-style'
// import {transform} from '@babel/standalone';
import { transform } from "sucrase";

import {SlotEmpty} from '../basic-component/empty';

export function transformCode(source: string) {
    // const data = transform(source, {
    //     presets: ['react', 'es2015', 'typescript'],
    // });
    // console.log(22, data);
    // return data.code;
    return transform(source, {
        transforms: ["typescript", "imports", "jsx"],
    }).code;
}

export function changeCode(code: string) {
    try {
        // 实现module函数，用来套动态执行的函数结果
        const module = {
            exports: {
                __esModule: false,
                default: null as unknown,
            },
        };

        // 实现一个require方法，用于模块执行时挂载依赖
        const require = (packageName: string) => {
            if (packageName == '@brushes/component-core') return componentCore;
            if (packageName == 'react-router-dom') return reactRouterDom;
            if (packageName == 'react') return React;
            if(packageName == 'component-store') return componentStore;
            if (packageName == '@brushes/component-tool') return componentTool;
            if (packageName == 'lodash-es') return lodash2;
            if (packageName == '@brushes/request') return request;
            if (packageName == 'antd') return antd;
            if (packageName == 'dayjs') return dayjs;
            if (packageName == 'antd-style') return antdStyle;

            throw new Error('该包目前无法转化,需要扩展');
            // if (dependencies[packageName]) {
            //   return dependencies[packageName];
            // }
        };
        // 动态执行
        Function("require, exports, module", code)(require, module.exports, module);
        return module;
    } catch (err) {
        return () => <SlotEmpty borderColor='#f00' children='组件有问题，检查下代码是否正确'/>
    }
}

/**
 *
 * @param code cjs代码
 * @param dependencies 模块依赖
 */
export const compileModuleResolve = (
    code: string,
    dependencies: Record<string, any> = {}
) => {
    // 实现module函数，用来套动态执行的函数结果
    const module: ESMoudleType = {
        exports: {
            __esModule: false,
            default: null as unknown,
        },
    };

    // 实现一个require方法，用于模块执行时挂载依赖
    const require = (packageName: string) => {
        if (dependencies[packageName]) {
            return dependencies[packageName];
        }
    };
    // 动态执行
    Function("require, exports, module", code)(require, module.exports, module);
    return module;
};


/**
 * sucrase 编译器
 * @param code 需要编译的代码,
 */
export const sucraseTransformCode = async (code: string): Promise<string> => {
    return new Promise((resolve, reject) => {
        try {
            // 编译成功的代码，不需要sourceMap
            const buildProduct = transform(code, {
                transforms: ["typescript", "imports", "jsx"],
            }).code;
            resolve(buildProduct);
        } catch (error) {
            // 编译失败
            reject(error);
        }
    });
};
