import React, { useContext } from 'react';
import { FavoritesContext } from '../FavoritesProvider';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { PokemonCard } from '../components';

function Favorites() {
    const { favorites } = useContext(FavoritesContext);
    console.log(favorites);

    return (
        <Container>
            <Row className='g-4'>
                {favorites.map(favorite => (
                    <Col key={favorite.name}  sm='8' md='4' className='mx-auto'>
                        <PokemonCard name={favorite}/>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export { Favorites };