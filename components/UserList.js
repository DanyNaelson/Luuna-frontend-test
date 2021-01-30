import React from 'react';
import { Card, CardColumns, Button } from 'react-bootstrap';
import { useRouter } from 'next/router'

const styles = {
    cardImg: {
        cursor: 'pointer'
    }
}

const UserList = ({ users }) => {
    const router = useRouter()

    return (
        <CardColumns>
            {users.map(user => 
            <Card key={user.id}>
                <Card.Img variant="top" src={user.avatar_url}
                    onClick={() => {
                        router.push({
                          pathname: '/usuarios/[id]',
                          query: { id: user.login },
                        })
                    }}
                    style={styles.cardImg}
                />
                <Card.Body className='text-center'>
                    <Card.Title>{`@${user.login}`}</Card.Title>
                    <Button variant="primary"
                        onClick={() => {
                            router.push({
                              pathname: '/usuarios/[id]',
                              query: { id: user.login },
                            })
                        }}
                    >Ver más</Button>
                </Card.Body>
                <Card.Footer>
                    Github url: <a href={user.html_url} target='_blank'><small className="text-muted">{user.html_url}</small></a>
                </Card.Footer>
            </Card>
            )}
        </CardColumns>
    );
};

export default UserList;