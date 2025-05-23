
import { createStyles } from "antd-style";
import LoginWrap from "@/login";

const useStyle = createStyles(({token, css}) => {

    return {
        loginContainer: css`
            background: url("https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/apps_web_src_assets_login.png") no-repeat;
            background-size: auto 100%;
            height: 100vh;
            width: 100vw;
            display: grid;
            grid-template-columns: 1fr 40vw;
            .logo {
                margin: 40px 0 0 50px;
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

    return (
        <div className={styles.loginContainer}>
            <div className="logo"><img loading="lazy" height="60" src="https://brushes.oss-cn-shanghai.aliyuncs.com/static/lowcode-platform/c52a2b0171ce4601b4835402c042d8b6.png" /></div>
            <div className="login-right">
                <LoginWrap children={undefined} data={""}/>
            </div>
        </div>

    )
}

export default Login;