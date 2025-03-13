import {useEffect} from 'react';
import lz from 'lzutf8';
import {useEditor} from '@craftjs/core';


export const useQueryData = () => {
  const { actions } = useEditor();
  useEffect(() => {
    let str = 'eyJST09UIjp7InR5cGXECHJlc29sdmVkTmFtZSI6IkNvbnRhaW5lciJ9LCJpc0NhbnZhcyI6dHJ1ZSwicHJvcHPENXdpZHRoIjoiMTAwIiwiYmFja2dyb3VuZCI6InJnYmEoMCwgxwMuMDIpIiwiY2xhc3PHY3Jvb3QtY8loLCJwYWRkaW5nIjo1LCJkYXRhLWN51CdhcGkiOiJ3ZWIvcnMv5AC3dXJjZUJhc2UvcXVlcnlSc1NrdVBhZ2VGb3JSZXRHb29kcy5qc29u5ADKZGlzcGxhefEA5SwiY3VzdG9tIjp7fSwiaGlkZGVuIjpmYWxzZSwibm9kZXMiOlsiZkpfa1ozQkx6TiJdLCJsaW5rZWROxh17fX0sIlVadU9ZYVRyU2b7AVpGb3JtQ29tcG9uZW507gFex3DpAV/tAVEjZsUB7AEoMjAsImdyaWQiOjMsImxheW91dCI6InZlcnRpY2Fs5AErY3RpdmVNb2R1bMR7IiwiZsV+bmZpZyI6W13xARLuAJ3uARZwYXLEFTrmAjv5ASb1ARp4a0E3Yk5pSVgw/wEa/wEa/wEa6QEa9QEZaW5saW5l/wEX/wEX/wEX/wEX8AEX6wJR+gEXVGFibGX/ARjoARhjb2x1bW7EcHsidGl05QDf5ZWG5ZOB5ZCN56ewIuYDWkluZGV4IjoiZ+QDHcVnLCJrZeQDbsoSfSzQQ+e8lueggc9Dc2t1Tm/JP8YOzTuPr+WUruW6k+WtmNR+U3VwcGx5bnVt7gCDyhfMTemUgN1NTtBHxBHNQYeR6aKdKOWFg+QEjsxAcHJpY2VzZXROxQnJRs8XzEznsbvlnovPR8V2VOQBye0AiMUSzD3mmK/lkKbkuIrmnrbPQ8QMT3BiaWxsc3RhdMpJ0BjNT5ON5L2cz0nkAudvbslAxw99XSwicm93S8UUxzLmAqDvAxfkALnyBTTvAo7/Awz/AwzqAwx9';
    const json = lz.decompress(lz.decodeBase64(str));

    console.log(12, json);
    actions.deserialize(json);
  }, []);
}
