import {Card} from 'antd';
import Monitor from './monitor';
import {createStyles} from 'antd-style';


const useStyles = createStyles(({css}) => {
    return {
        wrapContainer: css`
            & > .ant-card-body {
                padding: 0 !important;
            }
        `
    }
})

const ContainerMonitor = () => {
    const {styles} = useStyles();
    return (
        <Card className={styles.wrapContainer} size="small" title="操作区域">
            <Monitor/>
        </Card>
    )
}

export default ContainerMonitor;
