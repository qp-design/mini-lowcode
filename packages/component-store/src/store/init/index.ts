import {useEffect} from 'react';
import lz from 'lzutf8';
import {useEditor} from '@craftjs/core';
import {post, cacheParams} from "@brushes/optimize";

export const useQueryInitData = (menuOpcode: string) => {
  const { actions } = useEditor();
  useEffect(() => {
    (async () => {
      try {
        const { modelTagvalueJson } = await post('/web/pfs/pfsmodeltagvalue/getPfsModelTagValueByTginfo.json', cacheParams({
          menuOpcode,
          isNew: 1
        }, 30));
        const json = lz.decompress(lz.decodeBase64(modelTagvalueJson));
        actions.deserialize(json);
      } catch (err) {
      }
    })()
  }, [menuOpcode]);

}


export const useQueryData = (modelId: string) => {

  const { actions } = useEditor();
  useEffect(() => {

    (async () => {
      try {
        const { modelConfig } = await post('/web/pfs/pfsmodel/getPfsModel.json', {
          modelId
        });
        const json = lz.decompress(lz.decodeBase64(modelConfig));
        actions.deserialize(json);
      } catch (err) {
      }
    })()
  }, []);

}
