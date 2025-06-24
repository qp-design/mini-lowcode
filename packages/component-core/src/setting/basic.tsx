import {Collapse, Form} from "antd";
import {Fragment} from 'react';
import { dynamicFormFields, useImmutableCallback } from '@brushes/form';
import { useNode } from '@craftjs/core';
import type {FieldType} from '@brushes/form';
import {isUndefined, debounce} from "lodash";
import {defaultStyle} from "@brushes/core-transform";
import Title from "./title";

export type formConfigType = {
  title?: string;
  formFields: FieldType[];
};

export type LayoutType = 'horizontal' | 'vertical' | 'inline';

export const basicSettings = (formFields: formConfigType[], layout?: LayoutType) => {
  return () => {
    const [form] = Form.useForm();
    const {
      configProps,
      actions: { setProp },
    } = useNode((node) => ({
      configProps: node.data.props,
    }));
    const isNeedOmit = (values: any) => {
      if(Array.isArray(values)) {
        return values.filter((v) => !isUndefined(v))
      }
      return values;
    }

    const isBreakChangeValue = (params: any) => {
      let obj = {};
      Reflect.ownKeys(params).forEach((key) => {
        Reflect.set(obj, key, isNeedOmit(Reflect.get(params, key)))
      })
      return obj;
    }

    const callbackImpl = debounce(useImmutableCallback((_:any, prevAllValues: any) => {
      const allValues = isBreakChangeValue(prevAllValues);

      setProp((props: object) => {
        Object.entries(allValues).forEach(([key, value], index) => {
          // if(key === '$_actions') {
          //   // const fun = new Function('', `return ${value}`);
          //   // @ts-ignore
          //   props['onClick'] = fun('daa')
          // } else {
            // @ts-ignore
            props[key] = value
          // }

        })
      }, 500);

      // setProp((props: object) => {}, 500);
    }), 500);

    return (
      <Form
          layout={layout}
          form={form}
          onValuesChange={callbackImpl}
          initialValues={configProps}
      >
        <Collapse bordered size={'small'} ghost expandIconPosition={'end'} items={
          formFields.concat({
                title: '样式',
                formFields: defaultStyle
              },
              // {
              //   title: 'store',
              //   formFields: storeConfig
              // }
              ).map((item: any, indx: number) => ({
            key: indx,
            label: <Title title={item.title}/>,
            children: <Fragment key={indx}>
              {dynamicFormFields(item.formFields, form)}
            </Fragment>,
          }))
        } defaultActiveKey={['0', '1', '2', '3']} />
      </Form>
    );
  };
}


