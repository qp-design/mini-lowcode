import { useEffect, useRef, useState } from 'react';
import { goodsQuery } from 'qj-b2c-api';
import { goodsDetailLink } from '../config/routerPath';

export const useGoodsLink = ({ handleChoose }: any) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = useRef(6);
  const [loading, setLoading] = useState(false);
  const columns = useRef([
    {
      title: '名称',
      dataIndex: 'goodsShowname'
    },
    {
      title: '分类',
      dataIndex: 'classtreeName'
    },
    {
      title: '编号',
      dataIndex: 'goodsShowno'
    },
    {
      title: '价格',
      dataIndex: 'pricesetNprice'
    },
    {
      title: '库存',
      dataIndex: 'goodsSupplynum'
    }
  ]);

  useEffect(() => {
    (async () => {
      await getData();
    })();
  }, [page]);

  const getData = async (val?: string) => {
    setLoading(true);
    try {
      const result = await goodsQuery({
        rows: pageSize.current,
        page,
        goodsType: '00',
        dataOpbillstate: 1,
        goodsName: val,
        children: true // 无意义 就是为了拿到skuCode
      });
      setData(result.list);
      setTotal(result.total);
    } catch (err) {
      throw new Error();
    } finally {
      setLoading(false);
    }
  };

  const changePage = (pageNum: number) => {
    setPage(pageNum);
  };

  const onChange = (key: any, item: any) => {
    const skuCode = item[0]['skuList'][0]['skuCode'];
    handleChoose(
      {
        label: '商品详情',
        value: goodsDetailLink,
        params: {
          skuCode,
          spuCode: item[0]['spuCode']
        }
      },
      item[0]['spuCode']
    );
  };

  const onFinish = (val: any) => {
    (async () => {
      await getData(val.goods);
    })();
  };

  return {
    data,
    setData,
    columns,
    page,
    total,
    pageSize,
    changePage,
    loading,
    onChange,
    onFinish
  };
};
