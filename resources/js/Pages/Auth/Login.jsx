import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link, useForm } from "@inertiajs/inertia-react"
import InputError from "@/Components/InputError";
import React, { Fragment, memo, useEffect } from 'react'
import Logo from '../../components/New/Logo'
import Front from "@/Layouts/Front"
import axios from 'axios'
import __ from "@/Functions/Translate";

import Banner from '../../../assets/images/pages/01.webp'

const LoginPage = memo(({ status, canResetPassword, loginIcon }) => {

    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: "",
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const onHandleChange = (event) => {
        setData(
            event.target.name,
            event.target.type === "checkbox"
                ? event.target.checked
                : event.target.value
        );
    };

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <Fragment>
            <main className='main-content'>
                <div className='h-100' style={{ backgroundImage: `url(${Banner})`, backgroundSize: 'cover', backgroundRepeat: "no-repeat", position: 'relative', minHeight: '100%' }}>
                    <Container>
                        <Row className='justify-content-center align-items-center height-self-center'>
                            <Col lg="5" md="12" className='align-self-center'>
                                <div className='user-login-card' style={{ background: '#000' }}>
                                    <div className='text-center'>
                                        <Logo />
                                    </div>
                                    {status && (
                                        <div className="mb-4 font-medium text-sm text-green-600">
                                            {status}
                                        </div>
                                    )}
                                    <Form action='post' onSubmit={submit}>
                                        <Form.Group className='mb-3'>
                                            <Form.Label className='text-white fw-500 mb-2'>Email Address</Form.Label>
                                            <Form.Control
                                                type='email'
                                                name="email"
                                                value={data.email}
                                                className='rounded-0'
                                                autoComplete="username"
                                                onChange={onHandleChange}
                                            />
                                            <InputError
                                                message={errors.email}
                                                className="mt-2"
                                            />
                                        </Form.Group>
                                        <Form.Group className='mb-3'>
                                            <Form.Label className='text-white fw-500 mb-2'>PassWord</Form.Label>
                                            <Form.Control
                                                type='password'
                                                name='password'
                                                className='rounded-0'
                                                autoComplete="current-password"
                                                value={data.password}
                                                onChange={onHandleChange}
                                            />
                                            <InputError
                                                message={errors.password}
                                                className="mt-2"
                                            />
                                        </Form.Group>
                                        <Form.Group className="text-end mb-3">
                                            {canResetPassword &&
                                                <Link href={route("password.request")} className="text-primary fw-semibold fst-italic">Forgot Password?</Link>
                                            }
                                        </Form.Group>
                                        <div className="full-button">
                                            <div className="iq-button">
                                                <Button type="submit" className="btn text-uppercase position-relative">
                                                    <span className="button-text">log in</span>
                                                    <i className="fa-solid fa-play"></i>
                                                </Button>
                                            </div>
                                        </div>
                                    </Form>
                                    <p className="my-4 text-center fw-500 text-white">New to Streamit? <Link href={route("signup")} className="text-primary ms-1">{__("Register")}</Link></p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </main>
        </Fragment>
    )
})

LoginPage.displayName = "LoginPage"
export default LoginPage