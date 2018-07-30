import React from 'react'
import Head from 'next/head'
import ListHSFC from '../components/list-hsfc'

class HSFC extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>HSFC Pendaftar</title>
                </Head>
                <div>
                    <ListHSFC/>
                </div>
            </div>
        )
    }
}

export default HSFC