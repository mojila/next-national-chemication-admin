import React from 'react'
import { withRouter } from 'next/router'
import { Container, Button, Row, Col } from 'reactstrap'
import ReactTable from 'react-table'
import ReactLoading from 'react-loading'
import matchSorter from 'match-sorter'
import { database } from '../../firebase'

class ListCEO extends React.Component {
    state = {
        isLoading: false,
        data: '',
        payment: '',
        paymentReview: false
    }
    
    componentDidMount() {
        // let raw = {
        //     k4PKotQFAWaNwFvoFefFGssxJ2h2: {
        //         namaTim: 'Tim 1',
        //         email: 'adaw@gmail.com',
        //         contact: '3423432434'
        //     },
        //     k1PKotQFAWaNwFvoFefFGssxJ2h2: {
        //         namaTim: 'Tim 2',
        //         email: 'adaw@gmail.com',
        //         contact: '3423432434'
        //     },
        //     k2PKotQFAWaNwFvoFefFGssxJ2h2: {
        //         namaTim: 'Tim 3',
        //         email: 'adaw@gmail.com',
        //         contact: '3423432434'
        //     }
        // }

        // let data = Object.keys(raw).map((key) => ({ id: key, namaTim: raw[key].namaTim, email: raw[key].email, contact: raw[key].contact }));

        // this.setState({ data })

        // this.setState({ isLoading: true })

        // database.ref().child('pesertaCeo').once('value')
        //     .then((snapshot) => {
        //         let raw = snapshot.val()
        //         let data = Object.keys(raw).map((key) => ({
        //             id: key,
        //             namaTim: raw[key].namaTim,
        //             email: raw[key].email,
        //             sekolah: raw[key].sekolah,
        //             contact: raw[key].contact,
        //             ketua: raw[key].ketua,
        //             anggota1: raw[key].anggota1,
        //             anggota2: raw[key].anggota2,
        //             buktiPembayaran: raw[key].buktiPembayaran,
                    
        //         }))

        //         this.setState({ data, isLoading: false })
        //     })
        //     .catch(error => console.error(error))
    }

    render() {
        // let colums = [{
        //     Header: 'ID',
        //     accessor: 'id',
        //     filterMethod: (filter, rows) =>
        //         matchSorter(rows, filter.value, { keys: ["id"] }),
        //     filterAll: true
        // },{
        //     Header: 'Nama Tim ',
        //     accessor: 'namaTim',
        //     filterMethod: (filter, rows) =>
        //         matchSorter(rows, filter.value, { keys: ["namaTim"] }),
        //     filterAll: true
        // },{
        //     Header: 'Email',
        //     accessor: 'email',
        // },{
        //     Header: 'Kontak',
        //     accessor: 'contact'
        // },{
        //     Header: 'Pembayaran',
        //     accessor: ''
        // }]
        let data = [{ id: 'VhQnXDSz8AVb2bbBFkgPyDWReyi1', teamName: 'Testing', leaderExist: true, member1Exist: true, member2Exist: false, payed: true, payment: "https://firebasestorage.googleapis.com/v0/b/data-nc.appspot.com/o/pesertaCEO%2Fag0QnnkgPuZ3cLhXvLqL4pvKtu03%2Fpayment%2Fcropped-national-chemication-2.png?alt=media&token=c28e0c67-d1ad-4f6c-9652-688c1a2839ec" }]

        let columns = [{ Header: 'Identitas Tim', columns: [{ Header: 'ID', accessor: 'id', Cell: row => row.value.substring(-5,5) }, { Header: 'Nama Tim', accessor: 'teamName' }]}, 
        { Header: 'Status Tim', columns: [{ Header: 'Ketua', accessor: 'leaderExist', Cell: row => (<div className={"p-1 text-white text-center rounded small " + (row.value ? "bg-success":"bg-warning")}>{ row.value ? "Ada":"Belum di isi" }</div>) },{ Header: 'Anggota 1', accessor: 'member1Exist', Cell: row => (<div className={"p-1 text-white text-center rounded small " + (row.value ? "bg-success":"bg-warning")}>{ row.value ? "Ada":"Belum di isi" }</div>) },{ Header: 'Anggota 2', accessor: 'member2Exist', Cell: row => (<div className={"p-1 text-white text-center rounded small " + (row.value ? "bg-success":"bg-warning")}>{ row.value ? "Ada":"Belum di isi" }</div>) }]},
        { Header: 'Pembayaran', columns: [{ Header: 'Status', accessor: 'payed', Cell: row => (row.value ? "Lunas":"Belum Lunas") }, { Header: 'Bukti Pembayaran', accessor: 'payment', Cell: row => (row.value ? <Button size="sm" color="outline-primary" block>Lihat</Button>:"Belum ada") }]},
        { Header: 'Opsi', accessor: 'payed', Cell: row => (row.value ? <Button size="sm" color="outline-danger">Batal Verifikasi</Button>:<Button size="sm" color="outline-success">Verifikasi</Button>) }]

        return (
            <div className="pt-2">
                <Container>
                    {/* {
                        isLoading && <ReactLoading type="spin" width={ 64 } height={ 64 } color="#444" className="mx-auto mt-5" />
                    } */}
                    {/* {
                        !isLoading && data && <ReactTable className="-striped -highlight" defaultPageSize={ 10 } data={ data ? data:''} filterable defaultFilterMethod={ (filter, row) => String(row[filter.id]) === filter.value } columns={colums}/>
                    } */}
                    <Row>
                        <Col>
                            <ReactTable defaultPageSize={10} data={ data } columns={ columns }/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(ListCEO)