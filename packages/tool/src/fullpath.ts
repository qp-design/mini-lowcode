const baseUrl = process.env.REACT_APP_BASE_URL;
const path = process.env.REACT_IMG_PATH || '';
export const fullpath = (str: string = '') => {
    let computedPath = str;
    if(!str) return '';
    if(str.startsWith('http')) {
        return str
    }
    if(!(str.startsWith(path) || str.startsWith(path.slice(1)))) {
        computedPath = path + str;
    }
    return baseUrl + computedPath
}


