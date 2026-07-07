import { useComponent } from '@brushes/simulate-component-mini';
import { useModuleRootContext } from '@brushes/context';
import Taro from '@tarojs/taro';
import { useNavigateImpl } from '@brushes/component-tool';

export const Tabbar = () => {
  // 初始化数据 => 栏目
  // useInit();
  const { SafeArea, Tabbar, Image, View } = useComponent();
  const { navigator } = useNavigateImpl();
  const selectedColor = useModuleRootContext((s) => s.rootStore.selectedColor);
  const color = useModuleRootContext((s) => s.rootStore.color);
  const tabBarData = useModuleRootContext((s) => s.rootStore.tabBarData) || [];
  const { path } = Taro.useRouter();

  const switchTab = (menuOpcode: string) => {
    navigator(menuOpcode);
  };

  return (
    <>
      <Tabbar value={path}>
        {tabBarData.map((item, index) => (
          <Tabbar.Item
            key={index}
            onClick={() => switchTab(item.menuOpcode)}
            title={<View style={{ color: path.includes(item.pagePath) ? selectedColor : color }}>{item.text}</View>}
            icon={() => {
              return <Image height={24} width={24} src={path.includes(item.pagePath) ? item.selectedIconPath : item.iconPath} />;
            }}
          />
        ))}
      </Tabbar>
      <SafeArea position="bottom" />
    </>
  );
};
