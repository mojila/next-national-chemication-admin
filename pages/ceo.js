import React from 'react'
import Head from 'next/head'
import NavigatorDashboard from '../components/navigator-dashboard';
import ListCeo from '../components/list-ceo';

class CEO extends React.Component {
    render() {
        return (
            <div>
                <Head>
                    <title>CEO</title>
                </Head>
                <div>
                    <NavigatorDashboard/>
                    <div>
                        <ListCeo/>
                    </div>
                </div>
            </div>
        )
    }
}

export default CEO