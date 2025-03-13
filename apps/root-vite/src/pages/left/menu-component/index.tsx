import Title from './title';
import List from './layout';
import {basic, layout, extend} from '../dataSource-component';
const Components = () => {
  return (
    <>
      <Title title={'布局组件'}/>
      <List componentList={layout}/>
      <Title title={'基础组件'}/>
      <List componentList={basic}/>
      <Title title={'扩展组件'}/>
      <List componentList={extend}/>
    </>
  )
}


export default Components
