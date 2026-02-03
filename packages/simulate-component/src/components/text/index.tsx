import { ReactNode } from 'react';

interface PropsText {
  children?: ReactNode;
  [v: string]: unknown;
}

export const Text = ({ children = '', ...props }: PropsText) => {
  return <span {...props}>{children}</span>;
};
