import './public-path';
import ReactDOM from "react-dom/client";
import "./index.scss";
import Wrap from './pages/test';

function render(props : { container?: any}) {
  const { container } = props;
  console.log(8, container);
  const domNode = container ? container.querySelector('#app') : document.querySelector('#app');
  ReactDOM.createRoot(domNode).render(<Wrap />);
}

function storeTest(props: any) {
  props.onGlobalStateChange((value: any, prev: any) => console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev), true);
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name,
    },
  });
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log('[react18] react app bootstraped');
}

export async function mount(props: any) {
  console.log('[react18] props from main framework', props);
  storeTest(props);
  render(props);
}

export async function unmount(props: any) {
  const { container } = props;
  const domNode = ReactDOM.createRoot(container ? container.querySelector('#app') : document.querySelector('#app'));
  domNode.unmount();
}
