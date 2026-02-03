import {useComponent} from "@brushes/simulate-component-mini";

type emums = 'vertical' | 'horizontal';
export default function RadioGroupField({
  options = [],
  optionsName = 'label',
  optionsKey = 'value',
  direction = 'horizontal',
  ...extraProps
}: {
  direction?: emums;
  options?: Array<any>;
  optionsName?: string | undefined;
  optionsKey?: string | undefined;
}) {
  const { Radio } = useComponent()
  return (
    <Radio.Group {...extraProps} direction={direction}>
        {options.map((restItem, idx) => (
            <Radio value={restItem[optionsKey]}>{restItem[optionsName]}</Radio>
        ))}
    </Radio.Group>
  );
}
