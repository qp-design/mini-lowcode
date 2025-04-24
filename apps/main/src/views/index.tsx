import {
    Routes,
    Route,
} from "react-router-dom";
import Login from '@/views/login';
import GoodDetail from '@/views/goodDetail';
import Home from '@/views/home';
import GoodList from '@/views/good';

const Root = () => {
    return (
            <Routes>
                <Route path="/login" element={<Login/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/goodDetail" element={<GoodDetail/>} />
                <Route path="/goodList" element={<GoodList/>} />
                <Route path="/good" element={<GoodList/>} />
            </Routes>
    );
};

export default Root
