import React from 'react'
import Head from 'next/head'
import ListEC from '../components/list-ec'

class EC extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>EC</title>
                </Head>
                <div>
                    <ListEC/>
                </div>
            </div>
        )
    }
}

export default EC