// import {useRef, useState} from "react";
// import {useReachBottom} from "@tarojs/taro";
// type DataType = {
//     data: any[];
//     current_page: number;
//     last_page: number;
//     [v:string]: any
// }
// type InitType = {
//     api: (e: {[v: string]: any}) => Promise<{data: DataType}>;
//     tranform: (prev: any, data: DataType) => any;
//     reset: {[v: string]: any};
//     initialValue: any
// }
// export const useLoadMore = ({api, tranform, reset, initialValue}: InitType) => {
//     const [list, setList] = useState(initialValue);
//     const currentPage = useRef(1);
//     const [hasMore, setHasMore] = useState(true)
//     useReachBottom(() => {
//         if(hasMore) {
//             loadMore()
//         }
//     })
//     const fetchData = async (page = 1, params = {}) => {
//         const { data: preData } = await api({
//             ...reset,
//             ...params,
//             page,
//             pageSize: 10,
//         })
//         const data = preData || {data: [], last_page: 0, current_page: 0,month: [], paid_amount: 0, income_amount: 0};
//         setHasMore(data.last_page > data.current_page);
//         const result = tranform(list, data);
//         setList(result);
//     }
//
//
//     const loadMore = async () => {
//         ++currentPage.current;
//         fetchData(currentPage.current)
//     }
//
//     return {
//         loadMore,
//         fetchData,
//         hasMore,
//         list
//     }
// }