import { memo, useMemo } from 'react';
import { Tabs } from 'antd';
import BaseLink from './components/baseLink';
import GoodsClassifyLink from './components/goodsClassifyLink';
import GoodsList from './components/goodsList';
import GoodsLink from './components/goodsLink';
import ArticleDetail from './components/articleDetail';

const LinkContentJsx = ({ result, handleChoose, charArr }: any) => {
  const tabItems = useMemo(
    () => [
      {
        label: `功能页`,
        key: `1`,
        children: <BaseLink result={result} handleChoose={handleChoose} />
      },
      {
        label: `商品分类`,
        key: `2`,
        children: (
          <GoodsClassifyLink result={result} handleChoose={handleChoose} />
        )
      },
      {
        label: `商品列表`,
        key: `3`,
        children: <GoodsList result={result} handleChoose={handleChoose} />
      },
      {
        label: `商品详情`,
        key: `4`,
        children: <GoodsLink handleChoose={handleChoose} charArr={charArr} />
      },
      {
        label: `文章详情`,
        key: `5`,
        children: (
          <ArticleDetail handleChoose={handleChoose} charArr={charArr} />
        )
      }
    ],
    [result]
  );

  return <Tabs items={tabItems} />;
};

export const LinkContent = memo(LinkContentJsx);
