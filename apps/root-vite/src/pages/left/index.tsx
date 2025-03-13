import {Card} from 'antd';
import MenuComponent from './menu-page';
import Components from './menu-component';
const Left = () => {
  return (
    <>
      <Card size="small" title="栏目管理" extra={<a href="#">新增</a>} style={{ width: 300 }}>
        <MenuComponent/>
      </Card>

      <Card size="small" title="组件管理" style={{ width: 300, marginTop: 15 }}>
        <Components/>
      </Card>
    </>
  )
}

export default Left
