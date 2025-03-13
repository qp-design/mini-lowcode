// import * as Materials from 'component-ui';
// import { Container, LayoutComponent } from '@brushes/component-core';
import {
  Editor,
  Frame,
} from '@craftjs/core'
import {useQueryData} from '../store';

// console.log(9, Materials);
const PreviewMode = () => {
  useQueryData();

  return (
    <>
      <Frame></Frame>
    </>
  )
}

const Wrap = () => {
  return (
    123123
  )
}

export default Wrap;
