import React from 'react'
import { withRouter } from 'next/router'
import NavigatorDashboard from '../navigator-dashboard'
import { Container, Row, Col } from 'reactstrap'
import ReactTable from 'react-table'
import ReactLoading from 'react-loading'
import { database } from '../../firebase'

class ListHSFC extends React.Component {
    state = {
        loading: true,
        data: ''
    }
    
    componentDidMount() {
        this.mounted = true

        if (this.mounted) {
            database.ref('pesertaHSFC').once('value')
            .then((pesertaHSFC) => {
                let raw = pesertaHSFC.val()
                let data = Object.keys(raw).map((key) => ({
                    id: key,
                    school: raw[key].school.name,
                    telephone: raw[key].school.telephone
                }))

                return data
            })
            .then((data) => this.setState({ data, loading: false }))
        }
    }

    componentWillUnmount() {
        this.mounted = false
    }

    render() {
        let { loading, data } = this.state
        let columns = [{ Header: 'Identitas Tim', columns: [
            { Header: 'ID', accessor: 'id', Cell: row => row.value.substr(-5,5) },
            { Header: 'Nama Sekolah', accessor: 'school' },
            { Header: 'Telpon', accessor: 'telephone' }
        ] }]

        return (
            <div>
                <NavigatorDashboard/>
                <Container className="pt-2">
                    <Row>
                        <Col>
                            { loading && <center><ReactLoading className="mt-5" width={64} height={64} color="green" type="spin"/></center> }
                            { !loading && data && <ReactTable defaultPageSize={ 10 } data={ data } columns={ columns } /> }
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(ListHSFC)