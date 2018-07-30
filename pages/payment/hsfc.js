import React from 'react'
import Head from 'next/head'
import ListHSFCPayment from '../../components/list-hsfc-payment'

class HSFC extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>HSFC Bukti Pembayaran</title>
                </Head>
                <div>
                    <ListHSFCPayment/>
                </div>
            </div>
        )
    }
}

export default HSFC