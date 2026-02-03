import { QjIcon } from '@brushes/share-resource';
import {useComponent} from "@brushes/simulate-component-mini";

export const DefaultJsx = ({ text = '内容放置区域', root }: { text?: string; root?: boolean }) => {
  const { View } = useComponent();
  return (
    <View
      style={{
          minHeight: root ? `calc(100vh - 110px)` : 'auto',
          border: 'dashed 1px rgba(0, 0, 0, 0.15)',
          width: '100%',
          textAlign: 'center',
          height: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
      }}
    >
      <QjIcon
        style={{
          fontSize: 50,
          fontWeight: 500,
          display: 'block',
          color: '#bbb'
        }}
        name={'icon-computer'}
      ></QjIcon>
      <p style={{
          marginTop: 10,
          fontSize: 12
      }}>{text}</p>
    </View>
  );
};