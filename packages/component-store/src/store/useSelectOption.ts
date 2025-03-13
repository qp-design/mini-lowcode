import { useRef, useState, useEffect } from 'react';
import {get as getIo} from '@brushes/optimize';

export function useSelectOption(form: any, api: string, linkKey: string) {
  console.log(5, linkKey);
  const isMounted = useRef(true);
  const [options, setOption] = useState<Array<{ label: string; value: string }>>([]);
  const linkKeyValue = linkKey ? form.getFieldValue(linkKey) : '';
  useEffect(() => {
    (async () => {
      if (!isMounted.current) {
        // form.setFieldValue('cityCode', undefined);
        // form.setFieldValue('areaCode', undefined);
      }

      if (!linkKeyValue) {
        setOption([]);
        return;
      }

      const data = await getIo(api, { [linkKey]: linkKeyValue  });
      console.log(22, data);
      const arr = data.list.map((item: { areaName: any; areaCode: any }) => {
        return {
          value: item.areaCode,
          label: item.areaName
        };
      });
      setOption(arr);
    })();
    return () => {
      isMounted.current = false;
    };
  }, [linkKeyValue, form]);

  return {
    options
  };
}
