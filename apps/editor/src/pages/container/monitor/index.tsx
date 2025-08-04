import {Frame, Element, useEditor} from '@craftjs/core';
import { Topbar } from '../components/Topbar';
import { ContainerWrap } from '@brushes/component-core';
import {ContainerWrapSettings} from "@brushes/component-setting";
import {useEffect} from "react";

ContainerWrap.craft = {
  props: {
    width: '100',
    height: '100',
    background: 'rgba(0, 0, 0, 0.0)'
  },
  related: {
    settings: ContainerWrapSettings,
  },
}

export const InnerApp = () => {
  const {isEnabled} = useEditor(state => ({
    isEnabled: state.options.enabled
  }));
  useEffect(() => {
    const node = document.querySelector('#container-editor');

    function eventImpl(e: Event) {
      if(e.target?.closest('div').className.includes('ant-tabs-tab') || e.target?.closest('button')?.className.includes('ant-table-row-expand-icon')) {
        return;
      }
      const targetNode = e.target!.closest('section');
      if (!targetNode) return;
      if (isEnabled) {
        e.stopPropagation();
      }
    }

    node!.addEventListener('click', eventImpl)
    return () => {
      node!.removeEventListener('click', eventImpl)
    }
  }, [isEnabled]);

  return (
      <>
        <div id={'container-editor'}>
          <section>
            <Frame>
              <Element
                  className={'root-container'}
                  canvas
                  is={ContainerWrap}
                  data-cy="root-container"
              >
              </Element>
            </Frame>
          </section>
        </div>
      </>
  );
}

export default function App() {
  return (
    <>
      <Topbar />
      <InnerApp/>
    </>
  );
}
