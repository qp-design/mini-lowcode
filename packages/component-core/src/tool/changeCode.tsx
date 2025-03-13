//@ts-nocheck
import React from 'react';
import * as antd from 'antd';
import { transform } from '@babel/standalone';
import {SlotEmpty} from '../basic-component/empty';
import {isEqual} from 'lodash-es';

export function transformCode(source:string) {
  return transform(source, {
    presets: ['react', 'es2015']
  }).code;
}

export function changeCode(transformedSource: string) {
  try {
    const exports = {};
    function require(name: string){
      console.log(40, name);
      if(name == 'react') return React
      if(name == 'antd') return antd
      else throw `You can't use modules other than "react" in remote component.`
    }
    eval(transformedSource)

    const result = exports.__esModule ? exports.default : exports;
    if(isEqual(result, {})) {
     throw new Error('组件有问题，检查下是否正确');
    } else {
      return result;
    }
    // return exports.__esModule ? exports.default : exports
  } catch (err) {
    return () => <SlotEmpty borderColor='#f00' children='组件有问题，检查下代码是否正确'/>
  }

}
