import { Button as ButtonJsx } from '@tarojs/components';

export const Button = ({ size, variant, color, text, ...props }) => {
  return (
    <ButtonJsx
      style={{ margin: '5px' }}
      size={size}
      {...props}
    >
      {text}
    </ButtonJsx>
  );
};
