import { useComponent } from '@brushes/simulate-component-mini';
import { useState } from 'react';

export default function SwitchField({
  value = '',
  ...extraProps
}: {
  value?: string;
  [v: string]: any;
}) {
  const { onChange } = extraProps;
  const [inValue, setValue] = useState(value);
  const { Switch } = useComponent();

  const changeImpl = (e: any) => {
    onChange(e.detail.value);
    setValue(e.detail.value);
  };

  return <Switch checked={inValue} {...extraProps} onChange={changeImpl} />;
}
