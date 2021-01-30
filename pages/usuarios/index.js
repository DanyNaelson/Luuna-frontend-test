import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import UserList from '../../components/UserList';
import { updateUserSearch, getUsers } from '../../redux/actions/users';

const index = () => {
    const [users, setUsers] = useState([])
    const inputValue = useSelector((state) => state.users.inputUserSearch)
    const dispatch = useDispatch()

    useEffect(() => {
        if(inputValue === "" || inputValue === undefined){
            fetch("https://api.github.com/users")
                .then(res => res.json())
                .then(
                    (result) => {
                        dispatch(getUsers(result))
                        setUsers(result)
                    },
                    (error) => {
                        console.log(error)
                    }
                )
        } else {
            const filteredUsers = users.filter(user => user.login.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
            setUsers(filteredUsers)
        }
    }, [inputValue]);

    return (
        <>
            <Head>
                <title>Usuarios - Luuna</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Usuarios</h1>
            <Form inline>
                <FormControl type="text" placeholder="Buscar" className="mr-sm-2" value={inputValue} onChange={e => dispatch(updateUserSearch(e.target.value))} />
            </Form>
            <UserList users={users} />
        </>
    );
};

export default index;