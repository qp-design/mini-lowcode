import {Button} from 'antd';

export const Button2 = ({text, ...restProps}: { text: string}) => {
  console.log(4, restProps, text);
  return (
    <Button {...restProps}>{text}</Button>
  )
}


