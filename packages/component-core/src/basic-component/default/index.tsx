import {QjIcon} from '@brushes/share-resource';
import {Watermark} from 'antd';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ token, css }) => {
    return {
        defaultWrap: css`
            border: dashed 1px rgba(0, 0, 0, 0.15);
            width: 100%;
            text-align: center;
            border-radius: ${token.borderRadius}px;
            height: 100%;
            justify-content: center;
            align-items: center;
            display: flex;
            flex-direction: column;
            color: ${token.colorTextLabel};
            p {
                margin-top: 10px;
                font-size: 12px;
            }
        }`
    };
});

export const DefaultJsx = ({text = '内容放置区域', root}: {text?: string; root?: boolean}) => {
    const { styles } = useStyle();
  return (
    <div className={styles.defaultWrap} style={{
        minHeight: root ?  `calc(100vh - 110px)` : 'auto',
    }}>
      <QjIcon
        style={{
          fontSize: 50,
          fontWeight: 500,
          display: 'block',
          color: '#bbb'
        }}
        name={'icon-computer'}
      ></QjIcon>
      <p>{text}</p>
    </div>
  )
}

export const DefaultEditorBg = ({content = '/', color = 'blue'}: {content?: string; color?: string}) => {
  return (
    <Watermark
      gap={[1,1]}
      font={{color}}
      rotate={0} height={10} width={10} content={content}>
      <div style={{height: 10}}/>
    </Watermark>
  )
}
