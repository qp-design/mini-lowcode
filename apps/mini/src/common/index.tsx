import {Frame} from "@craftjs/core"
import {WrapContainer} from "./editor";
import {useQueryInitData} from "@brushes/component-store-web";
// import {CustomPageMain, Entry, Shops} from "@brushes/lowcode-component-ui";
// import * as service from "./test";
//
const I = ({menuOpcode} : { menuOpcode: string }) => {
  // console.log('menuOpcode', menuOpcode);
  useQueryInitData(menuOpcode)
  // const json = lz.decompress(
  //   lz.decodeBase64('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'),
  // );

  console.log(14, 1);
  return (
    <Frame>
    </Frame>
  )
}


export function Common() {
  return (
    <WrapContainer>
      {/*<Shops/>*/}
      {/*<CustomPageMain title={'123123'} topBg={[]}>*/}
      {/*  <Entry />*/}
      {/*</CustomPageMain>*/}
      12312312
      <I menuOpcode={'mini'} />
    </WrapContainer>
  );
}
