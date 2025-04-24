import {Button} from 'antd';
import {HOCCodeWrapComponent} from "@brushes/component-core";

const Button2 = ({text, openKey, onClick, ...restProps}: { onClick?: () => void; openKey?: string; text: string; }) => {
  return (
    <Button onClick={onClick?.bind(null, openKey)} {...restProps} data-id={openKey || text}>{text}</Button>
  )
}

export const ButtonComponent = HOCCodeWrapComponent(Button2);


