import { useComponent } from '@brushes/simulate-component-mini';

export const HOCCodeWrapComponent = (Component: any) => {
  return (props: any) => {
    const { View } = useComponent();
    return (
      <View>
        <Component {...props} />
      </View>
    );
  };
};
