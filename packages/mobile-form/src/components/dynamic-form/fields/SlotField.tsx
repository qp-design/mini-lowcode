import { memo } from 'react';

function SlotField({ render, ...extraProps }: { render?: Function }) {
  if (render) {
    return render?.(extraProps);
  }
  return '';
}

export default memo(SlotField);
