import { transform } from "@babel/standalone"

export const babelTransform = (code: string) => {
  return transform(code, {
    presets: ['react', 'es2015', 'stage-2']
  }).code
}

// 把代码编译后转换成url文件
export const func = (jsxCode: string) => {
  const code = babelTransform(jsxCode);
  return eval(code)
  // console.log(12, code);
  // return URL.createObjectURL(
  //   new Blob([code], {
  //     type: 'application/javascript'
  //   })
  // )
}
