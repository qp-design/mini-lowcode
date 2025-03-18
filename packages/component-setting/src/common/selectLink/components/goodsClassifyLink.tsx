//@ts-nocheck
import React, { memo, useEffect, useState } from 'react';
import { queryGoodsClassTree } from 'qj-b2c-api';
import { Tree, Spin } from 'antd';
import { isEmpty } from 'lodash-es';
import { classifyLink, goodsListLink } from '../config/routerPath';

// const { isEmpty } = _;

interface ClassifyType {
  goodsClassCode: string;
  childList: Array<ClassifyType>;
  goodsClassParentcode: string;
  [v: string]: unknown;
}

const GoodsClassifyLinkJsx = ({ handleChoose, result }: any) => {
  const [navList, setNavList] = useState<Array<ClassifyType>>([]);

  useEffect(() => {
    (async () => {
      await getData();
    })();
  }, []);

  const getData = async () => {
    try {
      let commits = await queryGoodsClassTree();
      setNavList(commits || []);
    } catch (err) {
      console.log(err);
    }
  };

  const handleCheck = (val: any, event: any) => {
    const choseItem = event.selectedNodes[0];
    handlerImpl(choseItem);
  };

  const handlerImpl = ({
    goodsClassCode,
    childList,
    goodsClassParentcode
  }: ClassifyType) => {
    if (isEmpty(childList)) {
      toGoodsList(goodsClassCode);
    } else {
      const code =
        goodsClassParentcode === '-1' ? goodsClassCode : goodsClassParentcode;
      toClassify(code);
    }
  };

  const toClassify = (code: string) => {
    handleChoose({
      label: `商品分类`,
      value: classifyLink,
      params: {
        index: code
      }
    });
  };

  const toGoodsList = (code: string) => {
    handleChoose({
      label: `商品列表`,
      value: goodsListLink,
      params: {
        index: code
      }
    });
  };

  return (
    <div className={'treeWrap'}>
      {navList.length ? null : (
        <div className={'loadingWrap'}>
          <Spin size="default" spinning className={'loading'} />
        </div>
      )}

      <Tree
        showLine
        defaultExpandAll
        treeData={navList}
        onSelect={handleCheck}
        fieldNames={{
          title: 'goodsClassName',
          key: 'goodsClassId',
          children: 'childList'
        }}
      />
    </div>
  );
};

const GoodsClassifyLink = memo(GoodsClassifyLinkJsx);

export default GoodsClassifyLink;
