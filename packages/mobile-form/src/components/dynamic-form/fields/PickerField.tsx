import { useComponent } from '@brushes/simulate-component-mini';
import { useMemo, useState } from 'react';
import {
  PickerOptions,
  PickerValue,
  PickerOption,
  FormInstance
} from '@nutui/nutui-react-taro';
import { NamePath } from '@/components';

const PickField = ({
  options = [],
  form,
  placeholder = '请选择',
  value = '',
  name,
  disabled,
  onChange = (e: any) => {}
}: {
  name: NamePath;
  form: FormInstance;
  placeholder?: string;
  options?: Array<{ label: string; value: string }>;
  value?: string;
  disabled?: boolean;
  onChange?: (e: any) => void;
}) => {
  // const [baseDesc, setBaseDesc] = useState('')
  const baseValue = form.getFieldValue(name);
  const [visible, setVisible] = useState(false);
  const { View, Cell, Picker } = useComponent();

  const baseDesc = useMemo(() => {
    const { label = placeholder } =
      options.find((item: any) => item.value === value) || {};
    return label;
  }, [baseValue, options]);

  const confirmPicker = (
    selectedOptions: PickerOptions,
    selectedValue: PickerValue[]
  ) => {
    console.log('confirmPicker', selectedOptions, selectedValue);
    let description = '';
    selectedOptions.forEach((option: PickerOption) => {
      description += ` ${option.label}`;
    });
    // setBaseDesc(description)
    onChange(selectedValue[0]);
  };

  return (
    <View className={'pickWrap'}>
      <Cell
        style={{
          '--nutui-cell-padding': 0
        }}
        title="请选择城市"
        description={baseDesc}
        onClick={() => setVisible(!visible)}
      />
      <Picker
        onConfirm={confirmPicker}
        onClose={() => setVisible(false)}
        visible={visible}
        className={disabled ? 'disabled' : ''}
        disabled={disabled}
        options={[options]}
      />
    </View>
  );
};
export default PickField;
