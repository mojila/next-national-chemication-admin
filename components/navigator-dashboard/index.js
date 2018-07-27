import React from 'react'
import { Navbar, Nav, NavItem, Container, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { withRouter } from 'next/router'

class NavigatorDashboard extends React.Component {
    state = {
        dropdownCEO: false,
        dropdownEC: false,
        dropdownHSFC: false
    }
    
    logout() {
        let { router } = this.props
        
        localStorage.removeItem('admin-uid')
        router.push('/login')
    }

    index() {
        let { router } = this.props
        router.push('/')
    }

    dropdownCEOToggle() {
        let { dropdownCEO } = this.state

        this.setState({ dropdownCEO: !dropdownCEO })
    }

    dropdownECToggle() {
        let { dropdownEC } = this.state

        this.setState({ dropdownEC: !dropdownEC })
    }
    
    dropdownHSFCToggle() {
        let { dropdownHSFC } = this.state

        this.setState({ dropdownHSFC: !dropdownHSFC })
    }
    
    render() {
        let { dropdownCEO, dropdownEC, dropdownHSFC } = this.state
        let { router } = this.props

        return (
            <Navbar light color="light" className="border-bottom">
                <Container>
                    <Nav>
                        <NavItem className="pointer noselect font-weight-light small mt-2" onClick={ this.index.bind(this) }>Beranda</NavItem>
                        <Dropdown nav isOpen={ dropdownCEO } toggle={ this.dropdownCEOToggle.bind(this) } className="pointer noselect font-weight-light small">
                            <DropdownToggle nav caret>
                                CEO
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem onClick={ () => router.push('/ceo') } className="pointer noselect font-weight-light small">List Pendaftar</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown nav isOpen={ dropdownEC } toggle={ this.dropdownECToggle.bind(this) } className="pointer noselect font-weight-light small">
                            <DropdownToggle nav caret>
                                EC
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem className="pointer noselect font-weight-light small">List Pendaftar</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        <Dropdown nav isOpen={ dropdownHSFC } toggle={ this.dropdownHSFCToggle.bind(this) } className="pointer noselect font-weight-light small">
                            <DropdownToggle nav caret>
                                HSFC
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem className="pointer noselect font-weight-light small">List Pendaftar</DropdownItem>
                                <DropdownItem className="pointer noselect font-weight-light small">Bukti Pembayaran</DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </Nav>
                    <Nav>
                        <NavItem onClick={ this.logout.bind(this) } className="pointer noselect font-weight-light small">
                            Log Out
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
        )
    }
}

export default withRouter(NavigatorDashboard)