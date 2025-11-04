// import { atom } from 'jotai'
// import { atomWithQuery } from 'jotai-tanstack-query'
// import { b2bGoodQuery } from '@brushes/lowcode-component-api';
//
// export const goodAtom = atom({ame: '1'})
// export const goodQueryAtom = atomWithQuery((get) => ({
//   queryKey: ['good', get(goodAtom)],
//   queryFn: async ({ queryKey: [, params] }) => {
//     console.log(9, params);
//     return await b2bGoodQuery(params)
//   },
// }))
