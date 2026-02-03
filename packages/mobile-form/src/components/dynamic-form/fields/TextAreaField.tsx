import {useComponent} from "@brushes/simulate-component-mini";

export default function TextAreaField({ ...extraProps }) {
  const { TextArea } = useComponent()
  return <TextArea {...extraProps} />;
}
