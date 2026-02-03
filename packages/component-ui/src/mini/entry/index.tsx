import {useComponent} from "@brushes/simulate-component-mini";
// import {entryConfig} from "@/common/config/indexPage";
// import {useHomeCate} from 'store';

export const Entry = () => {
  const { View, Text, Image } = useComponent()

  const cate = [
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

  const navigator = (e: any) => {
    console.log(111, e);
  }

  // const { cate,
  //   navigator } = useHomeCate();
  // const goPage = async () => {
  //   await Taro.navigateTo({
  //     url: '/pages/village/home/index'
  //   })
  // }

  return (
    <View className='entry'>
      {
        cate.map(item => {
          return (
            <View className='entryItem' key={item.id} onClick={() => navigator(item)}>
              <Image className='icon' src={item.icon || ''} />
              <Text className='txt'>{item.name}</Text>
            </View>
          )
        })
      }
    </View>
  )
}
