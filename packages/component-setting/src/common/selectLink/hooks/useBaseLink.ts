import { useEffect, useState } from 'react';
import { queryNewTginfoMenuTree as queryTginfoMenuTree } from 'qj-b2c-api';
import { menu } from '../config/constant';

export const useBaseLink = () => {
  const [list, setList] = useState<any[]>([]);

  useEffect(() => {
    init();
  }, []);

  const init = () => {
    if (menu.value.length === 0) {
      (async () => {
        await getList();
      })();
    } else {
      setList(menu.value);
    }
  };

  const getList = async () => {
    try {
      const { list: resultArr } = await queryTginfoMenuTree({
        rows: 50,
        dataState: 2,
        page: 1
      });
      const arr = [];
      for (let i = 0; i < resultArr.length; i++) {
        arr.push({
          label: resultArr[i]['tginfoMenuName'],
          value: resultArr[i]['menuOpcode']
        });
      }
      setList(arr);
      // @ts-ignore
      menu.value = arr;
    } catch (err) {
      console.log(err);
    }
  };

  return {
    list,
    setList
  };
};
