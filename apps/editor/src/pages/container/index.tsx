import {Card} from 'antd';
import Monitor from './monitor';
import {createStyles} from 'antd-style';
// import { StyleProvider, createStyles } from 'antd-style';
// import Frame, { FrameContextConsumer } from 'react-frame-component'


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

// const ContainerMonitor = () => {
//     return (
//         // <Frame style={{width: '100%', height: '100vh', border: 'none', margin: 0, padding: 0}}>
//         //   <FrameContextConsumer>
//         //       {({ document }) => (
//         //           <StyleProvider container={document!.head}>
//         //               <ContainerContent />
//         //           </StyleProvider>
//         //       )}
//         //   </FrameContextConsumer>
//         // </Frame>
//   )
// }

export default ContainerMonitor;
