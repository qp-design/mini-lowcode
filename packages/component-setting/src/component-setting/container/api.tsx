import React, { useState, useRef } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Divider, Input, Select, Space, Button } from 'antd';
import type { InputRef } from 'antd';

let index = 0;

const ApiComponent = ({onChange, value}: {onChange: (e: any) => void; value: string}) => {
  const [items, setItems] = useState([
    {
      api: 'web/oc/contract/queryOcContractPageForRetailer.json?childFlag=true',
      name: 'b2b订单查询'
    },
    {
      api: 'web/rs/resourceBase/queryRsSkuPageForRetGoods.json',
      name: 'b2b商品查询'
    }
  ]);
  const [name, setName] = useState('');

  const inputRef = useRef<InputRef>(null);

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const addItem = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    e.preventDefault();
    setItems([...items, {
      name: name || `New item ${index++}`,
      api: name || `New item ${index++}`
    }]);
    setName('');
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  return (
    <Select
      value={value}
      onChange={onChange}
      style={{ marginBottom: 20 }}
      placeholder="选择数据源"
      popupRender={(menu) => (
        <>
          {menu}
          <Divider style={{ margin: '8px 0' }} />
          <Space style={{ padding: '0 8px 4px' }}>
            <Input
              placeholder="Please enter item"
              ref={inputRef}
              value={value}
              onChange={onNameChange}
              onKeyDown={(e) => e.stopPropagation()}
            />
            <Button type="text" icon={<PlusOutlined />} onClick={addItem}>
              Add item
            </Button>
          </Space>
        </>
      )}
      options={items.map((item) =>
        ({ label: item.name, value: item.api }))}
    />
  );
};

export default ApiComponent;
