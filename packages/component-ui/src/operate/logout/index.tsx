import {HOCCodeWrapComponent} from "@brushes/core-transform";
import { ButtonComponent } from "../../basic";
import {post} from "@brushes/request";
import {useState} from "react";
import {message} from "antd";
import {useNavigateImpl} from "@brushes/component-tool";

const Logout = (props:any) => {
    const {navigator} = useNavigateImpl()
    const [loading, setLoading] = useState(false);
    const logoutImpl = async () => {
        try {
            setLoading(true)
            const { msg } = await post('web/ml/mlogin/loginOut.json');
            message.success(msg);

            setTimeout(() => {
                navigator('/login')
            }, 500)
        } catch (err) {

        } finally {
            setLoading(false)
        }
    }
    return (
        <ButtonComponent
            {...props}
            onClick={logoutImpl}
            loading={loading}
        >
        </ButtonComponent>
    );
};

export const LogoutComponent = HOCCodeWrapComponent(Logout)