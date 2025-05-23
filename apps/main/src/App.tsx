import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import { name } from '../package.json';
import Root from './views';
import "./index.scss";

const domNode = document.getElementById("app")!;
ReactDOM.createRoot(domNode).render(<BrowserRouter><Root /></BrowserRouter>);
