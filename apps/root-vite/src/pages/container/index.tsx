import {Card} from 'antd';
import Monitor from './monitor';
import {createStyles} from "antd-style";

const useStyle = createStyles(({ token, css }) => {
    return {
        monitor: css`
            width: 100%;
            .ant-card-body{
                padding: 0;
            }
        `
    }
});

const ContainerMonitor = () => {
    const { styles } = useStyle();
  return (
    <Card className={styles.monitor} size="small" title="操作区域">
        <Monitor/>
    </Card>
  )
}

export default ContainerMonitor;
