import { Divider } from 'antd';

const Title = ({ title}: {title: string} ) => {
  return (
    <>
      <Divider orientation="left">{title}</Divider>
    </>
  )
}


export default Title
