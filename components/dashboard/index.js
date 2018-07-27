import React from 'react'
import { withRouter } from 'next/router'
import NavigatorDashboard from '../navigator-dashboard'
import { Container } from 'reactstrap'

class Dashboard extends React.Component {
    state = {
        uid: ''
    }
    
    componentDidMount() {
        const auth = localStorage.getItem('admin-uid')
        const { router } = this.props
        let { uid } = this.state

        if (auth) {
            this.setState({
                uid: auth
            })
        } else {
            router.replace('/login')
        }
    }

    render() {
        const { router } = this.props

        return (
            <div>
                <NavigatorDashboard/>
                <div className="pt-5">
                    <Container>
                        <h1 className="font-weight-light text-center">Selamat Datang</h1>
                    </Container>
                </div>
            </div>
        )
    }
}

export default withRouter(Dashboard)