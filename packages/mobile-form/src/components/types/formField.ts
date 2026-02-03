import type { FormInstance as FormInstanceO } from '@nutui/nutui-react-taro';

export type FormInstance = FormInstanceO;
type formType =
  | 'textarea'
  | 'checkboxList'
  | 'pick'
  | 'switch'
  | 'complex'
  | 'text'
  | 'checkbox'
  | 'checkboxGroup'
  | 'select'
  | 'radioGroup'
  | 'slot';

type callResolver = (msg?: string) => void;
export type submitType<T = any> = [T, callResolver, callResolver];

export type NamePath = string;

export interface FieldType {
  name: string;
  noStyle?: boolean;
  colon?: boolean;
  type: formType;
  label?: string;
  labelCol?: { span: number };
  wrapperCol?: { span: number };
  shouldUpdate?: boolean;
  calIsDisabled?: (form: FormInstance) => boolean;
  calIsVisible?: (form: FormInstance) => boolean;
  rules?: Array<
    { required?: boolean; message?: string; pattern?: RegExp } | any
  >;
  initialValue?: string | number | boolean | Array<string | number>;
  readOnly?: boolean;
  minLength?: number;
  loading?: boolean;
  extraProps?: {
    dependencies?: NamePath;
    shouldUpdate?: (prevValue: any, curValue: any) => boolean;
    [k: string]: unknown;
  };
  style?: { [k: string]: unknown };
}

export interface TransformType {
  from: string;
  to: string;
  format: (preValue: any, value: any) => any;
  isDelete?: boolean; // 原字段是否保留: true删除
}

export interface Action {
  key: string;
  name: string;
  callback: Function;
  isNeedValidate?: boolean;

  [v: string]: unknown;
}
