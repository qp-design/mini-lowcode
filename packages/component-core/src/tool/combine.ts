export function combine(array: Array<any>) {
  array.forEach((item) => {
    try {
      const { Component, setting } = item;
      Component.craft = setting;
      Component.craft.displayName = item.name;
    } catch (e) {
      console.error('error', e, item);
    }
  });
}
