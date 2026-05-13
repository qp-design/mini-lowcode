//@ts-nocheck
import { ContainerWrap } from '../../basic-component';
import { Frame, Element, useEditor } from '@craftjs/core';
import { WrapContainer } from '@brushes/editor-component-mini';
import { useComponent } from '@brushes/simulate-component-mini';
import { useEffect } from 'react';
import { cacheParams, post } from '@brushes/optimize';
import lz from 'lzutf8';
import Taro from '@tarojs/taro';

const useSearchParamHook = (keys: string[]) => {
  const { params: searchParams = {} } = Taro.useRouter();
  return keys.map((item: string) => searchParams[item]);
};

const I = ({ menuOpcode }: { menuOpcode: string }) => {
  const { actions } = useEditor();
  const [appmanageCode] = useSearchParamHook(['appmanageCode']);
  useEffect(() => {
    (async () => {
      try {
        const { modelTagvalueJson } = await post(
          '/web/pfs/pfsmodeltagvalue/getPfsModelTagValueByTginfo.json',
          cacheParams(
            {
              menuOpcode,
              appmanageCode,
              isNew: 1
            },
            30
          )
        );
        const json = lz.decompress(
          lz.decodeBase64(
            modelTagvalueJson ||
              'eyJST09UIjp7InR5cGXECHJlc29sdmVkTmFtZSI6IkNvbnRhaW5lcldyYXAifSwiaXNDYW52YXMiOnRydWUsInByb3BzxDl3aWR0aCI6IjEwMCIsImhlaWdodCI6MCwiYmFja2dyb3VuZCI6IiMwxwEiLCJjbGFzc8docm9vdC1jyG0iLCJkYXRhLWN50ht9LCJkaXNwbGF59QCjLCJjdXN0b20iOnt9LCJoaWRkZW4iOmZhbHNlLCJub2RlcyI6WyI5MGc4M2h3SDM2Il0sImxpbmtlZE7GHXt9fSwiU0VKZnlTZzJ1cP8BHOkAlP8BGDoyMDAsIm1hcmdpbsRkLCJwYWRkaW5nxw1vc2l0aW9uVmFsdcRr5AC75wFCImF1dG8i7AFHSW1hZ+QAgM0V5AEpZ2JhKDI1NSzIBDApIiwiZmxleERpcmVjxGDEJm93IiwiYWxpZ25JdGVtcyI6ImNlbnT9AVrvAVZwYXJlbuQAm2hlVzRfYkQ5eV/kAfP2AWz1AWDrAYD6AWBPdXT/AWPnAWNwYXJh5ADJxGzpAoc07QKI/wFG/wFG8gFGY29sdW1u8gEz7QC09wE25QNz/wEw7QEwfQ=='
          )
        );
        actions.deserialize(json);
      } catch (err) {}
    })();
  }, [menuOpcode]);

  return (
    <Frame>
      <Element className={'root-container'} canvas is={ContainerWrap} data-cy="root-container"></Element>
    </Frame>
  );
};

export function Common({ menuOpcode }: { menuOpcode: string }) {
  const { SafeArea } = useComponent();

  return (
    <>
      <WrapContainer>
        <I menuOpcode={menuOpcode} />
      </WrapContainer>
      <SafeArea position="bottom" />
    </>
  );
}
