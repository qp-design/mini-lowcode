import { Button, FormInstance, Space, message } from 'antd';
import { PictureJsx } from './picture';
import React, { useRef } from 'react';
import { NamePath } from '@brushes/form';
import { isEmpty } from 'lodash-es';

interface Props {
  name: NamePath;
  handleCancel: () => void;
  form: FormInstance;
  onChange?: (e:any) => void
}

const TabsPic: React.FC<Props> = ({ handleCancel, onChange, name, form, ...props }) => {
  const defaultValue = form.getFieldValue(name);
  const ref = useRef<Array<string | number>>([]);

  const onValueChange = (selectedRowKeys: any) => {
    ref.current = selectedRowKeys.target.value;
  };

  const saveImpl = () => {
    form.setFieldValue(name, ref.current);
    onChange?.(ref.current);
    const values = form.getFieldsValue();
    const { selectImg = [] } = values;
    const noEmpty = selectImg.some((item: any) => isEmpty(item.imgUrl));
    if (noEmpty) {
      message.error('有的图片未上传');
      return;
    }
    handleCancel();
  };

  return (
    <>
      <PictureJsx
        name={name}
        onValueChange={onValueChange}
        defaultValue={defaultValue}
      />
      <div style={{ textAlign: 'right', marginTop: 20, paddingBottom: 10 }}>
        <Space align={'end'}>
          <Button onClick={handleCancel}>取消</Button>
          <Button type="primary" onClick={saveImpl}>
            保存
          </Button>
        </Space>
      </div>
    </>
  );
};

export default TabsPic;
