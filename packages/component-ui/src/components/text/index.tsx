export const Text = ({text, ...restProps}: { text: string;}) => {
  return (
    <div
        style={{
          width: '100%',
          ...restProps
          // textShadow: `0px 0px 2px rgba(0,0,0,${(shadow || 0) / 100})`,
        }}>{text}</div>
  )
}


