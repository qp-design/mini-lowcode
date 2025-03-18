//@ts-nocheck
import { useArticleDetail } from '../hooks';
import { Table } from 'antd';

const ArticleDetail = ({ handleChoose, charArr }: any) => {
  const { list, total, loading, onChange, columns } = useArticleDetail({
    handleChoose
  });

  return (
    <>
      <Table
        rowSelection={{
          type: 'radio',
          onChange,
          selectedRowKeys: charArr ? [charArr] : []
        }}
        loading={loading}
        dataSource={list}
        rowKey={'doclistId'}
        columns={columns.current}
      />
    </>
  );
};

export default ArticleDetail;
