import {Frame, useEditor} from '@craftjs/core';
import lz from "lzutf8";
import {useEffect} from "react";
import {WrapContainer} from "@/component";


const I = () => {
  const { actions } = useEditor();
  useEffect(() => {
    const str = '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';
    const result = lz.decompress(lz.decodeBase64(str));
    actions.deserialize(result);
    // setJson(result);
  }, []);

  return (
      <Frame>
      </Frame>
  )
}
export default function App() {
  return (
      <WrapContainer>
          <I/>
      </WrapContainer>
  );
}
