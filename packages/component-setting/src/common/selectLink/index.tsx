import { Button, FormInstance } from 'antd';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Modal } from 'antd';
import { LinkContent } from './linkContent';
import { goodsDetailLink, articleDetail } from './config/routerPath';
import { NamePath } from '@brushes/form';

interface LinkType {
  name: NamePath;
  onChange?: (value: any) => void;
  parentName?: Array<any>;
  type?: string; // 是否独立使用
  form: FormInstance;
  callback?: () => void;
}

export interface resultDataType {
  label: string;
  value: string;
  params?: Object;
}

export const SelectLink: React.FC<LinkType> = ({
  onChange,
  form,
  type = '',
  name,
  parentName = []
}) => {
  const computedName = useMemo(
    () => parentName.concat(name),
    [parentName, name]
  );

  const [modalShow, setModalShow] = useState(false);
  const [result, setResult] = useState<resultDataType | null>(null);
  const [charArr, setCharArr] = useState<Array<any> | undefined>([]); // 商品详情的选中项
  const chosen = useRef<resultDataType | null>(
    form.getFieldValue(parentName.concat(name))
  );

  useEffect(() => {
    const defaultVal = form.getFieldValue(['selectImg', '0', 'link']);
    setResult(defaultVal);

    if (defaultVal?.value === goodsDetailLink) {
      setCharArr(defaultVal.params.spuCode);
    } else if (defaultVal?.value === articleDetail) {
      setCharArr(defaultVal.params.doclistId);
    }
  }, []);

  const chooseResult = () => {
    chosen.current = result;
    setModalShow(false);
    onChange?.(chosen.current);
    console.log('link', computedName);
    form.setFieldValue(computedName, chosen.current);
  };

  const handleChoose = (item: resultDataType, charArrVal?: Array<any>) => {
    setCharArr(charArrVal);
    setResult(item);
  };

  return (
    <>
      {chosen.current ? (
        <div className={`handle ${type === 'alone' ? 'alone' : ''}`}>
          <span>{chosen.current?.label}</span>
          <Button type="link" onClick={() => setModalShow(true)}>
            修改
          </Button>
        </div>
      ) : (
        <Button
          type="link"
          onClick={() => setModalShow(true)}
          className={'init'}
        >
          请选择对应链接
        </Button>
      )}
      <Modal
        title={'选择链接'}
        open={modalShow}
        onCancel={() => setModalShow(false)}
        width={800}
        onOk={chooseResult}
        okText={'确认'}
        cancelText={'取消'}
      >
        {result?.label}---{result?.value}---{JSON.stringify(result?.params)}
        <LinkContent
          result={result}
          handleChoose={handleChoose}
          charArr={charArr}
        />
      </Modal>
    </>
  );
};
