import {View} from "@tarojs/components";
import {ReactNode} from "react";

export const Container = ({children}: {children: ReactNode}) => {

  return (
    <View>
        {children}
    </View>
  );
};
