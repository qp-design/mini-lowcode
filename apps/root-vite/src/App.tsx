import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { getKey } from '@brushes/utils';


console.log(6, process.env, getKey())
import Wrap from './pages';
import "./index.scss";

const domNode = document.getElementById("app")!;
ReactDOM.createRoot(domNode).render(<BrowserRouter><Wrap /></BrowserRouter>);
