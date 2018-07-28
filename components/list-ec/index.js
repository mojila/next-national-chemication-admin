import React from 'react'
import { withRouter } from 'next/router'
import NavigatorDashboard from '../navigator-dashboard'
import { Container, Row, Col } from 'reactstrap'
import ReactTable from 'react-table'
import ReactLoading from 'react-loading'
import { database } from '../../firebase'

class ListEC extends React.Component {
    state = {
        loading: true,
        data: ''
    }
    
    componentDidMount() {
        this.mounted = true

        if (this.mounted) {
            database.ref('pesertaEC').once('value')
            .then((pesertaEC) => {
                let raw = pesertaEC.val()
                let data = Object.keys(raw).map((key) => ({
                    id: key,
                    university: raw[key].university.name,
                    title: raw[key].paper.title,
                    subTheme: raw[key].paper.subTheme,
                    contact: raw[key].leader.contact
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
            { Header: 'Institusi', accessor: 'university' },
            { Header: 'Kontak Ketua', accessor: 'contact' }
        ]},{ Header: 'Karya', columns: [
            { Header: 'Judul', accessor: 'title' },
            { Header: 'Sub Tema', accessor: 'subTheme' }
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

export default withRouter(ListEC)