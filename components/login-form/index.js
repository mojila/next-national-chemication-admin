import React from 'react'
import { Container, Row, Col, Form, Input, FormGroup, Label, Button } from 'reactstrap'
import ReactLoading from 'react-loading'
import { withRouter } from 'next/router'
import { auth } from '../../firebase'


class LoginForm extends React.Component {
    state = {
        uid: '',
        email: '',
        password: '',
        error: '',
        loading: false
    }
    
    componentDidMount() {
        this.mounted = true

        if (this.mounted) {
            let { router } = this.props
            let auth = localStorage.getItem('admin-uid')

            if (auth) {
                router.push('/')
            }
        }
    }

    onSubmit(e) {
        const { router } = this.props
        let { email, password } = this.state
        let isEmailValid = email === "admin@gmail.com"
        let isPasswordValid = password === "admin12345"

        this.setState({ loading: true })

        if (isEmailValid && isPasswordValid) {
            auth.signInWithEmailAndPassword(email, password)
                .then(userInfo => {
                    localStorage.setItem('admin-uid', userInfo.user.uid)
                    this.setState({ loading: false })
                    router.push('/')
                })
                .catch(error => this.setState({ error }))
        } else {
            alert('Akses Ditolak, Periksa Email dan Password')
            this.setState({ loading: false })
        }

        e.preventDefault()
    }

    render() {
        let { email, password, loading } = this.state
        
        return (
            <Container>
                <Row>
                    <Col>
                        <div className="p-2 bg-secondary text-center text-white">
                            Login
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="p-4 bg-white border font-weight-light">
                            <Form onSubmit={ this.onSubmit.bind(this) }>
                                <div>
                                    <FormGroup>
                                        <Label>Email</Label>
                                        <Input type="email" value={ email } onChange={ e => this.setState({ email: e.target.value }) } required/>
                                    </FormGroup>
                                </div>
                                <div>
                                    <FormGroup>
                                        <Label>Password</Label>
                                        <Input type="password" value={ password } onChange={ e => this.setState({ password: e.target.value }) } required/>
                                    </FormGroup>
                                </div>
                                <div>
                                    <Button type="submit" color="success" block>
                                        {
                                            loading && <ReactLoading className="mx-auto" type="spin" width={ 24 } height={ 24 } color="white"/>
                                        }
                                        {
                                            !loading && 'Login'
                                        }
                                    </Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default withRouter(LoginForm)