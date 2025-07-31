import {Button} from 'antd';
import {HOCCodeWrapComponent} from "@brushes/core-transform";
import {ReactNode} from "react";
import {useEditor} from "@craftjs/core";

const Button2 = ({text, disabled = '', icon, size, margin = {}, padding = {}, type, onClick, loading, openKey, ...restProps}: {
    margin?: object;
    padding?: object;
    disabled?: string | boolean;
    loading?: boolean;
    size?: any;
    onClick?: () => void;
    type?: any;
    text?: string;
    openKey?: string;
    icon?: ReactNode;
}) => {
    const {enabled} = useEditor(
        (state) => ({
            enabled: state.options.enabled,
        }));
    return (
        <Button
            {...{
                icon,
                type,
                size,
                onClick,
                loading,
                disabled: !enabled && disabled,
                // ...(disabled !== '' ? { disabled } : {})
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


