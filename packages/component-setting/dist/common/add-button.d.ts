import { type FC } from 'react';
import { type ButtonProps } from 'antd';
interface AddButtonProps {
    add: ButtonProps['onClick'];
    title?: string;
    type?: ButtonProps['type'];
}
export declare const AddButton: FC<AddButtonProps>;
export default AddButton;
