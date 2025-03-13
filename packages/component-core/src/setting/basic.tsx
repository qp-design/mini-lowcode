import {Card, Form} from "antd";
import {Fragment} from 'react';
import { dynamicFormFields, useImmutableCallback } from '@brushes/form';
import { useNode } from '@craftjs/core';
import type {FieldType} from '@brushes/form';
import {transformCode} from '../tool';

export type formConfigType = {
  title?: string;
  formFields: FieldType[];
};

export const basicSettings = (formFields: formConfigType[]) => {
  return () => {
    const [form] = Form.useForm();
    const {
      configProps,
      actions: { setProp },
    } = useNode((node) => ({
      configProps: node.data.props,
    }));

    const callbackImpl = useImmutableCallback((changedValues: any) => {
      console.log(23, changedValues);
      if(changedValues.hasOwnProperty('&_slot')) {

      }
      setProp((props: object) => {
        Object.entries(changedValues).forEach(([key, value], index) => {
          if(/^\$_/.test(key)) {
            value = transformCode(value as string)
          }
          // @ts-ignore
          props[key] = value
        })
      }, 500);

      // setProp((props: object) => {}, 500);
    });

    return (
      <Form form={form} onValuesChange={callbackImpl} initialValues={configProps}>
        {formFields.map((item: formConfigType, indx: number) => {
          return (
            <Fragment key={indx}>
              {item.title ? (
                <Card
                  size="small"
                  style={{marginBottom: 10}}
                  title={item.title}
                  bodyStyle={{paddingBottom: 0}}
                >
                  {dynamicFormFields(item.formFields, form)}
                </Card>
              ) : (
                dynamicFormFields(item.formFields, form)
              )}
            </Fragment>
          );
        })}
      </Form>
    );
  };
}


