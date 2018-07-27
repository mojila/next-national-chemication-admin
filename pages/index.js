import React from 'react'
import Head from 'next/head'
import Dashboard from '../components/dashboard'

class Index extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>Administrasi</title>
                </Head>
                <div>
                    <Dashboard/>
                </div>
            </div>
        )
    }
}

export default Index