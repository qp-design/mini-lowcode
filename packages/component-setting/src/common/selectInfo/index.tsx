import { Input, Form } from 'antd';
const FormItem = Form.Item;

const SelectInfo = ({ place = '请选择标题', name }: any) => {
  return (
    <div className={'selectInfo'}>
      <FormItem name={name}>
        <Input placeholder={place} maxLength={20} />
      </FormItem>
    </div>
  );
};

export default SelectInfo;
