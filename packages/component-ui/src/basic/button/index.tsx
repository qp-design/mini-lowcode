import {Button} from 'antd';
import {HOCCodeWrapComponent} from "@brushes/core-transform";
import {ReactNode} from "react";

const Button2 = ({text, icon, size, margin = {}, padding = {}, type, onClick, loading, openKey, ...restProps}: {
    margin?: object;
    padding?: object;
    loading?: boolean;
    size?: any;
    onClick?: () => void;
    type?: any;
    text?: string;
    openKey?: string;
    icon?: ReactNode;
}) => {
    return (
        <Button
            {...{
                icon,
                type,
                size,
                onClick,
                loading
            }}
            style={{
                ...margin,
                ...padding,
                ...restProps,
                border: `${restProps.borderSize || 1}px solid ${restProps.borderColor}`,
            }}
            data-id={openKey || text}>{text}</Button>
    )
}

export const ButtonComponent = HOCCodeWrapComponent(Button2);


