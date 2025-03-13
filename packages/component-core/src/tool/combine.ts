export function combine(array: Array<any>) {
  array.forEach(item => {
    const {Component, setting} = item;
    Component.craft = setting
  })
}
