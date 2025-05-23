import { useMemo } from 'react';
const baseUrl = process.env.REACT_APP_BASE_URL;
const path = process.env.REACT_IMG_PATH || '';

export const useFullPath = (str: string) => {
  return useMemo(() => {
    let computedPath = str;
    if(!str) return '';
    if(str.startsWith('http')) {
      return str
    }
    if(!(str.startsWith(path) || str.startsWith(path.slice(1)))) {
      computedPath = path + str;
    }
    return baseUrl + computedPath

  }, [str]);
};
