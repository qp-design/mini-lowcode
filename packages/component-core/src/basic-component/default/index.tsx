import {QjIcon} from '@brushes/share-resource';
import {Watermark} from 'antd';

export const DefaultJsx = ({text = '内容放置区域'}: {text?: string}) => {
  return (
    <div className='default-common'>
      <QjIcon
        style={{
          fontSize: 30,
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
