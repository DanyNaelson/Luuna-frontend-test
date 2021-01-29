import Head from 'next/head';
import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

const index = () => {
    return (
        <>
            <Head>
                <title>Usuarios - Luuna</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Usuarios</h1>
            <Form inline>
                <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
                <Button variant="outline-info">Buscar</Button>
            </Form>
        </>
    );
};

export default index;