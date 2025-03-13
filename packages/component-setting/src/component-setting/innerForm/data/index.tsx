//@ts-nocheck
import {useEffect, useRef, useState} from 'react';
import TableJsx from '../../table/data/table';
import {FormInstance} from '@brushes/form';
import { Add } from '../../../common/add';

/**
 * @param {param} store里面数据的对应key
 * @param {initialValue} Form表单列默认数据
 * @param {title} column的name
 * @param {id} column的key
 * @param {onChange} Form改变数据方法
 */
interface WrapTableType<T> {
  param: string;
  initialValue: Array<T>;
  title: string;
  id: string;
  onChange: (e: any) => void
}
export const WrapTable = <T extends object>({onChange, title, id, initialValue}:
                                              WrapTableType<T>) => {
  const isFirst = useRef(true);
  const [column, setColumn] = useState<T>(initialValue);

  useEffect(() => {
    if(isFirst.current && initialValue) {
      setColumn(initialValue)
    }
    return () => {
      isFirst.current = false;
    }
  }, []);

  return (
    <>
      <Add<T> setColumn={setColumn}/>
      <TableJsx<T> column={column} onChange={onChange} title={title} id={id}/>
    </>
  )
}
