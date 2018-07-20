import React from 'react'
import { Container, Row, Col, Form, Input, FormGroup, Label, Button } from 'reactstrap'
import ReactLoading from 'react-loading'
import { auth } from '../../firebase'


class LoginForm extends React.Component {
    state = {
        uid: '',
        email: '',
        password: '',
        error: '',
        isLoading: false
    }
    
    onSubmit(e) {
        let { email, password } = this.state
        let isEmailValid = email === "admin@national-chemication.firebaseapp.com"
        let isPasswordValid = password === "adminpassword12345"

        this.setState({ isLoading: true })

        if (isEmailValid && isPasswordValid) {
            auth.signInWithEmailAndPassword(email, password)
                .then(userInfo => {
                    localStorage.setItem('admin-uid', userInfo.user.uid)
                    this.setState({ isLoading: false })
                })
                .catch(error => this.setState({ error }))
        } else {
            alert('Akses Ditolak, Periksa Email dan Password')
        }

        e.preventDefault()
    }

    render() {
        let { email, password, isLoading } = this.state
        
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
                                        <Label>E    mail</Label>
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
                                            isLoading && <ReactLoading className="mx-auto" type="spin" width={ 24 } height={ 24 } color="white"/>
                                        }
                                        {
                                            !isLoading && 'Login'
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

export default LoginForm