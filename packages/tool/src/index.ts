const baseUrl = process.env.REACT_APP_BASE_URL;
const path = process.env.REACT_IMG_PATH || '';
export const fullpath = (str: string = '') => {
    if(!str) return '';
    if(!str.startsWith('http')) {
        return baseUrl + path + str
    }
    return str
}