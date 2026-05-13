import { useComponent } from '@brushes/simulate-component-mini';

export default function CheckboxField({ ...extraProps }) {
  const { Checkbox } = useComponent();
  return <Checkbox {...extraProps} />;
}
