import {Card} from 'antd';
import Monitor from './monitor';
const ContainerMonitor = () => {

  return (
    <Card size="small" title="操作区域" style={{ width: "100%" }}>
      <Monitor/>
    </Card>
  )
}

export default ContainerMonitor;
