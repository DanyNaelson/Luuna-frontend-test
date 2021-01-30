import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { Form, FormControl } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import RepoList from '../../components/RepoList';
import { getRepos, updateRepoSearch } from '../../redux/actions/repos';

const index = () => {
    const [repos, setRepos] = useState([])
    const inputValue = useSelector((state) => state.repos.inputRepoSearch)
    const dispatch = useDispatch()

    useEffect(() => {
        if(inputValue === "" || inputValue === undefined){
            fetch("https://api.github.com/repositories")
                .then(res => res.json())
                .then(
                    (result) => {
                        dispatch(getRepos(result))
                        setRepos(result)
                    },
                    (error) => {
                        console.log(error)
                    }
                )
        } else {
            const filteredRepos = repos.filter(repo => repo.name.toLowerCase().indexOf(inputValue.toLowerCase()) > -1)
            setRepos(filteredRepos)
        }
    }, [inputValue]);

    return (
        <>
            <Head>
                <title>Repositorios - Luuna</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>Repositorios</h1>
            <Form inline>
                <FormControl type="text" placeholder="Buscar" className="mr-sm-2" value={inputValue} onChange={e => dispatch(updateRepoSearch(e.target.value))} />
            </Form>
            <RepoList repos={repos} />
        </>
    );
};

export default index;