import { Typography } from 'antd';

export const SlotEmpty: React.FC<{
  children?: React.ReactNode;
  borderColor?: string;
}> = ({ children = '当前为插槽容器，可以自定义组件代码。', borderColor = 'rgba(0, 0, 0, 0.1)' }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        borderColor,
        borderWidth: 1,
        borderStyle: 'dashed',
        fontSize: 12,
        textAlign: 'center',
        fontWeight: 'normal',
        background: 'rgba(255,255,255, 0.2)'
      }}
    >
      <Typography.Text type="secondary">{children}</Typography.Text>
    </div>
  );
};
