import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router'
import { getUserById } from '../../redux/actions/users';
import { Card } from 'react-bootstrap';
import Head from 'next/head';

const styles = {
    card: {
        margin: '0 auto',
        maxWidth: '300px'
    }
}

const User = () => {
    const [user, setUser] = useState({})
    const dispatch = useDispatch()
    const router = useRouter()

    useEffect(() => {
        if(router.query.hasOwnProperty('id')){
            fetch(`https://api.github.com/users/${router.query.id}`)
                .then(res => res.json())
                .then(
                    (result) => {
                        dispatch(getUserById(result.id))
                        setUser(result)
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
                <title>{user.name} - Luuna</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {user.hasOwnProperty('id') &&
                <Card style={styles.card}>
                    <Card.Img variant="top" className={['img-fluid']} alt="Responsive image" src={user.avatar_url} />
                    <Card.Body>
                        <Card.Title>{user.name}</Card.Title>
                        <Card.Text>Bio: {user.bio}</Card.Text>
                    </Card.Body>
                    <footer className="blockquote-footer">
                        <small className="text-muted">
                            <cite title="Source Title">{user.followers}</cite> Followers 
                        </small>{' - '}
                        <small className="text-muted">
                            <cite title="Source Title">{user.following}</cite> Following 
                        </small>
                    </footer>
                    <Card.Footer>
                        Github url: <a href={user.html_url} target='_blank'><small className="text-muted">{user.html_url}</small></a>
                    </Card.Footer>
                </Card>
            }
        </>
    );
}

export default User