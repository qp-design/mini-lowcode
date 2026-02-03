// import {useEffect, useRef} from "react";
// import {getGoodsList} from "api";
// import {useModuleContext} from "../model";
// import { get } from 'lodash-es';
// import {useLoadMore} from "./loadMore";
//
// export const useApiList = (id) => {
//     const setModuleId = useModuleContext(s => s.setModuleId);
//     const layout = useRef('');
//
//     const {
//         list,
//         loadMore,
//         fetchData,
//         hasMore
//     } = useLoadMore({
//             api: getGoodsList,
//             tranform: (prevState, data) => {
//                 layout.current = data.layout;
//                 if(data.current_page === 1) {
//                     const id = get(data, 'data[0].module_id', 0)
//                     setModuleId(id);
//                     return data.data;
//                 }
//                 return prevState.concat(data.data)
//             },
//             reset: {card_bag_id: id},
//             initialValue: []
//         }
//     );
//
//     useEffect(() => {
//         fetchData(1);
//     }, []);
//
//     return {
//         loadMore,
//         merchant: list,
//         hasMore,
//         layout
//     }
// }
//
