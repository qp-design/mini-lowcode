import {dynamicFormFields, FieldType} from '@brushes/form';
import {HOCCodeWrapComponent} from '@brushes/component-core';
import React, {ForwardedRef, useMemo} from 'react';
import {Form, Button} from 'antd';
import {useStore} from 'component-store';
import {Element} from '@craftjs/core';
import {InnerFormComponent} from '../innerForm';

type FormType = {
  background: string;
  formConfig: FieldType[];
  padding: number;
  grid: number;
  layout: 'horizontal' | 'vertical' | 'inline'
}

const ComponentJsx = React.forwardRef((
  {layout, grid, background, padding, formConfig}: FormType, ref: ForwardedRef<HTMLDivElement>) => {
  const [form] = Form.useForm();
  const [, setParams] = useStore(state => state['params']);

  const newFormConfig = useMemo(() => {
    return formConfig.map(item => {
      const { type } = item;
      console.log(25, item);
      if(type === 'slot') {
        return {
          ...item,
          // shouldUpdate: (prevValues: any, curValues: any) => prevValues['skuNo'] !== curValues['skuNo'],
          render() {
            return (
              <Element
                canvas
                id={'react_context'}
                custom={{form}}
                is={InnerFormComponent}
              >
              </Element>
            )
          }
        };
      }
      return item
    })
  }, [formConfig]);

  console.log(44, newFormConfig, formConfig);
  const onSubmit = async (values: object) => {
    setParams({
      params: values
    });
  }


  return (
    <div ref={ref} style={{background, padding}}>
      <Form form={form} layout={layout} onFinish={onSubmit}>
        <div style={{
          display: 'grid',
          gridColumnGap: layout === 'vertical' ? 10 : 0,
          gridTemplateColumns: `repeat(${grid}, 1fr)`
        }}>
          {
            dynamicFormFields(newFormConfig, form)
          }
        </div>
        <Button type="primary" htmlType="submit">
          查询
        </Button>
      </Form>
    </div>
  )
})

export const FormComponent = HOCCodeWrapComponent(ComponentJsx)


