import React from 'react'
import { withRouter } from 'next/router'
import NavigatorDashboard from '../navigator-dashboard'
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ReactTable from 'react-table'
import ReactLoading from 'react-loading'
import { database } from '../../firebase'

class ListHSFCPayment extends React.Component {
    state = {
        loading: true,
        data: '',
        modal: false,
        payment: ''
    }
    
    componentDidMount() {
        this.mounted = true

        if (this.mounted) {
            database.ref('paymentHSFC').once('value')
            .then((paymentHSFC) => {
                let raw = paymentHSFC.val()
                let data = Object.keys(raw).map((key) => ({
                    id: key,
                    school: raw[key].school,
                    contact: raw[key].contact,
                    payment: raw[key].payment
                }))

                return data
            })
            .then((data) => this.setState({ data, loading: false }))
        }
    }

    componentWillUnmount() {
        this.mounted = false
    }

    toggle() {
        this.setState({ modal: !this.state.modal })
    }

    render() {
        let { loading, payment, modal, data } = this.state
        let columns = [{ Header: 'Identitas Tim', columns: [
            { Header: 'ID', accessor: 'id', Cell: row => row.value.substr(-5,5) },
            { Header: 'Nama Sekolah', accessor: 'school' },
            { Header: 'Kontak', accessor: 'contact' }
        ]}, { Header: 'Bukti Pembayaran', accessor: 'payment', Cell: row => <Button color="outline-primary" size="sm" onClick={() => this.setState({ modal: true, payment: row.value })} block>Lihat</Button> }]

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
                <Modal isOpen={modal} toggle={this.toggle.bind(this)} className={this.props.className}>
                    <ModalHeader toggle={this.toggle.bind(this)}>Bukti Pembayaran</ModalHeader>
                    <ModalBody>
                        { payment && <center><img className="img-fluid" src={ payment }/></center> }
                    </ModalBody>
                    <ModalFooter>
                        <Button color="secondary" onClick={this.toggle.bind(this)}>Tutup</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default withRouter(ListHSFCPayment)