//@ts-nocheck

import { useSearchParamHook } from "../../utils";
import { useMemo } from "react";

const titleObj = {
  preview: "查看",
  editor: "编辑",
  add: "新增",
  copy: "复制",
};

export const usePrevTitle = () => {
  const [mode] = useSearchParamHook(["mode"]);

  return useMemo(() => {
    return titleObj[mode] || "";
  }, [mode]);
};
