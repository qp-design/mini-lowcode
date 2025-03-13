//@ts-nocheck
import {Button, Modal} from 'antd';
import {memo, useEffect, useRef, useState} from 'react';
import TableJsx from './table';
import {DynamicForm, FieldType, submitType, FormInstance} from '@brushes/form';
import {store} from '../../../store';
import { Add } from '../../../common/add';

/**
 * @param {param} store里面数据的对应key
 * @param {activeModule} Form改变此列的值
 * @param {initialValue} Form表单列默认数据
 * @param {title} column的name
 * @param {id} column的key
 * @param {onChange} Form改变数据方法
 */
interface WrapTableType<T> {
  param: string;
  activeModule: string;
  initialValue: Array<T>;
  title: string;
  id: string;
  onChange: (e: any) => void
}
export const WrapTable = <T extends object>({activeModule, onChange, param, title, id, initialValue}:
                                              WrapTableType<T>) => {

  const isFirst = useRef(true);
  const [column, setColumn] = useState<T>(initialValue);

  useEffect(() => {
    if(isFirst.current && initialValue) {
      setColumn(initialValue)
    } else {
      const obj = store[activeModule];
      setColumn(obj[param])
    }
    console.log(74, '第一次', isFirst.current, activeModule, initialValue);
    return () => {
      console.log('====', isFirst.current)
      isFirst.current = false;
    }
  }, [activeModule]);

  console.log('column', column);
  return (
    <>
      <Add<T> setColumn={setColumn}/>
      <TableJsx<T> column={column} onChange={onChange} title={title} id={id}/>
    </>
  )
}
