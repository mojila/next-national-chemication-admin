import React from 'react'
import { withRouter } from 'next/router'
import { Container, Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import ReactTable from 'react-table'
import ReactLoading from 'react-loading'
import matchSorter from 'match-sorter'
import { database } from '../../firebase'

class ListCEO extends React.Component {
    state = {
        loading: true,
        data: '',
        payment: '',
        modal: false
    }
    
    componentDidMount() {
        this.mounted = true

        if (this.mounted) {
            database.ref('pesertaCEO').once('value')
            .then((pesertaCEO) => {
                let raw = pesertaCEO.val()
                let data = Object.keys(raw).map((key) => ({
                    id: key,
                    teamName: raw[key].teamName,
                    leaderExist: raw[key].leaderExist,
                    member1Exist: raw[key].member1Exist,
                    member2Exist: raw[key].member2Exist,
                    payed: raw[key].payed,
                    payment: raw[key].payment,
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

    toggle() {
        this.setState({ modal: !this.state.modal })
    }

    verify(id) {
        database.ref('pesertaCEO/'+id).update({
            payed: true
        })
        .then(() => window.location.reload())
    }

    deverify(id) {
        database.ref('pesertaCEO/'+id).update({
            payed: false
        })
        .then(() => window.location.reload())
    }

    render() {
        let { data, loading, modal, payment } = this.state
        let columns = [{ Header: 'Identitas Tim', columns: [{ Header: 'ID', accessor: 'id', Cell: row => row.value.substring(-5,5) }, { Header: 'Nama Tim', accessor: 'teamName' },{ Header: 'Kontak Ketua', accessor: 'contact' }]}, 
        { Header: 'Status Tim', columns: [{ Header: 'Ketua', accessor: 'leaderExist', Cell: row => (<div className={"p-1 text-white text-center rounded small " + (row.value ? "bg-success":"bg-warning")}>{ row.value ? "Ada":"Belum di isi" }</div>) },{ Header: 'Anggota 1', accessor: 'member1Exist', Cell: row => (<div className={"p-1 text-white text-center rounded small " + (row.value ? "bg-success":"bg-warning")}>{ row.value ? "Ada":"Belum di isi" }</div>) },{ Header: 'Anggota 2', accessor: 'member2Exist', Cell: row => (<div className={"p-1 text-white text-center rounded small " + (row.value ? "bg-success":"bg-warning")}>{ row.value ? "Ada":"Belum di isi" }</div>) }]},
        { Header: 'Pembayaran', columns: [{ Header: 'Status', accessor: 'payed', Cell: row => (row.value ? "Lunas":"Belum Lunas") }, { Header: 'Bukti Pembayaran', accessor: 'payment', Cell: row => (row.value ? <Button size="sm" color="outline-primary" onClick={ () => this.setState({ payment: row.value, modal: true }) } block>Lihat</Button>:"Belum ada") }]},
        { Header: 'Opsi', accessor: 'payed', Cell: row => (row.value ? <Button size="sm" color="outline-danger" onClick={ this.deverify.bind(this, row.row.id) }>Batal Verifikasi</Button>:<Button size="sm" color="outline-success" onClick={ this.verify.bind(this, row.row.id) }>Verifikasi</Button>) }]

        return (
            <div className="pt-2">
                <Container>
                    <Row>
                        <Col>
                            { loading && <ReactLoading type="spin" width={ 64 } height={ 64 } color="green" className="mx-auto mt-5" /> }
                            { !loading && data && <ReactTable defaultPageSize={10} data={ data } columns={ columns }/> }
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

export default withRouter(ListCEO)