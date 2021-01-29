import Head from 'next/head';
import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { updateUserSearch } from '../../redux/actions/users';

const index = () => {
    const inputValue = useSelector((state) => state.inputUserSearch)
    const dispatch = useDispatch()

    return (
        <>
            <Head>
                <title>Usuarios - Luuna</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Usuarios</h1>
            <Form inline>
                <FormControl type="text" placeholder="Buscar" className="mr-sm-2" value={inputValue} onChange={e => dispatch(updateUserSearch(e.target.value))} />
                <Button variant="outline-info">Buscar</Button>
            </Form>
        </>
    );
};

export default index;