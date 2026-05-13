import { useComponent } from '@brushes/simulate-component-mini';

export const DefaultJsx = ({ text = '内容放置区域', root }: { text?: string; root?: boolean }) => {
  const { View, Image } = useComponent();
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
        flexDirection: 'column'
      }}
    >
      <Image src={'https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/bg.png'} height="40" />
      <p
        style={{
          marginTop: 10,
          fontSize: 12
        }}
      >
        {text}
      </p>
    </View>
  );
};
