import { Divider } from 'antd';

const Title = ({ title}: {title: string} ) => {
  return (
    <>
      <Divider style={{fontSize:14}} orientation="left">{title}</Divider>
    </>
  )
}


export default Title
