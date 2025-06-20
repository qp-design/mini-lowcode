import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Root from './pages';
import "./index.scss";

const domNode = document.getElementById("app")!;
ReactDOM.createRoot(domNode).render(<BrowserRouter><Root /></BrowserRouter>);
