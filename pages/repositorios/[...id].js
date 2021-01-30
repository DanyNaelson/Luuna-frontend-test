import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'
import { getRepoById } from '../../redux/actions/repos';
import { Card } from 'react-bootstrap';
import Head from 'next/head';
import moment from 'moment';

const styles = {
    card: {
        margin: '0 auto',
        maxWidth: '300px'
    }
}

const Repo = () => {
    const [repo, setRepo] = useState({})
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        if(router.query.hasOwnProperty('id')){
            fetch(`https://api.github.com/repos/${router.query.id[0]}/${router.query.id[1]}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        dispatch(getRepoById(result.id))
                        setRepo(result)
                    },
                    (error) => {
                        console.log(error)
                    }
                )
        }
    }, []);

    return (
        <>
            <Head>
                <title>{repo.name} - Luuna</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {repo.hasOwnProperty('id') &&
                <Card style={styles.card}>
                    <Card.Img variant="top" className={['img-fluid']} alt="Responsive image" src={repo.owner.avatar_url} />
                    <a href={repo.owner.html_url} target='_blank'><small className="text-muted">By {repo.owner.login}</small></a>
                    <Card.Body>
                        <Card.Title>Repository - {repo.name}</Card.Title>
                        <Card.Text>Descripción: {repo.description}</Card.Text>
                    </Card.Body>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                            <cite title="Source Title">{repo.forks}</cite> Forks 
                        </small>{' - '}
                        <small className="text-muted">
                            <cite title="Source Title">{repo.watchers}</cite> Watchers 
                        </small>{' - '}
                        <small className="text-muted">
                            <cite title="Source Title">{repo.subscribers_count}</cite> Subscribers 
                        </small>
                    </footer>
                    <Card.Footer>
                        <small className="text-muted">Creado el {moment(repo.created_at).format('LL')}</small>
                    </Card.Footer>
                </Card>
            }
        </>
    );
}

export default Repo