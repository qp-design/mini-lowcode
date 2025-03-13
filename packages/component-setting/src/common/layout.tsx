// import {useMemo} from 'react';
// import {dynamicFormFields, NamePath} from '@brushes/form';
// import {FormInstance} from 'antd';
//
// export const LayoutSettingJsx = ({form, name, ...rest}: { form: FormInstance; name: NamePath }) => {
//   const fields = useMemo(() => {
//     return [
//       {
//         label: '背景颜色',
//         name: [name[0], 'background'],
//         type: 'color',
//         extraProps: {
//           allowClear: true,
//           showText: true,
//         }
//       },
//       {
//         label: '宽度',
//         name: [name[0], 'width'],
//         type: 'number',
//         extraProps: {
//           suffix: "%",
//         }
//       },
//       {
//         label: '内边距',
//         name: [name[0], 'padding'],
//         type: 'number',
//         extraProps: {
//           suffix: "px",
//         }
//       }
//     ]
//   }, [name])
//
//   return (
//     <div className='layout-setting'>
//       {
//         dynamicFormFields(fields, form)
//       }
//     </div>
//   )
// }
