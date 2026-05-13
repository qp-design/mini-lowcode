import { useComponent } from '@brushes/simulate-component-mini';

export default function InputField({ ...extraProps }) {
  const { Input } = useComponent();
  return <Input {...extraProps} />;
}
