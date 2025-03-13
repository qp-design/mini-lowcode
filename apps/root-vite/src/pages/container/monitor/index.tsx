import { Frame, Element } from '@craftjs/core';
import { Topbar } from '../components/Topbar';
import { ContainerWrap} from '@brushes/component-core';
import {ContainerWrapSettings} from "@brushes/component-setting";

ContainerWrap.craft = {
  props: {
    width: '100',
    height: '100',
    background: '#fff'
  },
  related: {
    settings: ContainerWrapSettings,
  },
}
export default function App() {
  // const [json, setJson] = useState('');
  // useEffect(() => {
  //   let str = 'eyJST09UIjp7InR5cGXECHJlc29sdmVkTmFtZSI6IkNvbnRhaW5lciJ9LCJpc0NhbnZhcyI6dHJ1ZSwicHJvcHPENXdpZHRoIjoiMTAwIiwiYmFja2dyb3VuZCI6InJnYmEoMCwgxwMuMDIpIiwiY2xhc3PHY3Jvb3QtY8loLCJwYWRkaW5nIjo1LCJkYXRhLWN50id9LCJkaXNwbGF58QCqLCJjdXN0b20iOnt9LCJoaWRkZW4iOmZhbHNlLCJub2RlcyI6WyJ4a0E3Yk5pSVgwIl0sImxpbmtlZE7GHXt9fSwiVVp1T1lhVHJTZvsBH0Zvcm1Db21wb25lbnTuASPHcOkBJO0BFiNmxQHsAO0yMCwiZ3JpZCI6MywibGF5b3V0IjoidmVydGljYWzyAPDOe+4A9HBhcsQVOuYB3vkBBPUA+OsBGP8A+P8A+P8A+OgA+PUA92lubGluZf8A9f8A9f8A9esA9X0=';
  //   const json = lz.decompress(lz.decodeBase64(str));
  //   setJson();
  // }, []);
  // console.log(24, json);
  return (
    <>
        <Topbar />
        <Frame>
          <Element
            className={'root-container'}
            canvas
            is={ContainerWrap}
            padding={5}
            background="rgba(0, 0, 0, 0.02)"
            data-cy="root-container"
          >
          </Element>
        </Frame>
    </>
  );
}
