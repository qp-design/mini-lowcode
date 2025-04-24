export const useSearchParamHook = (params: {key: string; value: string}[]) => {
    // @ts-ignore
    let searchParams = new URL(document.location).searchParams;
    return params.map((item: {key: string; value: string}) => searchParams.get(item.key) || item.value)
}