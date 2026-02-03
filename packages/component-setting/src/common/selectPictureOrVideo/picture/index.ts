import { useState } from "react";
import { queryFilePage } from "qj-b2c-api";
import { useQuery } from "@tanstack/react-query";

export const usePicture = (queryKey = "", initialState = {}) => {
  const [query, setParams] = useState<any>({
    rows: 10,
    page: 1,
  });

  const { isLoading, data = {} as any } = useQuery(
    [queryKey, query],
    () => {
      return queryFilePage({ ...query, ...initialState });
    },
    {
      refetchOnWindowFocus: false,
      retry: false,
    },
  );

  const queryImpl = (value: any, suc: Function) => {
    setParams(value);
    suc();
  };

  const onChange = (params: any) => {
    const { current, pageSize } = params;
    setParams({
      rows: pageSize,
      page: current,
    });
  };

  return {
    data,
    isLoading,
    setParams,
    queryImpl,
    onChange,
  };
};
