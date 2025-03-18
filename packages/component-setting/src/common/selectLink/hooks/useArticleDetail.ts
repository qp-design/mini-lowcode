import { useEffect, useRef, useState } from 'react';
import { queryDoclistPage } from 'qj-b2c-api';
import { articleDetail } from '../config/routerPath';
import dayjs from 'dayjs';

export const useArticleDetail = ({ handleChoose }: any) => {
  const [list, setList] = useState([]);
  const [page, ] = useState(1);
  const [total, setTotal] = useState(0);
  const pageSize = useRef(6);
  const [loading, setLoading] = useState(false);
  const columns = useRef([
    {
      title: '文章标题',
      dataIndex: 'doclistTitle',
      key: 'doclistTitle'
    },
    {
      title: '作者',
      dataIndex: 'doclistTitle4',
      key: 'doclistTitle4'
    },
    {
      title: '发布时间',
      dataIndex: 'gmtCreate',
      key: 'gmtCreate',
      render: (text: number) => {
        return dayjs(text).format('YYYY-MM-DD HH:mm:ss');
      }
    },
    {
      title: '更新时间',
      dataIndex: 'gmtModified',
      key: 'gmtModified',
      render: (text: number) => {
        return dayjs(text).format('YYYY-MM-DD HH:mm:ss');
      }
    }
  ]);

  useEffect(() => {
    (async () => {
      await getData();
    })();
  }, []);

  const getData = async () => {
    setLoading(true);
    try {
      const result = await queryDoclistPage({
        page,
        rows: pageSize.current
      });
      setList(result.list);
      setTotal(result.total);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  const onChange = (arr: any, item: any) => {
    const doclistId = item[0]['doclistId'];
    handleChoose(
      {
        label: '文章详情',
        value: articleDetail,
        params: {
          doclistId
        }
      },
      doclistId
    );
  };

  return {
    list,
    total,
    loading,
    columns,
    onChange
  };
};
