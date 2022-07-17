const Login = () => {

    const GITHUB_CLIENT_ID = "5caf3cf55e98184c29f8";
    const gitHubRedirectURL = "http://localhost:4000/api/auth/github";
    const path = "/";


    return (
        <>
            <a
                href={`https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${gitHubRedirectURL}?path=${path}&scope=user:email`}
            >
                LOGIN WITH GITHUB
            </a>
        </>
    )

}

export default Login;