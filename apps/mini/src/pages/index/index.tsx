import {Common} from "@brushes/editor-component-mini";
import {useComponent} from "@brushes/simulate-component-mini";

import './index.scss'

export default function Index () {
  const { View } = useComponent();
  return (
    <View>
      123123
       <Common menuOpcode={'mini'} />
    </View>
  )
}
