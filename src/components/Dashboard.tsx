import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useGetPokemonQuery } from '../slice/apiSlice';
import { Pokemon } from '../types/pokemon';
import { PokemonDetails } from './PokemonDetails';

export const Dashboard = () => {
  const [pageOffset, setPageOffset] = useState(0);
  const [selectedPokemion, setSelectedPokemion] = useState('');
  const { data: pokemonList, isLoading } = useGetPokemonQuery(pageOffset);

  if (isLoading) {
    return (
      <>
        <h4>Loading...</h4>
      </>
    );
  }

  return (
    <div id="dashboard">
      <h4>Pokemons</h4>
      <Container>
        <Row>
          <Col md={7} className="px-0">
            {pokemonList?.results &&
              pokemonList?.results.map((pokemon: Pokemon, idx: number) => (
                <div
                  key={idx}
                  className="list-item px-2 py-1 cursor-pointer"
                  onClick={() => setSelectedPokemion(pokemon.name)}
                >
                  <span className="text-capitalize">{pokemon.name}</span>
                </div>
              ))}
          </Col>
          <Col className="details-panel py-2 text-primary">
            <PokemonDetails name={selectedPokemion} />
          </Col>
        </Row>
      </Container>
      <div className="mt-2 mb-2">
        <button
          className="btn btn-secondary"
          onClick={() => {
            setPageOffset(pageOffset - 20);
          }}
          disabled={!pokemonList?.previous}
        >
          Previous
        </button>
        <button
          className="btn btn-secondary mx-2"
          onClick={() => {
            setPageOffset(pageOffset + 20);
          }}
          disabled={!pokemonList?.next}
        >
          Next
        </button>
      </div>
    </div>
  );
};
