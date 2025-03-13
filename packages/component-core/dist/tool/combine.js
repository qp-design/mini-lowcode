export function combine(array) {
    array.forEach(item => {
        const { Component, setting } = item;
        Component.craft = setting;
    });
}
