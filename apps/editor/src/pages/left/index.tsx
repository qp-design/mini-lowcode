import {Card} from 'antd';
import MenuComponent from './menu-page';
import Components from './menu-component';
import { createStyles } from 'antd-style';

const useStyle = createStyles(({ token, css }) => {
    return {
        cardMenu: css`
            width: 160px;
            .ant-card-body{
                padding: 0;
            }
        `
    }
});
const Left = () => {
  const { styles } = useStyle()
  return (
    <>
      <Card size="small" className={styles.cardMenu} title="栏目管理" extra={<a href="#">新增</a>}>
        <MenuComponent/>
      </Card>

      <Card size="small" className={styles.cardMenu}  title="组件管理" style={{ marginTop: 15 }}>
        <Components/>
      </Card>
    </>
  )
}

export default Left
