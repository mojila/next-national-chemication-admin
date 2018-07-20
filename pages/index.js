import React from 'react'
import Head from 'next/head'
import Router from 'next/router'

class Index extends React.Component {
    state = {
        uid: ''
    }
    
    componentDidMount() {
        const auth = localStorage.getItem('admin-uid')
        let { uid } = this.state

        if (auth) {
            this.setState({
                uid: auth
            })
        } else {
            Router.replace('/login')
        }
    }
    
    render() {
        return (
            <div>
                <Head>
                    <title>Administrasi</title>
                </Head>
                <div>
                    Welcome
                </div>
            </div>
        )
    }
}

export default Index