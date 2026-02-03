import { useComponent } from '@brushes/simulate-component-mini';

type emums = 'vertical' | 'horizontal';
export default function CheckboxGroupField({
  options = [],
  optionsName = 'label',
  optionsKey = 'value',
  description,
  direction = 'horizontal',
  ...extraProps
}: {
  direction?: emums;
  options?: Array<any>;
  description?: {
    key: string;
    func: Function;
  };
  optionsName?: string | undefined;
  optionsKey?: string | undefined;
}) {
  const { Checkbox } = useComponent();
  return (
    <Checkbox.Group {...extraProps} direction={direction}>
        {options.map((restItem, idx) => (
          <Checkbox key={idx} value={restItem[optionsKey]}>
            {restItem[optionsName]}
          </Checkbox>
        ))}
    </Checkbox.Group>
  );
}
