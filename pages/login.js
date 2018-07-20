import React from 'react'
import Head from 'next/head'
import LoginForm from '../components/login-form'

class Login extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Login</title>
                </Head>
                <div className="pt-5">
                    <LoginForm/>
                </div>
            </div>
        )
    }
}

export default Login