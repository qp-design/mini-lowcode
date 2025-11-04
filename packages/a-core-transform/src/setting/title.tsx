import { Divider } from 'antd';

const Title = ({ title }: { title: string }) => {
  return (
    <>
      <Divider style={{ fontSize: 13, margin: '2px 0' }} orientation="left">
        {title}
      </Divider>
      {/*<Divider style={{fontSize:14}} orientation="left">{title}</Divider>*/}
    </>
  );
};

export default Title;
