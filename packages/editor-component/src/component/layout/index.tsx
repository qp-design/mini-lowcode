import { Frame } from "@brushes/component-core-mini";
import { WrapContainer } from "../../editor";
import { useQueryInitData } from "@brushes/component-store-web";

const I = () => {
  useQueryInitData("common");
  return <Frame></Frame>;
};
export function Layout() {
  return (
    <WrapContainer>
      <I />
    </WrapContainer>
  );
}
