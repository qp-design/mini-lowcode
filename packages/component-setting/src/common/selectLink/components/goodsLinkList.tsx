import { Table, Form, Input, Button } from 'antd';
import { useGoodsLink } from '../hooks';

const GoodsLinkList = ({ handleChoose, charArr }: any) => {
  const {
    data,
    columns,
    total,
    pageSize,
    changePage,
    loading,
    onChange,
    onFinish
  } = useGoodsLink({ handleChoose });

  return (
    <>
      <Form
        layout="inline"
        onFinish={onFinish}
        style={{ marginBottom: '20px' }}
      >
        <Form.Item label="搜索商品" name="goods">
          <Input allowClear />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            搜索
          </Button>
        </Form.Item>
      </Form>
      <Table
        rowSelection={{
          type: 'radio',
          onChange,
          selectedRowKeys: charArr ? [charArr] : []
        }}
        loading={loading}
        dataSource={data}
        columns={columns.current}
        rowKey={'spuCode'}
        pagination={{
          defaultPageSize: pageSize.current,
          total,
          onChange: changePage
        }}
      />
    </>
  );
};

export default GoodsLinkList;
