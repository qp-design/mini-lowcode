import { useEffect, useState, memo, ReactNode } from 'react';
import {
  Action,
  FieldType,
  submitType,
  TransformType
} from '@/components/types';
import { dynamicFormFields } from '@/components/dynamicFormFields';
import { useFormImpl } from '@/components/hooks';
import {useComponent} from "@brushes/simulate-component-mini";
import { type FormInstance } from '@nutui/nutui-react-taro';

export interface FormAddProps {
  name?: string;
  footer?: ReactNode;
  initialValues?: { [v: string]: unknown };
  onSubmit: (...args: submitType) => void;
  fields: Array<FieldType>;
  transformSubmitDataConfig?: Array<TransformType>;
  otherAction?: Array<Action>;
}

const DynamicFormJsx = ({
  name = 'basic',
  footer,
  onSubmit,
  fields: defaultFields,
  transformSubmitDataConfig = [],
  otherAction = [],

  ...restFormConfig
}: FormAddProps) => {
  const { Form, Button } = useComponent();
  const [fields, setFormFields] = useState<Array<FieldType>>([]);
  const form = Form.useForm()[0];

  const { loading, onFinish, onFinishFailed } = useFormImpl(
    form,
    onSubmit,
    transformSubmitDataConfig
  );

  useEffect(() => {
    setFormFields(defaultFields);
  }, [defaultFields]);

  return (
    <Form
      footer={
        footer ? (
          footer
        ) : (
          <Button
            loading={loading}
            block
            nativeType="submit"
            color="primary"
            size="large"
          >
            提交
          </Button>
        )
      }
      {...{
        form,
        onFinish,
        onFinishFailed,
        name,
        ...restFormConfig
      }}
    >
      {dynamicFormFields(fields, form)}
    </Form>
  );
};

export const NoFormDynamic = memo(
  ({ fields, form }: { fields: Array<FieldType>; form: FormInstance }) => (
    <>{dynamicFormFields(fields, form)}</>
  )
);

export const DynamicForm = memo(DynamicFormJsx);

export * from './dynamicFormFields';
export * from './hooks/formHook';
export * from './types';
