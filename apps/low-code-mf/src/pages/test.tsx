
import {Button} from 'antd/es';
import React from 'react'

const D = ({children}) => {
  const add = () => {
    console.log(777777, children)
  }
  return (
    <div>{
      React.cloneElement(children, { type: 'primary', onClick: add})
    }</div>
  )
}

const DDD = (props) => {
  console.log(16, props);

  return (
    <Button {...props}>123123</Button>
  )
}
const Test = () => {



  return (
    <D>
      <DDD />
    </D>
  )
}

export default Test;
