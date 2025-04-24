import {DefaultJsx, Inner, useModuleContext} from "@brushes/component-core";
import {Fragment, useMemo} from "react";
import {useEditor} from "@craftjs/core";

export const RichText = ({code}: { code: string; }) => {
  const defaultValue = useModuleContext(s => s.moduleStore.defaultValue);
  const {enabled} = useEditor(
      (state) => ({
        enabled: state.options.enabled,
      }));

  const html = useMemo(() => {
    // @ts-ignore
    return defaultValue[code];
  }, [defaultValue, code]);

  return (
      <>
          {
              html ? <div dangerouslySetInnerHTML={{__html: html}}></div> : enabled ? <DefaultJsx /> : ''
          }
      </>
  )
}


