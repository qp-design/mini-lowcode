export const fixPrice = (num: number = 0, icon = '') => {
    return (
        icon + num.toLocaleString('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })
    );
};
