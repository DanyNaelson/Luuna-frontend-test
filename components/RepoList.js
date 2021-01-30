import React from 'react';
import { Card, Button, ListGroup, Image } from 'react-bootstrap';
import { useRouter } from 'next/router'

const styles = {
    button: {
        position: 'absolute',
        right: '4%'
    },
    img: {
        cursor: 'pointer',
        maxWidth: 50
    }
}

const RepoList = ({ repos }) => {
    const router = useRouter()

    return (
        <ListGroup variant="flush">
            {repos.map(repo => 
            <ListGroup.Item key={repo.id}>
                <Card.Title>{repo.name}</Card.Title>
                <Card.Body>
                    <Image src={repo.owner.avatar_url} style={styles.img} roundedCircle /> By <a href={repo.owner.html_url} target='_blank'>{repo.owner.login}</a>
                    <Button variant="primary"
                        style={styles.button}
                        onClick={() => {
                            router.push({
                              pathname: '/repositorios/[...id]',
                              query: { id: [repo.owner.login, repo.name] },
                            })
                        }}
                    >Ver más</Button>
                </Card.Body>
            </ListGroup.Item>
            )}
        </ListGroup>
    );
};

export default RepoList;