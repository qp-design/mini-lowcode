import { get } from "lodash";
import { postFormData } from "@brushes/request";

const formatFile = (name: string, url?: string) => {
  return {
    from: name,
    to: name,
    format: async (preValue = []) => {
      const file = get(preValue, "[0].originFileObj");
      if (file) {
        try {
          const data = await postFormData(
            "web/rs/resourceBase/uploadGoodsFiles.json",
            { file },
          );
          return process.env.REACT_APP_BASE_URL + data.dataObj.fileUrl;
        } catch (err: any) {
          throw new Error(err);
        }
      }
      return get(preValue, "[0].url");
    },
  };
};
const formatBasic = (name: string, url?: string) => {
  return {
    from: name,
    to: name,
    format: async (preValue: any) => {
      return preValue;
    },
  };
};
export const formatList = {
  file: formatFile,
  basic: formatBasic,
};

export const transform = () => [];
