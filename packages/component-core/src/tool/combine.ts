export function combine(array: Array<any>) {
  array.forEach(item => {
    try {
      const {Component, setting} = item;
      Component.craft = setting
    } catch (e) {
      console.error(e, item);
    }
  })
}
