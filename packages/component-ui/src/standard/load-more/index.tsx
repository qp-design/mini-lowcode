// import {View} from "@tarojs/components";
// import {GoodsItem} from "@/components"
// import empty from "./empty.png";
// import {useComponent} from "@brushes/simulate-component-mini";
//
//
// export const CommonWrap = ({children, loadMore, hasMore }) => {
//     const { InfiniteLoading } = useComponent();
//     const renderJoyImg = (() => {
//         return (
//             <img
//                 alt=""
//                 style={{ height: '24px', width: '24px' }}
//                 src={empty}
//                 className="nut-infinite-bottom-tips-icons"
//             />
//         )
//     })()
//
//     return (
//         <InfiniteLoading
//             onLoadMore={loadMore}
//             hasMore={hasMore}
//             loadingText={
//                 <>
//                     {renderJoyImg}
//                     加载中
//                 </>
//             }
//             loadMoreText={
//                 <>
//                     {renderJoyImg}
//                     没有更多了
//                 </>
//             }
//             target="scroll-id">
//             {children}
//         </InfiniteLoading>
//     )
// }
//
// export const GroupInnerList = ({goods, loadMore, hasMore }) => {
//     return (
//         <View id={'scroll-id'} className="goodsGroup">
//             <CommonWrap loadMore={loadMore} hasMore={hasMore}>
//                 <View>
//                     {
//                         goods.map((item, index) =>
//                             <GoodsItem key={index} item={item} merchantID={item.merchant_id} />
//                         )
//                     }
//                 </View>
//             </CommonWrap>
//         </View>
//     )
// }