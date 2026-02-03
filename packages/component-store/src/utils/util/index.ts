import { getTaro } from "@brushes/component-tool";
const Taro = getTaro()
export const useSearchParamHook = (keys: string[]) => {
  let { params } = Taro.useRouter();
  return keys.map((item: string) => params[item]);
};
