import { useEffect, useMemo, useState } from 'react';
import { getEnv, getTaro } from '@brushes/utils';

export function useImageHeight(
  type: number,
  widthHeight = { height: 200, width: 375 },
  defaultValue = ''
): string {
  const isTaro = useMemo(() => getEnv(), []);
  const [height, setHeight] = useState('');
  useEffect(() => {
    let heightSize = '';
    if (isTaro) {
      const Taro = getTaro();
      const sysInfo = Taro.getSystemInfoSync();
      const deviceW = sysInfo.windowWidth;
      heightSize =
        type == 1
          ? Math.floor((deviceW * widthHeight.height) / widthHeight.width) +
            'px'
          : defaultValue || '100vh';
    } else {
      heightSize =
        type == 1
          ? Math.floor((375 * widthHeight.height) / widthHeight.width) + 'px'
          : defaultValue || '667px';
    }
    setHeight(heightSize);
  }, [type, widthHeight]);

  return height;
}
