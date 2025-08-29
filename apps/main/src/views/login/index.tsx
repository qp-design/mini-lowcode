import { createStyles } from "antd-style";
import {fullpath} from "@brushes/component-tool";
import {useModuleRootContext} from "@brushes/component-core";
import {Common} from "@brushes/editor-component";

const useStyle = createStyles(({token, css}) => {

    return {
        loginContainer: css`
            height: 100vh;
            width: 100vw;
            display: grid;
            align-items: center;
            grid-template-columns: 1fr 40vw;
            .logo {
                text-align: center;
            }
            .login-right {
                align-items: center;
                display: flex;
                justify-content: center;
                position: relative;
                height: 100vh;
                background: #eef2f4;
            }

        `
    }
})
const Login = () => {
    const { styles } = useStyle();
    const config = useModuleRootContext(s=>s.rootStore._webConfig) || {};

    return (
        <div className={styles.loginContainer} style={{
            backgroundImage: `url(${fullpath(config.proappEnvIndexc)})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: "100% auto"
        }}>
            <div className="logo">{ config.proappEnvLogo && <img loading="lazy" height="100" src={fullpath(config.proappEnvLogo)} /> }</div>
            <div className="login-right">
                <Common menuOpcode={'login'}/>
            </div>
        </div>
    )
}

export default Login;