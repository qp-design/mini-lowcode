import { createStyles } from "antd-style";
import LoginWrap from "@/login";
import {useEffect, useState} from "react";
import {get, cacheParams} from "@brushes/optimize";
import {fullpath} from "@brushes/component-tool";

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
    const [config, setConfig] = useState({
        proappEnvIndexc: '',
        proappEnvLogo: ''
    });
    useEffect(() => {
        (async () => {
            const data = await get('web/ml/mlogin/getProappinfo.json', cacheParams({}, 10));
            setConfig({
                proappEnvIndexc: data.proappEnvIndexc || 'https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/apps_web_src_assets_login.png',
                proappEnvLogo: data.proappEnvLogo,
            })
        })()
    }, []);
    return (
        <div className={styles.loginContainer} style={{
            backgroundImage: `url(${fullpath(config.proappEnvIndexc)})`,
            backgroundRepeat: `no-repeat`,
            backgroundSize: "100% auto"
        }}>
            <div className="logo">{ config.proappEnvLogo && <img loading="lazy" height="100" src={fullpath(config.proappEnvLogo)} /> }</div>
            <div className="login-right">
                <LoginWrap children={undefined} data={""}/>
            </div>
        </div>

    )
}

export default Login;