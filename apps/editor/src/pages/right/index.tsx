import {Card} from 'antd';
import {SettingsPanel} from './SettingsPanel';
import {ErrorBoundary} from 'react-error-boundary';
const Right = () => {
  return (
    <>
      <Card size="small" title="属性配置" style={{ width: '100%', height: '100vh', overflowY: 'auto' }}>
        <ErrorBoundary fallback={<div>配置出错了……</div>}>
          <SettingsPanel/>
        </ErrorBoundary>
      </Card>
    </>
  )
}

export default Right
