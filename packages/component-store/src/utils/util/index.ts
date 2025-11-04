import { useSearchParams } from "react-router-dom";

export const useSearchParamHook = (keys: string[]) => {
  let [searchParams] = useSearchParams();
  return keys.map((item: string) => searchParams.get(item));
};
