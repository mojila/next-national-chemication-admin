import React from 'react'
import { withRouter } from 'next/router'
import { Container, Button } from 'reactstrap'
import ReactTable from 'react-table'
import ReactLoading from 'react-loading'
import matchSorter from 'match-sorter'
import { database } from '../../firebase'

class ListCEO extends React.Component {
    state = {
        isLoading: false,
        data: ''
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

        this.setState({ isLoading: true })

        database.ref().child('pesertaCeo').once('value')
            .then((snapshot) => {
                let raw = snapshot.val()
                let data = Object.keys(raw).map((key) => ({
                    id: key,
                    namaTim: raw[key].namaTim,
                    email: raw[key].email,
                    sekolah: raw[key].sekolah,
                    contact: raw[key].contact,
                    ketua: raw[key].ketua,
                    anggota1: raw[key].anggota1,
                    anggota2: raw[key].anggota2,
                    buktiPembayaran: raw[key].buktiPembayaran,
                    
                }))

                this.setState({ data, isLoading: false })
            })
            .catch(error => console.error(error))
    }

    render() {
        let colums = [
        {
            Header: 'ID',
            accessor: 'id',
            filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["id"] }),
            filterAll: true
        },{
            Header: 'Nama Tim ',
            accessor: 'namaTim',
            filterMethod: (filter, rows) =>
                matchSorter(rows, filter.value, { keys: ["namaTim"] }),
            filterAll: true
        },{
            Header: 'Email',
            accessor: 'email',
        },{
            Header: 'Kontak',
            accessor: 'contact'
        },{
            Header: 'Pembayaran',
            accessor: ''
        }]
        let { data, isLoading } = this.state

        return (
            <div className="pt-2">
                <Container>
                    {
                        isLoading && <ReactLoading type="spin" width={ 64 } height={ 64 } color="#444" className="mx-auto mt-5" />
                    }
                    {
                        !isLoading && data && <ReactTable className="-striped -highlight" defaultPageSize={ 10 } data={ data ? data:''} filterable defaultFilterMethod={ (filter, row) => String(row[filter.id]) === filter.value } columns={colums}/>
                    }
                </Container>
            </div>
        )
    }
}

export default withRouter(ListCEO)