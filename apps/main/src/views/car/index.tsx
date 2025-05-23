import {Frame} from '@craftjs/core';
import {WrapContainer} from "@brushes/editor-component";
import {useQueryData} from "@/store";

const I = () => {
    useQueryData('26738')

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
