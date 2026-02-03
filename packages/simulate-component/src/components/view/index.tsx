import { ReactNode } from 'react';
import { useNode } from '@craftjs/core';

interface Props {
  children?: ReactNode | undefined;
  [v: string]: unknown;
}

export const View = ({ children = '', ...props }: Props) => {
  const {
    connectors: { connect, drag }
  } = useNode();
  return (
      <div
          ref={(ref: HTMLDivElement) => connect(drag(ref))}
          {...props}
      >{children}</div>
  );
};
