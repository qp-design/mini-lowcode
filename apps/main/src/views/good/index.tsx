import { Frame, useEditor } from '@craftjs/core';
import {WrapContainer} from "@brushes/editor-component";
import {useQueryData} from "@/store";


const I = () => {
  useQueryData('26732')

  return (
      <Frame/>
  )
}
export default function App() {
  return (
      <WrapContainer>
          <I/>
      </WrapContainer>
  );
}
