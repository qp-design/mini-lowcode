import { ReactNode } from 'react';

interface PropsText {
  children?: ReactNode;
  [v: string]: unknown;
}

export const Scroll = ({ children = '', ...props }: PropsText) => {
  return <span {...props}>{children}</span>;
};
