// import {ReactNode, useEffect, useState} from "react";
// // import Taro from '@tarojs/taro';
// import {useComponent} from "@brushes/simulate-component-mini";
//
// // import './index.scss'
//
// interface propsType {
//     type?: 'homePage' | 'indexPage' | 'page';
//     theme?: string;
//     distance?: number;
//     title: string;
//     topBg: string[];
//     children: ReactNode
// }
//
// export const CustomPageMain = (props: propsType) => {
//     const { View, Text } = useComponent()
//     const {title, children, theme} = props
//
//     const [height, setHeight] = useState(0);
//
//     const [top, setTop] = useState(0);
//
//     const [contentHeight, setContentHeight] = useState(0);
//
//     const [headerBgColor, setHeaderBgColor] = useState('transparent');
//
//
//     useEffect(() => {
//
//         // const navBarHeight = Taro.getStorageSync('navBarHeight');
//         // const navBarTop = Taro.getStorageSync('statusBarHeight');
//         // const menuBtnHeight = Taro.getStorageSync('menuBtnHeight');
//         // const safeBottom = Taro.getStorageSync('safeBottom');
//
//         // setHeight(navBarHeight);
//         // setTop(navBarTop);
//         // setContentHeight(menuBtnHeight);
//
//     }, [])
//
//     useEffect(() => {
//         changeColor(props.distance || 0);
//     }, [props.distance]);
//
//     const changeColor = (num: number) => {
//         num > 200 ? setHeaderBgColor('#2b3f60') : setHeaderBgColor('transparent')
//     }
//
//     return (
//         <View
//             className='customHeaderW'
//             style={{
//                 height: `${height + 50}px`,
//                 paddingTop: `${top}px`,
//                 zIndex: 200,
//                 position: 'fixed',
//                 background: headerBgColor,
//             }}
//         >
//             <View className='nav' style={{color: `${theme === 'white' ? '#FFFFFF' : ''}`, height: `${height}px`}}>
//                 <View className='content' style={{height: `${contentHeight}px`}}>
//                     <Text className='title'>{title}</Text>
//                 </View>
//             </View>
//             {
//                 children
//             }
//         </View>
//
//     )
// }
