export const transformImageMode = (value: string) => {
    switch (value) {
        case 'scaleToFill':
            return 'fill';
        case 'aspectFit':
            return 'contain';
        case 'aspectFill':
            return 'cover';
    }
}