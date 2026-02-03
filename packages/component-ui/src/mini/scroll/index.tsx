import {useComponent} from "@brushes/simulate-component-mini";

export const ScrollViewComponent = () => {
    const {View, Image, ScrollView} = useComponent();
    const cate = [
        {
            icon: 'http://qjstatic.oss-cn-shanghai.aliyuncs.com/logo/xingyunred.png',
            name: '密令',
            id: 1
        },
        {
            icon: 'http://qjstatic.oss-cn-shanghai.aliyuncs.com/logo/xingyunred.png',
            name: '密令',
            id: 1
        },
        {
            icon: 'http://qjstatic.oss-cn-shanghai.aliyuncs.com/logo/xingyunred.png',
            name: '密令',
            id: 1
        },
        {
            icon: 'http://qjstatic.oss-cn-shanghai.aliyuncs.com/logo/xingyunred.png',
            name: '密令',
            id: 1
        },
        {
            icon: 'http://qjstatic.oss-cn-shanghai.aliyuncs.com/logo/xingyunred.png',
            name: '密令',
            id: 2
        },
        {
            icon: 'http://qjstatic.oss-cn-shanghai.aliyuncs.com/logo/xingyunred.png',
            name: '密令',
            id: 3
        },
        {
            icon: 'http://qjstatic.oss-cn-shanghai.aliyuncs.com/logo/xingyunred.png',
            name: '密令',
            id: 4
        }
    ]

    return (
            <View className='shopGroup'>
                <ScrollView
                    scrollX
                    scrollY={false}
                    style={{
                        width: '100%',
                        whiteSpace: 'nowrap'
                    }}
                >
                    {
                        cate.map(item => {
                            return (
                                <View className='shop' key={item.id}>
                                    <Image className='img' src={item.icon} mode='aspectFill'/>
                                    <View className='name'>{item.name}</View>
                                </View>
                            )
                        })
                    }
                </ScrollView>
            </View>
    )
}
