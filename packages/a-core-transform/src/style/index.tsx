import { ActionJsx } from '../action';
import { transformCode } from '../tool';
import type { FieldType } from '@brushes/form';
import { langs } from '@uiw/codemirror-extensions-langs';
import { isUndefined } from 'lodash';

const defaultCodeInfo = `/**
import { createStyles } from "@brushes/component-core";
const useStyle = createStyles(({token, css}, props:any) => {
    return {
       diyClassName: css\` // \`\`里面添加dom的css样式
     \` }}) 
export default useStyle;
*/`;

export const defaultStyle: FieldType[] = [
  {
    label: '自定义样式',
    name: '$_style',
    type: 'slot',
    extraProps: {
      render({ onChange, form, ...props }) {
        return (
          <ActionJsx
            extensions={[langs.css()]}
            defaultCodeInfo={defaultCodeInfo}
            title={'样式'}
            onChange={(e) => {
              if (!isUndefined(e)) {
                const date = new Date().valueOf();
                const newCode = transformCode(e as string);
                form.setFieldValue('$$_style', newCode);
                // @ts-ignore
                console.log('在线编译耗时=========>', new Date().valueOf() - date);
                onChange(e);
              }
            }}
            {...props}
          />
        );
      }
    }
  },
  {
    label: '',
    name: '$$_style',
    style: {
      display: 'none'
    },
    type: 'text'
  }
];
