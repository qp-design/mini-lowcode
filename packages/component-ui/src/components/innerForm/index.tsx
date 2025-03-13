import {dynamicFormFields, FieldType} from '@brushes/form';
import {Container, HOCCodeWrapComponent} from '@brushes/component-core';
import React, {ForwardedRef, useMemo} from 'react';
import {Element, useNode} from '@craftjs/core';
import {FormInstance} from 'antd';
import {useSelectOption} from 'component-store';

type FormType = {
  background: string;
  formConfig: FieldType[];
  padding: number;
  linkKey: string;
  form: FormInstance;
  layout: 'horizontal' | 'vertical' | 'inline',
  api: string;
}

const ComponentJsx = React.forwardRef((
  {
    layout,
    background,
    padding,
    formConfig,
    api,
    linkKey,
    ...restProps
  }: FormType, ref: ForwardedRef<HTMLDivElement>) => {

  const {form} = useNode(node => ({
    form: node.data.custom.form
  }));

  const { options } = useSelectOption(form, api, linkKey);

  const newFormConfig = useMemo(() => {
    return formConfig.map(item => {
      return {
        ...item,
        // extraProps: {
        //   shouldUpdate: (prevValues: any, curValues: any) => prevValues[linkKey] !== curValues[linkKey]
        // }
      }
    })
  }, [formConfig, linkKey]);

  console.log(44, newFormConfig, formConfig);

  return (
    <div ref={ref} style={{background, padding, minWidth: 20, height: 30}}>
      {
        dynamicFormFields(newFormConfig, form)
      }
    </div>
  )
})

export const InnerFormComponent = HOCCodeWrapComponent(ComponentJsx)


